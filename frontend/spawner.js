/**
 * Spawns a new forked child process
 * 
 * The process.argv property returns an array containing the command line arguments 
 * passed when the Node.js process was launched. The first element will be process.execPath. 
 * See process.argv0 if access to the original value of argv[0] is needed. The second element 
 * will be the path to the JavaScript file being executed. The remaining elements will be any 
 * additional command line arguments.
 * See: https://nodejs.org/docs/latest/api/process.html#process_process_argv
 * 
 */


/**
 * Function: run()
 * This method runs the command using child_proces.exec only
 * Does the same as function runexternal(), but in a different implementation.
 */
module.exports.run = function (command) {

    console.log("Begin Spawning New Process");

    require('child_process').exec(
    'start cmd.exe @cmd /k "' + command + '"',
    function (e) {
        console.log('Received Command: ' + command);
    });

    /**
     * Debug the arguments received on command line.
     */
     process.argv.forEach((val, index) => {
        console.log(`${index}: ${val}`);
     });

    /**
     * Kill the child process after 2 seconds, once the detached cmd.exe process has spawned
     */
    setTimeout(function () {
        console.log("Done Spawning");
        process.exit(0);
    }, 2000);

}


/**
 * Function: runexternal()
 * This method runs the command using child_proces.fork and child_process.exec
 * Does the same as function run(), but in a different implementation.
 */
module.exports.runexternal = function (command) {

    console.log(command);
    console.log("Begin Spawning");

    var cp = require('child_process');
    var child = cp.fork('./spawned-child.js', [command]);

    /**
     * child.unref()
     * Causes the parent's (this) event loop to not include the child (spawned-child.js) 
     * in its reference count, allowing the parent to exit independently of the child, 
     * unless there is an established IPC channel between the child and parent.
     */
    child.unref();

}

require('make-runnable'); // must be at the END of the file
