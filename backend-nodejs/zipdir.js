var zipdir = require('zip-dir');


zipdir('./', {
    saveTo: 'Azure-Deploy.zip',
    filter: function (path, stat) {

        // Use this to match all and ignore the given array
        // var itemsToIgnore = ['Azure-Deploy.zip', '.git', '.idea', '.vscode', 'app', 'config', ''];
        // var testString = itemsToIgnore.join("|");

        // Use this to ignore all and match the given array
        var itemsToMatch = ['app', 'build', 'config', 'node_modules', 'wwwroot', 'IISNode.yml', 'package.json', 'web.config'];
        var testString = itemsToMatch.join("|");

        var regex = new RegExp(testString);
        var zipMatch = regex.test(path);// should be testing for regex /Azure-Deploy.zip$|.git$/

        // Negative (!) condition is for Match all given, positive condition is for ignore all given
        if (!zipMatch) return false;
        return true;

    }
}, function (err, buffer) {
    if (err) console.log(err);
    if (buffer) console.log("Azure-Deploy.zip successfully generated.");
});

// Options for zip-dir
// See: https://github.com/jsantell/node-zip-dir
//
// zipdir('/path/to/be/zipped', function (err, buffer) {
//     // `buffer` is the buffer of the zipped file
// });
//
// zipdir('/path/to/be/zipped', { saveTo: '~/myzip.zip' }, function (err, buffer) {
//     // `buffer` is the buffer of the zipped file
//     // And the buffer was saved to `~/myzip.zip`
// });
//
// // Use a filter option to prevent zipping other zip files!
// // Keep in mind you have to allow a directory to descend into!
// zipdir('/path/to/be/zipped', { filter: (path, stat) => !/\.zip$/.test(path) }, function (err, buffer) {
//
// });
//
// // Use an `each` option to call a function everytime a file is added, and receives the path
// zipdir('/path/to/be/zipped', { each: path => console.log(p, "added!"), function (err, buffer) {
//
// });
// Use a filter option to prevent zipping other zip files!
// Keep in mind you have to allow a directory to descend into!
