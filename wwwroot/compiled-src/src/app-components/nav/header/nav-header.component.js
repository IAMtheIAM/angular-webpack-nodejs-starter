"use strict";
// nav-sidebar.component.ts
/*
 * Angular 2 decorators and services
 */
var core_1 = require('@angular/core');
// import { ToggleFullScreen } from '../../common/fullscreen.ts';
/*
 * Shared Utilities
 */
var utility_service_1 = require('../../services/utility.service');
var appstate_service_1 = require('../../services/appstate.service');
// import { Authentication } from '../../common/authentication.service';
/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable so-called "Lazy Loading" CSS/SCSS files "on demand"
 * as the app views need them. Do NOT add styles the "Angular2 Way"
 * in the @Component decorator ("styles" and "styleUrls" properties)
 */
require('./nav-header.style.scss');
var NavHeaderComponent = (function () {
    function NavHeaderComponent(appState) {
        this.appState = appState;
        this.fullscreen = new ToggleFullScreen();
    }
    NavHeaderComponent.prototype.ngOnInit = function () {
        if (utility_service_1.Logging.isEnabled.light) {
            console.log('%c Hello \"Nav-Header\" component!', utility_service_1.Logging.normal.lime);
        }
    };
    NavHeaderComponent.prototype.toggleFullScreen = function () {
        this.fullscreen.toggleFullScreen();
    };
    NavHeaderComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'nav-header',
                    templateUrl: './nav-header.template.html'
                },] },
    ];
    /** @nocollapse */
    NavHeaderComponent.ctorParameters = [
        { type: appstate_service_1.AppState, },
    ];
    return NavHeaderComponent;
}());
exports.NavHeaderComponent = NavHeaderComponent;
var ToggleFullScreen = (function () {
    function ToggleFullScreen() {
        this.viewFullScreenTriggerID = "#fullScreenTrigger";
        this.viewFullScreenClass = "not-fullscreen";
        this.cancelFullScreenClass = "is-fullscreen";
        this.notFullscreenIcon = "/assets/icons/fullscreen-enter.svg";
        this.isFullscreenIcon = "/assets/icons/fullscreen-exit.svg";
        this.activeIcon = this.notFullscreenIcon;
    }
    ToggleFullScreen.prototype.toggleFullScreen = function () {
        this.viewFullscreenElem = document.querySelector(this.viewFullScreenTriggerID);
        if (this.viewFullscreenElem.classList.contains(this.viewFullScreenClass)) {
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
            else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
            else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            }
            else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }
            this.viewFullscreenElem.classList.toggle(this.viewFullScreenClass);
            this.viewFullscreenElem.classList.toggle(this.cancelFullScreenClass);
            this.activeIcon = this.isFullscreenIcon;
        }
        else if (this.viewFullscreenElem.classList.contains(this.cancelFullScreenClass)) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            this.viewFullscreenElem.classList.toggle(this.viewFullScreenClass);
            this.viewFullscreenElem.classList.toggle(this.cancelFullScreenClass);
            this.activeIcon = this.notFullscreenIcon;
        }
    };
    return ToggleFullScreen;
}());
exports.ToggleFullScreen = ToggleFullScreen;
//# sourceMappingURL=nav-header.component.js.map