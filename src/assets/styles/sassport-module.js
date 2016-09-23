var sassport = require('sassport');
// var sass = require('node-sass');


//Flag to trigger the styles
var contentContainerWidth, contentContainerPosition, sidebarEnabled = true;

if (sidebarEnabled) {
   // With Sidebar
   contentContainerWidth = '21';
   contentContainerPosition = '4';
} else {
   // No sidebar
   contentContainerWidth = '24';
   contentContainerPosition = '0';
}

// module.exports = {
//    contentContainerWidth: contentContainerWidth,
//    contentContainerPosition: contentContainerPosition,
// };

/**
 *
 * // path/to/stylesheet.scss
 @import 'sassport-foo'; // imports default export(s)
 // from sassport-foo module
 @import 'sassport-bar';

 @import 'sassport-bar/images'; // imports specific images export(s)
 // from sassport-bar module


 * When a Sassport module is included in an .scss file:

 Sass functions from that module get imported automatically.
 Sass variables and rulesets get imported when you @import 'that-module'.
 Specified exports get imported when you @import 'that-module/specific-export'.

 */
