"use strict";
var core_1 = require('@angular/core');
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
    ToggleFullScreen.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ToggleFullScreen.ctorParameters = [];
    return ToggleFullScreen;
}());
exports.ToggleFullScreen = ToggleFullScreen;
//# sourceMappingURL=fullscreen.js.map