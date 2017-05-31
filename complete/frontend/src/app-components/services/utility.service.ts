import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class Logging {

   public static isEnabled = {
      light: true,    // Light logging
      verbose: false,   // Detailed logging
   };

   public static theme = {
      bgColor: 'backgroundColor: #222222'
   };

   public static normal = {
      'gray': 'color: #1B2B34;' + Logging.theme.bgColor,
      'red': 'color: #DB4C4C;' + Logging.theme.bgColor,
      'orange': 'color: #F99157;' + Logging.theme.bgColor,
      'yellow': 'color: #FFFF00;' + Logging.theme.bgColor,
      'green': 'color: #99C794;' + Logging.theme.bgColor,
      'teal': 'color: #5FB3B3;' + Logging.theme.bgColor,
      'blue': 'color: #6699CC;' + Logging.theme.bgColor,
      'purple': 'color: #C594C5;' + Logging.theme.bgColor,
      'black': 'color: #000000;' + Logging.theme.bgColor, // might be dark to see on dark bg color
      'white': 'color: #FFFFFF;' + Logging.theme.bgColor, // might be dark to see on light bg color
      'brown': 'color: #AB7967;' + Logging.theme.bgColor,
      'lime': 'color: #BADA55;' + Logging.theme.bgColor
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

    // Caller-of
   // https://github.com/WebReflection/caller-of#caller-of
   callerOf(c) {
      return c.call.bind(c)
   }

   // common borrowed methods
   public bind = this.callerOf(Function.bind);
   public has = this.callerOf({}.hasOwnProperty);
   public whoIs = this.callerOf({}.toString);
   public forEach = this.callerOf([].forEach);
   public slice = this.callerOf([].slice);

   // easy log
   // public log = this.bind(console.log, console);

}

