// login.component.ts
/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/*
 * Shared Utilities
 */
import { Logging } from '../services/utility.service';
import { AppState } from '../services/appstate.service';
import { Authentication } from '../services/authentication.service';
import { UtilityService } from '../services/utility.service';

/*
 * Imported Components
 */

/**
 * This is where CSS/SCSS files that the component depends on are required.
 *
 * Function: To enable "Hot Module Replacement" of CSS/SCSS files
 * during development. During productions, all styles will be extracted into
 *  external stylesheets. Do NOT add styles the "Angular2 Way" in
 */
import './login.style.scss';

@Component({
    selector: 'login',
    templateUrl: './login.template.html'
})
export class LoginComponent {
    //@Input() loginText: string = 'Login';
    isAuthenticated: boolean;

    constructor(
        /** This is where we setup/construct all the constants and variables as well as inject
         *  Angular dependenciesto be called in the class methods
         *  NOTE: Injected Dependencies must be called using "this". Example: this.depencencyName.someMethod
         */
        //public isAuthenticated,
        public appState: AppState,
        public authService: Authentication,
        public utilityService: UtilityService,
        public router: Router) {

        this.isAuthenticated = this.authService.isLoggedIn();
        this.appState.set('isAuthenticated', this.isAuthenticated);

    }

    ngOnInit() {
        // If user is already logged in, skip the login page
        if (this.isAuthenticated) {
            if (Logging.isEnabled.light) {
                console.log('%c Already logged in! Navigating to Ticket Component', Logging.normal.purple);
            }
            this.utilityService.navigate('/ticket');
        }

        if (Logging.isEnabled.light) {
            console.log('%c Hello \"Login\" component!', Logging.normal.lime);
        }
    }

    login(event, username, password) {

        this.authService.login(event, username, password)
            .subscribe(
                response => {
                    // On response
                    console.log('Login response: ', response);

                    if (Logging.isEnabled.verbose) {
                        console.log('Response: ', response);
                    }

                    // True or false
                    this.authService.validAuth = response.success;

                    // Update the appState with the response
                    this.appState.set('isAuthenticated', this.authService.validAuth);

                    // Fire the loginSuccess function
                    this.loginSuccess(response);
                },
                error => {
                    if (error.status === 401 || error.status === 404) {
                        // this.notificationService.printErrorMessage('Authentication required');
                        if (Logging.isEnabled.verbose) {
                            console.log('Login Component: login(error): ', error);
                        }
                    }
                    alert(error);
                    // return Observable.of(this.isLoggedIn());
                },
                () => {
                    // Always

                    if (Logging.isEnabled.verbose) {
                        console.log('%c API Call Complete', Logging.normal.orange);
                    }

                    return this.authService.isLoggedIn();
                });

    }

    loginSuccess(response?) {
        if (this.authService.validAuth) {
            const token = response.Token;
            // const splitToken = token.split('.');
            // const responseHeaders = JSON.parse(atob(splitToken[0]));
            // const responseBody = JSON.parse(atob(splitToken[1]));
            //console.log(responseHeaders);
            //console.log(responseBody);

            // Set the JWT
            localStorage.setItem('jwt', token);

        }
        if (Logging.isEnabled.verbose) {
            console.log('Login Component: login(response): ', response);
            console.log(`%c Logged In: ${this.authService.isLoggedIn()}`, Logging.normal.white);
        }

        // Get the redirect URL from our appState. If no redirect has been set, use the default
        const redirect = this.appState.state.redirectUrl
            ? this.appState.state.redirectUrl
            : '/ticket';
        // Clear redirect URL after initial redirect
        this.appState.set('redirectUrl', '');

        // Navigate the view
        this.utilityService.navigate(redirect);
        return this.authService.isLoggedIn();
    }

    logout() {
        this.authService.logout();
    }
}