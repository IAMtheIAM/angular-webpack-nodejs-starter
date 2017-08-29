import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

    public _pageSize: number | undefined | null;
    public _baseUri: string;

    constructor(public http: Http) {

    }

    set (baseUri: string, pageSize?: number): void {
        this._baseUri = baseUri;
        this._pageSize = pageSize;
    }

    get (url: string, mapJson: boolean = true): Observable<any> {
        if (mapJson) {
            return this.http.get(url)
                .map(response => <Array<object>>(<Response>response).json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        } else {
            return this.http.get(url)
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }

    }

    post(data: any, mapJson: boolean = true) {
        if (mapJson) {
            return this.http.post(this._baseUri, data)
                .map(response => <Array<object>>(<Response>response).json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        } else {
            return this.http.post(this._baseUri, data)
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }
    }

    update(data: any, mapJson: boolean = true) {
        if (mapJson) {
            return this.http.put(this._baseUri, data)
                .map(response => <Array<object>>(<Response>response).json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        } else {
            return this.http.put(this._baseUri, data)
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        }
    }

    delete(id: number) {
        return this.http.delete(this._baseUri + '/' + id.toString())
            .map(response => <Array<object>>(<Response>response).json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    deleteResource(resource: string) {
        return this.http.delete(resource)
            .map(response => <Array<object>>(<Response>response).json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
