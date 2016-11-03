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


require('child_process')
    .exec('start cmd.exe @cmd /k "' + process.argv[2] + '"',
        function (e) {
            console.log('Received Command: ' + process.argv[2]);
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