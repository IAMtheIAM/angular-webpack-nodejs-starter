import { Component, ViewChild, OnInit } from '@angular/core';
import { DrawingManager } from '@ngui/map';

/*
 * Shared Utilities
 */
import { Logging, UtilityService } from '../../services/utility.service';
// import { Authentication } from '../../services/authentication.service';
// import { AppState } from '../../services/appstate.service';

/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 * external stylesheets. Do NOT add styles the "Angular2 Way" in the
 * @Component decorator ("styles" and "styleUrls" properties)
 */
import './map.style.scss';

@Component({
   selector: 'map',
   templateUrl: './map.template.html',
})

export class MapComponent {
   map: any;
   selectedShape: google.maps.Circle | google.maps.Rectangle | google.maps.Polygon | google.maps.Polyline;
   selectedShapeType: string;
   colors: string[] = ['#1E90FF', '#FF1493', '#32CD32', '#FF8C00', '#4B0082'];
   selectedColor: string;
   colorButtons = {};
   placeMarkers: Array<google.maps.Marker> = [];
   input: HTMLInputElement;
   mapzoom: string;
   mapcenter: string;
   position: string;
   path: string;
   bounds: string;
   centerBounds: string;
   radius: string;

   @ViewChild(DrawingManager) private drawingManager: DrawingManager;

   constructor(public utilityService: UtilityService) {

      // // Async load google maps API, with webpack require.ensure
      // require.ensure([], function(require) {
      //
      //    // This is the google maps api JS file generated using monsoon's key
      //    // From URL: https://maps.googleapis.com/maps/api/js?v=3.27&key=AIzaSyDFJ9CWZ6ko8W-43lG1gIjv0IDm4QUvCrQ
      //    // require('../../lib/google/maps/js/google.maps.api.monsoon-key.js');
      //
      //    // MapComponent.prototype.initMap();
      //
      // });
   }

