import { Component } from '@angular/core';

/*
 * Shared Utilities
 */
import { Logging } from '../services/utility.service';
import { Authentication } from '../services/authentication.service';
import { AppState } from '../services/appstate.service';
import { constructorForceChangeDetection } from '../common/forceChangeDetection';


/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
import './detail.style.scss';

@Component({
  selector: 'detail',
   templateUrl: './detail.template.html',
})
export class DetailComponent {
  constructor() {

     // TODO: This is a hack. Find a better solution for getting change detection to work when the final Angular2 RTM
     // gets released
     constructorForceChangeDetection();
  }

  ngOnInit() {
     if (Logging.isEnabled.light) { console.log('%c Hello \"Detail\" component!', Logging.normal.lime); }
  }

}
