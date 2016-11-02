// nav-sidebar.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
// import { ToggleFullScreen } from '../../common/fullscreen.ts';

/*
 * Shared Utilities
 */
import { Logging } from '../../services/utility.service';
import { AppState } from '../../services/appstate.service';
// import { Authentication } from '../../common/authentication.service';

/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
import './nav-header.style.scss';

@Component({
   selector: 'nav-header',
   templateUrl: './nav-header.template.html'
})
export class NavHeaderComponent {
   fullscreen: ToggleFullScreen;

   constructor(
      public appState: AppState) {
      this.fullscreen = new ToggleFullScreen();

   }

   ngOnInit() {
      if (Logging.isEnabled.light) {
         console.log('%c Hello \"Nav-Header\" component!', Logging.normal.lime);
      }
   }

   toggleFullScreen() {
      this.fullscreen.toggleFullScreen();
   }

}


export class ToggleFullScreen {
   viewFullScreenTriggerID: string;
   viewFullScreenClass: string;
   cancelFullScreenClass: string;
   viewFullscreenElem: any;
   activeIcon: string;
   notFullscreenIcon: string;
   isFullscreenIcon: string


   constructor() {
      this.viewFullScreenTriggerID = "#fullScreenTrigger";
      this.viewFullScreenClass = "not-fullscreen";
      this.cancelFullScreenClass = "is-fullscreen";
      this.notFullscreenIcon = "/assets/icons/fullscreen-enter.svg";
      this.isFullscreenIcon = "/assets/icons/fullscreen-exit.svg";
      this.activeIcon = this.notFullscreenIcon;
   }

   toggleFullScreen() {
      this.viewFullscreenElem = document.querySelector(this.viewFullScreenTriggerID);

      if (this.viewFullscreenElem.classList.contains(this.viewFullScreenClass)) {

         var docElm = document.documentElement;
         if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
         } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
         } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
         } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
         }

         this.viewFullscreenElem.classList.toggle(this.viewFullScreenClass);
         this.viewFullscreenElem.classList.toggle(this.cancelFullScreenClass);
         this.activeIcon = this.isFullscreenIcon;

      }

      else if (this.viewFullscreenElem.classList.contains(this.cancelFullScreenClass)) {
         if (document.exitFullscreen) {
            document.exitFullscreen();
         } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
         } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
         } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
         }

         this.viewFullscreenElem.classList.toggle(this.viewFullScreenClass);
         this.viewFullscreenElem.classList.toggle(this.cancelFullScreenClass);
         this.activeIcon = this.notFullscreenIcon;
      }
   }
}