   ngOnInit() {
      if (Logging.isEnabled.light) { console.log('%c Hello \"Map\" component!', Logging.normal.lime); }

      this.drawingManager['initialized$'].subscribe((dm) => {
         this.map = dm.map;
         google.maps.event.addListener(dm, 'overlaycomplete', (event) => {

            // Switch back to non-drawing mode after drawing a shape.
            dm.setDrawingMode(null);

            // Add an event listeners to the newly-drawn shape
            var newShape = event.overlay;
            newShape.type = event.type;

            // if its not a marker, add custom event enableCoordinatesChangedEvent to the overlay/shape
            var isNotMarker = (newShape.type !== google.maps.drawing.OverlayType.MARKER);
            if (isNotMarker) {
               /**
                * () => enableCoordinatesChangedEvent
                *
                * description: Extends google maps with a custom event listener called 'coordinates_changed' for
                * all shapes ' instead of listening for
                * 'center_changed' (circle), 'bounds_changed'(rectangle), and 'set_at' (polygon/polyline)
                * individually
                */
               event.overlay.enableCoordinatesChangedEvent(newShape);
            }
            google.maps.event.addListener(newShape, 'click', () => {
               this.setSelection(newShape, isNotMarker);
            });
            google.maps.event.addListener(newShape, 'coordinates_changed', (index, obj) => {
               // This is the main event to listen for, all shapes will trigger this event when dragged, resized, or reshaped
               console.log('coordinates_changed');
               this.updateCurSelText(newShape);
            });
            google.maps.event.addListener(newShape, 'drag', () => {
               // console.log('"drag" fired - ignoring, using custom "coordinates_changed" event');
               // this.updateCurSelText(newShape); // uncomment this for realtime coordinate updates while dragging
            });
            google.maps.event.addListener(newShape, 'dragend', () => {
               // console.log('"dragend" fired - ignoring, using custom "coordinates_changed" event');
            });

            this.setSelection(newShape, isNotMarker);
         });

         // enable 'coordinates_changed' custom event for all shapes
         google.maps.Rectangle.prototype.enableCoordinatesChangedEvent = this.enableCoordinatesChangedEvent;
         google.maps.Circle.prototype.enableCoordinatesChangedEvent = this.enableCoordinatesChangedEvent;
         google.maps.Polygon.prototype.enableCoordinatesChangedEvent = this.enableCoordinatesChangedEvent;
         google.maps.Polyline.prototype.enableCoordinatesChangedEvent = this.enableCoordinatesChangedEvent;

         // Clear the current selection when the drawing mode is changed, or when the map is clicked.
         google.maps.event.addListener(dm, 'drawingmode_changed', this.clearSelection);
         google.maps.event.addListener(this.map, 'click', this.clearSelection);

         this.buildColorPalette();

         // Create the search box and link it to the UI element.
         this.input = <HTMLInputElement>document.getElementById('pac-input');
         this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(this.input);

         var searchBox = new google.maps.places.SearchBox((this.input));
         // Listen for the event fired when the user selects an item from the pick list. Retrieve the matching places for that item.
         google.maps.event.addListener(searchBox, 'places_changed', () => {
            var places = searchBox.getPlaces();
            if (places.length === 0) {
               return;
            }

            // Clear out the old places markers from map.
            for (var i = 0, marker; marker = this.placeMarkers[i]; i++) {
               marker.setMap(null);
            }
            // Clear the old places data object.
            this.placeMarkers = [];

            // For each place, get the icon, place name, and location.
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0, place; place = places[i]; i++) {
               var image = {
                  url: place.icon,
                  size: new google.maps.Size(71, 71),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(17, 34),
                  scaledSize: new google.maps.Size(25, 25)
               };
               // Create a marker for each place.
               var placemarker = new google.maps.Marker({
                  map: this.map,
                  icon: image,
                  title: place.name,
                  position: place.geometry.location
               });
               this.placeMarkers.push(placemarker);
               bounds.extend(place.geometry.location);
            }
            this.map.fitBounds(bounds);
         });

         // Bias the SearchBox results towards places that are within the bounds of the current map's viewport.
         google.maps.event.addListener(this.map, 'bounds_changed', (event) => {
            var bounds = this.map.getBounds();
            searchBox.setBounds(bounds);
            // this.curposdiv = "curpos Z: " + this.map.getZoom() + " C: " + this.map.getCenter().toUrlValue();
            this.mapzoom = this.map.getZoom();
            this.mapcenter = this.map.getCenter().toUrlValue();
         });

      });
   }

   enableCoordinatesChangedEvent(selectedShape) {
      var type = selectedShape.type, isBeingDragged = false, triggerCoordinatesChanged = () => {

         // Broadcast normalized event
         google.maps.event.trigger(selectedShape, 'coordinates_changed');
      };

      // If the overlay is being dragged, set_at gets called repeatedly, so either we can debounce that or ignore while dragging, ignoring is more efficient
      google.maps.event.addListener(selectedShape, 'dragstart', () => {
         isBeingDragged = true;
      });

      //if the overlay is dragged
      google.maps.event.addListener(selectedShape, 'dragend', () => {
         triggerCoordinatesChanged();
         isBeingDragged = false;
      });

      if (type === 'circle') {
         google.maps.event.addListener(selectedShape, "radius_changed", () => {
            triggerCoordinatesChanged();
         });

         google.maps.event.addListener(selectedShape, "center_changed", () => {
            if (!isBeingDragged) {
               triggerCoordinatesChanged();
            }
         });
      }
      else if (type === 'rectangle') {
         google.maps.event.addListener(selectedShape, "bounds_changed", () => {
            if (!isBeingDragged) {
               triggerCoordinatesChanged();
            }
         });
      }
      else if (type === 'polygon' || type === 'polygon') {
         // If vertices are added or deleted to any of the possible paths
            selectedShape.getPaths().forEach((path, i) => {
            google.maps.event.addListener(path, "insert_at", () => {
               triggerCoordinatesChanged();
            });
            google.maps.event.addListener(path, "set_at", () => {
               if (!isBeingDragged) {
                  triggerCoordinatesChanged();
               }
            });
            google.maps.event.addListener(path, "remove_at", () => {
               triggerCoordinatesChanged();
            });
         });
      }

   }

   updateCurSelText(selectedShape) {
      var coordinates, xy, contentString = '';

      // Reset values every time a shape is selected
      this.bounds = selectedShape.getBounds;
      this.centerBounds = selectedShape.getBounds;
      this.path = selectedShape.getPath;
      this.radius = selectedShape.getRadius;
      this.position = selectedShape.position;

      if (selectedShape.type === 'marker') {
         this.position = selectedShape.position.toUrlValue();
      }
      else if (selectedShape.type === 'circle' || selectedShape.type === 'rectangle') {

         if (selectedShape.type === 'circle') {
            this.radius = selectedShape.getRadius();
         }

         coordinates = selectedShape.getBounds();
         this.centerBounds = coordinates.getCenter().toUrlValue();
         this.bounds = "[NE: " + coordinates.getNorthEast().toUrlValue() + " SW: " + coordinates.getSouthWest().toUrlValue() + "]";
         var coordinatesJson = coordinates.toJSON();
         console.log(coordinatesJson);

         // Enumerate over the object properties. i.e. for (prop in obj) { alert(prop + ' = ' + obj[prop]) }
         for (xy in coordinatesJson) {
            if (coordinatesJson.hasOwnProperty(xy)) {
               contentString = xy + ': ' + coordinatesJson[xy];
               // console.log(`${selectedShape.type} Coordinate: ${contentString}`);
            }
         }
      }
      else if (selectedShape.type === 'polygon' || selectedShape.type === 'polyline') {
         this.path = "";

         // For a polygon or polyline, getPath() returns the MVCArray of LatLngs.
         for (var i = 0; i < selectedShape.getPath().getLength(); i++) {
            this.path += selectedShape.getPath().getAt(i).toUrlValue() + " , ";
         }

         var polyCoordinateArr = [];
         // Iterate over the vertices.
         selectedShape.getPath().getArray().forEach((el, i) => {
            polyCoordinateArr.push(el.toJSON());
            // console.log(`${selectedShape.type} Coordinate ${i + 1}: `, el.toJSON());
         })
         console.log(polyCoordinateArr);
      }

      // Inspired by example on github gist:
      // See: https://gist.github.com/anonymous/68b8f6a586c512cfc768#file-gmaps-drawing-tools-places-htm-L224

   }

   onMapReady(map) {
      // console.log('map', map);
      // console.log('markers', map.markers);  // to get all markers as an array
   }

   onMapClick(event) {
      this.clearSelection();
      // this.positions.push(event.latLng);
      event.target.panTo(event.latLng);
   }

   setSelection(shape, isNotMarker) {
      this.clearSelection();
      this.selectedShape = shape;
      this.selectedShapeType = shape.type;
      if (isNotMarker) {
         shape.setEditable(true);
      }
      this.selectColor(shape.get('fillColor') || shape.get('strokeColor'), null);
      this.updateCurSelText(shape);
   }

   clearSelection() {
      if (this.selectedShape) {
         if (typeof this.selectedShape.setEditable == 'function') {
            this.selectedShape.setEditable(false);
         }
         this.selectedShape = null;
      }
   }

   deleteSelectedShape() {
      if (this.selectedShape) {
         this.selectedShape.setMap(null);
      }
   }

   selectColor(color, element) {
      this.selectedColor = color;

      if (element) {
         // Get the node list
         var colorButtons = document.getElementsByClassName('color-button');
         // Turn the node list into an array
         var colorButtonsArr = this.utilityService.slice(colorButtons);

         // Remove .selected class from all buttons
         for (var i2 = 0; i2 < colorButtonsArr.length; i2++) {
            // console.log(colorButtonsArr[i]); //second console output
            colorButtonsArr[i2].classList.remove('selected');
         }

         // Now find the selected color and add the .selected class
         for (var i = 0; i < this.colors.length; ++i) {
            var currColor = this.colors[i];

            if (currColor === color) {
               element.classList.add('selected');
            }
         }
      }

      // Retrieves the current options from the drawing manager and replaces the
      // stroke or fill color as appropriate.
      var polylineOptions = this.drawingManager.polylineOptions;
      polylineOptions.strokeColor = color;
      this.drawingManager.polylineOptions = polylineOptions;

      var rectangleOptions = this.drawingManager.rectangleOptions;
      rectangleOptions.fillColor = color;
      this.drawingManager.rectangleOptions = rectangleOptions;

      var circleOptions = this.drawingManager.circleOptions;
      circleOptions.fillColor = color;
      this.drawingManager.circleOptions = circleOptions;

      var polygonOptions = this.drawingManager.polygonOptions;
      polygonOptions.fillColor = color;
      this.drawingManager.polygonOptions = polygonOptions;
   }

   setSelectedShapeColor(color) {
      if (this.selectedShape) {
         if (this.selectedShape.type == 'polyline') {
            this.selectedShape.set('strokeColor', color);
         }
         else {
            this.selectedShape.set('fillColor', color);
         }
      }
   }

   makeColorButton(color) {
      var _this = this;
      var button = document.createElement('span');
      button.className = 'color-button';
      button.style.backgroundColor = color;
      google.maps.event.addDomListener(button, 'click', () => {
         _this.selectColor(color, button);
         _this.setSelectedShapeColor(color);
      });
      return button;
   }

   buildColorPalette() {
      var colorPalette = document.getElementById('color-palette');
      for (var i = 0; i < this.colors.length; ++i) {
         var currColor = this.colors[i];
         var colorButton = this.makeColorButton(currColor);
         colorPalette.appendChild(colorButton);
         this.colorButtons[currColor] = colorButton;
      }
      this.selectColor(this.colors[0], null);
   }

   deletePlacesSearchResults() {
      var _this = this;
      for (var i = 0, marker; marker = _this.placeMarkers[i]; i++) {
         marker.setMap(null);
      }
      _this.placeMarkers = [];
      this.input.value = ''; // clear the box too
   }

}
