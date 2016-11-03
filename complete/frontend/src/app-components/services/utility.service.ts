import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class Logging {

    public static isEnabled = {
        light: true,    // Light logging
        verbose: false   // Detailed logging
    };

    public static normal = {
        'gray': 'color: #1B2B34; background-color: #222222',
        'red': 'color: #DB4C4C; background-color: #222222',
        'orange': 'color: #F99157; background-color: #222222',
        'yellow': 'color: #FFFF00; background-color: #222222',
        'green': 'color: #99C794; background-color: #222222',
        'teal': 'color: #5FB3B3; background-color: #222222',
        'blue': 'color: #6699CC; background-color: #222222',
        'purple': 'color: #C594C5; background-color: #222222',
        'black': 'color: #000000; background-color: #cccccc',
        'white': 'color: #FFFFFF; background-color: #222222',
        'brown': 'color: #AB7967; background-color: #222222',
        'lime': 'color: #BADA55; background-color: #222222'
    };

    public static bold = {
        'gray': 'font-weight: bold;' + Logging.normal.gray,
        'red': 'font-weight: bold;' + Logging.normal.red,
        'orange': 'font-weight: bold;' + Logging.normal.orange,
        'yellow': 'font-weight: bold;' + Logging.normal.yellow,
        'green': 'font-weight: bold;' + Logging.normal.green,
        'teal': 'font-weight: bold;' + Logging.normal.teal,
        'blue': 'font-weight: bold;' + Logging.normal.blue,
        'purple': 'font-weight: bold;' + Logging.normal.purple,
        'black': 'font-weight: bold;' + Logging.normal.black,
        'white': 'font-weight: bold;' + Logging.normal.white,
        'brown': 'font-weight: bold;' + Logging.normal.brown,
        'lime': 'font-weight: bold;' + Logging.normal.lime
    };
}

@Injectable()
export class UtilityService {

    private _router: Router;

    constructor(router: Router) {
        this._router = router;
    }

    convertDateTime(date: Date) {
        var _formattedDate = new Date(date.toString());
        return _formattedDate.toDateString();
    }

    navigate(path: string) {
        this._router.navigate([path]);
    }

    navigateToLogin() {
        this.navigate('/login');
    }
}
