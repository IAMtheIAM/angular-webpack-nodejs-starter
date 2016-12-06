// Sassport will automatically convert this to a map.

// module.exports = {
//     orange: "mild-orange",
//     neon: "lime"
// }

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

module.exports = {
    contentContainerWidth: contentContainerWidth,
    contentContainerPosition: contentContainerPosition,
};
