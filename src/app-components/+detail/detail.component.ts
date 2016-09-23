import { Component } from '@angular/core';

/*
 * Shared Utilities
 */
import { Logging } from '../services/utility.service';
import { Authentication } from '../services/authentication.service';
import { AppState } from '../services/appstate.service';


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


  }

  ngOnInit() {
     if (Logging.isEnabled.light) { console.log('%c Hello \"Detail\" component!', Logging.normal.lime); }
  }

}
