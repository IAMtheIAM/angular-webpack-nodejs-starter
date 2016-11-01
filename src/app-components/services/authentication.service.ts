import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { Logging, UtilityService } from './utility.service';
import { AppState } from './appstate.service';
import { contentHeaders } from '../common/headers';

const jwt_decode = require('jwt-decode');

@Injectable()
export class Authentication {
    jwt: string;
    decodedJwt: string;
    apiUrl: string;
    isAuthenticated = false;
    validAuth: any;

    constructor(
        public appState: AppState,
        public router: Router,
        public http: Http,
        public utilityService: UtilityService) {
        
        this.apiUrl = '/token';
        this.jwt = localStorage.getItem('jwt');
        this.decodedJwt = this.jwt && jwt_decode(this.jwt);
        this.isAuthenticated = this.isLoggedIn();
        this.appState.set('isAuthenticated', this.isAuthenticated);
    }
    
    login(event, username, password) {
        event.preventDefault();

        const urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        const body = urlSearchParams.toString();

        const contentHeaders = new Headers();
        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(this.apiUrl, body, { headers: contentHeaders })
            .map(response => response.json()); // map the response body to JSON
    }

    logout() {
        // Must delete JWT first
        localStorage.removeItem('jwt');

        this.appState.set('isAuthenticated', this.isLoggedIn());
        this.utilityService.navigate('/login');

        if (Logging.isEnabled.verbose) {
            console.log(`%c Logged In: ${this.isLoggedIn()}`, Logging.normal.white);
            console.log(`%c this.appState.isAuthenticated: ${this.appState.state.isAuthenticated}`,
                Logging.normal.white);
        }

    }

    checkAuth(): Observable<boolean> {
        // return an observable of the logged in value
        return Observable.of(this.isLoggedIn());
    }

    isLoggedIn(): boolean {
        var item = localStorage.getItem('jwt');

        if (item === undefined || item === 'undefined') {
            // Localstorage became corrupted, remove undefined jwt
            localStorage.removeItem('jwt');
        }

        return !!item;
    }

    redirectIfNotLoggedIn() {
        if (!this.isLoggedIn) {
            if (Logging.isEnabled.verbose) {
                console.log(`%c redirectIfNotLoggedIn()`, Logging.normal.white);
            }
            this.utilityService.navigate('/login');
        }
    }

}