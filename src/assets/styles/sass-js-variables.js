//Flag to trigger the styles
var contentContainerWidth, contentContainerPosition, sidebarWidth, sidebarPosition, showSidebar,
   sidebarEnabled = true;

// if (sidebarEnabled) {
//    // With Sidebar
//    contentContainerWidth = 21;
//    contentContainerPosition = 4;
//
//    sidebarWidth = 3;
//    sidebarPosition = 1;
//    showSidebar = 'visible';
//
// } else {
//    // No sidebar
//    contentContainerWidth = 24;
//    contentContainerPosition = 1;
//
//    sidebarWidth = 0;
//    sidebarPosition = 0;
//    showSidebar = 'hidden';
// }

contentContainerWidth = sidebarEnabled ? 21 : 24;
contentContainerPosition = sidebarEnabled ? 4 : 1;
sidebarWidth = sidebarEnabled ? 3 : 0;
sidebarPosition = sidebarEnabled ? 1 : 0;
showSidebar = sidebarEnabled ? 'visible' : 'hidden';


module.exports = {
   lime: '#C0FF33',
   magenta: '#cc33dd',

   // sidebarEnabled: sidebarEnabled,
   contentContainerWidth: contentContainerWidth,
   contentContainerPosition: contentContainerPosition,
   sidebarWidth: sidebarWidth,
   sidebarPosition: sidebarPosition,
   showSidebar: showSidebar
};
