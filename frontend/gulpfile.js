//// ==========================================================================================
//// ================================ CONFIGURATION =============================================
//// ==========================================================================================

/**
 * Gulp / Node utilities
 */
var gulp = require('gulp-help')(require('gulp'));
var utils = require('gulp-util');
var log = utils.log;
var con = utils.colors;
// var spawn = require('child_process').spawn;

/**
 * Basic workflow plugins
 */
var shell = require('gulp-shell'); // run command line from shell
var browserSync = require('browser-sync');

/**
 * Performance testing plugins
 */
var ngrok = require('ngrok');
// var psi = require('psi');
// var wpt = require('webpagetest');
// var sequence = require('run-sequence');

// Variables
var serverToProxy1 = "localhost:5000";
var finalPort1 = 8000;
// var siteToProxy2 = "localhost:4000";
// var finalPort2 = 4001;


// When the user enters "gulp" on the command line, the default task will automatically be called. This default task below, will run all other tasks automatically.

// Default task
gulp.task('default', function (cb) {
   console.log('Starting dev servers!...');
   gulp.start(
      'devserver:jit',
      'nodemon',
      'browsersync',
      'ios_webkit_debug_proxy'
      // 'ngrok-url',
      // 'vorlon',
      // 'remotedebug_ios_webkit_adapter'
      // 'browsersync-api'
   );
});

gulp.task('nodemon', shell.task('cd ../backend-nodejs && npm run nodemon'));
gulp.task('devserver:jit', shell.task('npm run devserver:jit'));
gulp.task('ios_webkit_debug_proxy', shell.task('npm run ios-webkit-debug-proxy'));
gulp.task('browsersync', shell.task(`browser-sync start --proxy ${serverToProxy1} --port ${finalPort1} --no-open`));
gulp.task('ngrok-url', function (cb) {
   return ngrok.connect(finalPort1, function (err, url) {
      site = url;
      log(con.cyan('ngrok'), '- serving your site from', con.yellow(site));
      cb();
   });
});
// gulp.task('vorlon', shell.task('vorlon'));
// gulp.task('remotedebug_ios_webkit_adapter', shell.task('remotedebug_ios_webkit_adapter'));

// gulp.task('browsersync-api', function () {
//
//    console.log('Starting browser-sync server to proxy app-server (localhost:5000) for synchronized browsing...');
//
//    browserSync.create().init({
//       proxy: serverToProxy1, // proxy and expose which server port?
//       port: finalPort1, // new server port
//       open: false,
//       notify: false
//       //,tunnel: "tetra4" // produces https://tetra4.localtunnel.me public url - doesn't work behind firewall though
//    }, function (err, browserSync) {
//       log(con.cyan('test'), '- did it work?', con.yellow(browserSync.options.get('port')));
//
//       ngrok.connect(browserSync.options.get('port'), function (err, url) {
//          log(con.cyan('ngrok'), '- serving your site from', con.yellow(url));
//          // example output: https://757c1652.ngrok.com -> 127.0.0.1:8000
//       });
//    });
// });




// gulp.task('browser-sync2', function () {
//
//    console.log('Starting browser-sync server to proxy webpack-dev-server (localhost:4000) for syncronized browsing...');
//    console.log('Starting ngrok public facing web server to proxy browserSync...');
//
//    browserSync.create().init({
//       proxy: siteToProxy2, // proxy and expose which server port?
//       port: finalPort2, // new server port
//       open: false,
//       notify: false,
//       ui: false,
//
//       //,tunnel: "tetra4" // produces https://tetra4.localtunnel.me public url - doesn't work behind firewall though
//    }, function (err, browserSync) {
//
//    });
//
// });
//
//
// // this is where your server task goes. I'm using browser sync
// gulp.task('browser-sync-psi1', function () {
//    browserSync({
//       proxy: serverToProxy1, // proxy and expose which server port?
//       port: finalPort1, // new server port
//       open: false,
//       notify: false
//    });
// });
//
//
// // this is where your server task goes. I'm using browser sync
// gulp.task('browser-sync-psi2', function () {
//    browserSync({
//       proxy: siteToProxy2, // proxy and expose which server port?
//       port: finalPort2, // new server port
//       open: false,
//       notify: false,
//       ui: false,
//    });
// });

//
// // psi sequence with 'browser-sync-psi' instead
// gulp.task('psi-seq', function (cb) {
//    return sequence(
//       'browser-sync',
//       'ngrok-url',
//       'psi-desktop',
//       'psi-mobile',
//       cb
//    );
// });
//
// //// ==========================================================================================
// //// ================================ LESS TASK =============================================
// //// ==========================================================================================
//
// // Gulp LESS Task using libsass through gulp-less
// gulp.task('less', function () {
//    // gulp.src locates the source files for the process.
//    // This globbing function tells gulp to recursively search and use all files
//    // ending with .scss or .sass within the scss folder.
//    console.log('Live LESS reload');
//    //return gulp.src('./Content/less/{bootstrap,responsive}.less')  // only compile the entry file
//    return gulp.src('./Content/less/**/*.less')  // reload all files
//       .pipe(plumber())
//       .pipe(sourcemaps.init())    // Initializes sourcemaps
//       //.pipe(less({    // Converts Sass into CSS with Gulp Sass
//       //    errLogToConsole: true
//       //}))
//       //.pipe(autoprefixer({ browsers: ['last 2 versions'] }))   // Autoprefixer
//       .pipe(sourcemaps.write())   //Writes sourcemaps into the CSS file
//       .pipe(plumber.stop())
//    //.pipe(gulp.dest('./Public/css'))   // Outputs CSS files in the css folder
//    //.pipe(livereload()); // Call livereload
// });
//
//
//
//
// //// ==========================================================================================
// //// ================================ WATCH TASKS =============================================
// //// ==========================================================================================
//
//
// // Watch scss folder for changes
// gulp.task('watch', function () {
//    // Check for modifications in particular directories
//    // Watches the scss folder for all .scss and .sass files
//    // If any file changes, run the sass task
//    livereload.listen();
//    console.log('Watching for HTML/CSHTML changes!...');
//
//    // Watch .scss files
//    gulp.watch('./Content/**/*.{scss,sass}', ['sass']).on('change', function (file) {
//       livereload.reload(file);
//       browserSync.reload(file);
//
//    });
//
//    // Watch .less files
//    gulp.watch('./Content/**/*.less', ['less']).on('change', function (file) {
//       livereload.reload(file);
//       browserSync.reload(file);
//    });
//
//    // Watch .js files
//    gulp.watch('./Scripts/**/*.js', ['js']).on('change', function (file) {
//       livereload.reload();
//    });
//    // Watch image files
//    gulp.watch('../assets/img/**/*', ['images']).on('change', function (file) {
//       livereload.reload();
//    });
//    // Watch html and cshtml files
//    gulp.watch('./Views/**/*.{html,cshtml}').on('change', function (file) {
//       livereload.changed(file.path);
//       livereload.reload();
//    });
//
//    // gulp.watch('../assets/**/*.html', ['html']);
//    // gulp.watch('../*.html', ['html']);
//
//    //console.log('Watching for changes');
//
// });
//
//
// //gulp.task('php-server', function () {
// //    php.server({
// //        base: '../assets',
// //        port: 8010,
// //        keepalive: true
// //    }, function () {
// //        browserSync({
// //            proxy: '127.0.0.1:8010',
// //            port: 8000,
// //            open: false,
// //            notify: false
// //        });
// //    });
//
//
// //});
//
//
//
// //// ==========================================================================================
// //// ================================ REMOTE DEBUGGING TASK =============================================
// //// ==========================================================================================
//
// // Gulp LESS Task using libsass through gulp-less
// gulp.task('network-debugging', shell.task([
//    // gulp.src locates the source files for the process.
//    // This globbing function tells gulp to recursively search and use all files
//    // ending with .scss or .sass within the scss folder.
//    'Echo Starting IISexpress-proxy server to proxy Visual Studio server for network debugging...',
//    'iisexpress-proxy 60355 to 7001'
// ]));
//
//
//
//
//
// //// Gulp LESS Task using libsass through gulp-less
// //gulp.task('ngrok-webserver', shell.task([
// //	// gulp.src locates the source files for the process.
// //	// This globbing function tells gulp to recursively search and use all files
// //	// ending with .scss or .sass within the scss folder.
// //	'echo Starting ngrok public facing web server to proxy browserSync...',
// //	'ngrok http 8000'
// //]));
//
// //// Ngrok Connect - exposes a local server behind a firewall to a public web address
// gulp.task('ngrok', function () {
//    console.log('Starting ngrok public facing web server to proxy browserSync...');
//
//    ngrok.connect({
//       proto: 'http', // http|tcp|tls
//       addr: finalPort, // port or network address
//       //auth: 'user:pwd', // http basic authentication for tunnel
//       //subdomain: 'alex', // reserved tunnel name https://alex.ngrok.io,
//       authtoken: '7yX6C9WCweUe1SCRqbZsu_3iHQb4TjRPwCXrUTg8fcF' // authtoken from ngrok.com
//    }, function(err, url) {
//       log(con.cyan('ngrok'), con.red(err));
//
//    });
//
//
//    //var ngrok = require('ngrok');
//
//    //ngrok.connect(function (err, url) {}); // https://757c1652.ngrok.io -> http://localhost:80
//    //ngrok.connect(9090, function (err, url) {}); // https://757c1652.ngrok.io -> http://localhost:9090
//    //ngrok.connect({proto: 'tcp', addr: 22}, function (err, url) {}); // tcp://0.tcp.ngrok.io:48590
//    //ngrok.connect(opts, function(err, url) {});
//
//
//    //// Ngrok Options
//    //ngrok.connect({
//    //    proto: 'http', // http|tcp|tls
//    //    addr: 8080, // port or network address
//    //    auth: 'user:pwd', // http basic authentication for tunnel
//    //    subdomain: 'alex', // reserved tunnel name https://alex.ngrok.io,
//    //    authtoken: '12345' // your authtoken from ngrok.com
//    //}, function (err, url) {});
//
//    //// Ngrok Disconnect
//    //ngrok.disconnect(url); // stops one
//    //ngrok.disconnect(); // stops all
//    //ngrok.kill(); // kills ngrok process
//
// });
//
// //// ==========================================================================================
// //// ================================ SASS TASK =============================================
// //// ==========================================================================================
//
//
// // Gulp Sass Task using libsass through gulp-sass
// gulp.task('sass', function () {
//    // gulp.src locates the source files for the process.
//    // This globbing function tells gulp to recursively search and use all files
//    // ending with .scss or .sass within the scss folder.
//    gulp.src('/Content/**/*.{scss,sass}')
//       .pipe(plumber())
//       .pipe(sourcemaps.init())    // Initializes sourcemaps
//       .pipe(sass({    // Converts Sass into CSS with Gulp Sass
//          errLogToConsole: true
//       }))
//       //.pipe(autoprefixer({ browsers: ['last 2 versions'] }))   // Autoprefixer
//       .pipe(sourcemaps.write())   //Writes sourcemaps into the CSS file
//       .pipe(plumber.stop())
//       .pipe(gulp.dest('./Public/css'))   // Outputs CSS files in the css folder
//       .pipe(livereload()); // Call livereload // disable this if it causes page to refresh instead of just injecting css
//
//    console.log('Live SASS reload');
// });
//
//
//
//
//
//
// //// ==========================================================================================
// //// ================================ HTML TASK =============================================
// //// ==========================================================================================
//
// // Gulp HTML Task
// /*  //Task for moving html-files to the build-dir
//   //added as a convenience to make sure this gulpfile works without much modification*/
// gulp.task('html', function () {
//    gulp.src('/Views/**/*.{html,cshtml}')
//    // .pipe(embedlr())
//       .pipe(plumber())
//       .pipe(stripBom()) // remove BOM (byte order marks) that visual studio injects randomly during php includes
//       //.pipe(injectReload())
//       .pipe(gulp.dest(' ../assets/backups')) // writes a backup file into the 'build' folder
//       .pipe(livereload());  // Call livereload
//    console.log('Live reload');
// });
//
//
//
//
//
// //// ==========================================================================================
// //// ================================ IMAGES TASK =============================================
// //// ==========================================================================================
//
//
// // Gulp images Task
// /*  //Task for moving html-files to the build-dir
//   //added as a convenience to make sure this gulpfile works without much modification*/
// gulp.task('images', function () {
//    gulp.src('*.{png,jpg,jpeg,gif,svc}')
//    // .pipe(embedlr())
//    //.pipe(gulp.dest('../assets/img'))
//       .pipe(livereload());  // Call livereload
//    console.log('Live reload');
// });
//
//
//
//
//
//
// //// ==========================================================================================
// //// ================================ JS TASK =============================================
// //// ==========================================================================================
//
// // Gulp JS Task
// /*  //Task for moving html-files to the build-dir
//   //added as a convenience to make sure this gulpfile works without much modification*/
// gulp.task('js', function () {
//    gulp.src('/Scripts/**/*.js')
//       .pipe(plumber())
//       //.pipe(stripBom()) // remove BOM (byte order marks) that visual studio injects randomly during php includes
//       //.pipe(gulp.dest('../assets/js'))
//       .pipe(livereload());  // Call livereload
//    console.log('Live reload');
// });
//
//
//
//
//
//
// //// ==========================================================================================
// //// ================================ JSHINT TASK =============================================
// //// ==========================================================================================
//
//
// // Hint all of our custom developed Javascript to make sure things are clean.
// // This task will only hint JavaScript files in the folder "/Client" and it's subfolders.
// gulp.task('jshint', function () {
//    return gulp.src([
//       './Client/**/*.js'
//    ])
//       .pipe(plumber({
//          errorHandler: onError
//       }))
//       .pipe(jshint())
//       .pipe(jshint.reporter('default'));
// });
//
//
// //// ==========================================================================================
// //// ================================ TEST LIVERELOAD TASK =============================================
// //// ==========================================================================================
//
// // See https://www.roelvanlisdonk.nl/?p=4296 for info on setting up Gulp, LiveReload and Visual Studio from scratch.
//
// //gulp.task('reload', function () {
// //    // Change the filepath, when you want to live reload a different page in your project.
// //    livereload.reload("./index.html");
// //    console.log("Live Reload");
//
// //});
//
// //// This task should be run, when you want to reload the webpage, when files change on disk.
// //// This task will only watch JavaScript file changes in the folder "/Client" and it's subfolders.
// //gulp.task('watch', function () {
// //    livereload.listen();
// //    gulp.watch('./Scripts/**/*.js', ['reload']);
// //});
//
//
// //// ==========================================================================================
// //// ================================ TEST CONCATENATE (join) TASK =============================================
// //// ==========================================================================================
//
//
// gulp.task('concat', function () {
//
//    var lessStream = gulp.src('./Content/**/{responsive,bootstrap}.less')
//       .pipe(plumber())
//       .pipe(sourcemaps.init())
//       //.pipe(concat('less-files.less'))
//       .pipe(less({
//          // Converts Sass into CSS with Gulp Sass
//          errLogToConsole: true
//          , paths: ['less']
//       }))
//       .pipe(sourcemaps.write())
//       //.pipe(sourcemaps.write('../maps', { addComment: false }))
//       .pipe(plumber.stop())
//       .pipe(gulp.dest('./Public/css'))
//
//    ;
//
//    //var scssStream = gulp.src([...])
//    //    .pipe(sass())
//    //.pipe(concat('scss-files.scss'))
//    //;
//
//    //var cssStream = gulp.src([...])
//    //    .pipe(concat('css-files.css'))
//    //;
//
//    //var mergedStream = merge(lessStream, scssStream, cssStream)
//    //    .pipe(concat('styles.css'))
//    //    .pipe(minify())
//    //    .pipe(gulp.dest('web/css'));
//
//    return lessStream;
// });
//
//
//
// // -----------------------------------------------------------------------------
// // Performance test: WebPageTest.org
// //
// // Initializes a public tunnel so the PageSpeed service can access your local
// // site, then it tests the site. This task outputs the standard PageSpeed results.
// // -----------------------------------------------------------------------------
// gulp.task('wpt', 'Performance: WebPageTest.org', function () {
//    var keys = "A.47d976aeb5a7d3b26c96df4645420320"; // key
//    var wpt_test = wpt('www.webpagetest.org', keys);
//
//    // Set up a public tunnel so WebPageTest can see the local site.
//    return ngrok.connect(8000, function (err_ngrok, url) {
//       log(con.cyan('ngrok'), '- serving your site from', con.yellow(url));
//
//       // The `url` variable was supplied by ngrok.
//       wpt_test.runTest(url, function (err_wpt, data_wpt) {
//          // Log any potential errors and return a FAILURE.
//          if (err_wpt) {
//             log(err_wpt);
//             process.exit(1);
//          }
//
//          // Open window to results.
//          var wpt_results = 'http://www.webpagetest.org/result/' + data_wpt.data.testId;
//          log(con.green('✔︎  Opening results page:', wpt_results));
//
//          spawn('open', [wpt_results]);
//
//          // Note to developer.
//          log(con.yellow('⚠️  Please keep this process running until WPT is finished.'));
//          log(con.yellow('⚠️  Once the results load, hit Control + C to kill this process.'));
//       });
//    });
// });
//
//
// // -----------------------------------------------------------------------------
// // Performance test: PageSpeed Insights
// //
// // Initializes a public tunnel so the PageSpeed service can access your local
// // site, then it tests the site. This task outputs the standard PageSpeed results.
// //
// // The task will output a standard exit code based on the result of the PSI test
// // results. 0 is success and any other number is a failure. To learn more about
// // bash-compatible exit status codes read this page:
// //
// // http://tldp.org/LDP/abs/html/exit-status.html
// // -----------------------------------------------------------------------------
// // psi task runs and exits
// gulp.task('psi', 'Performance: PageSpeed Insights', ['psi-seq'], function () {
//    console.log('Woohoo! Check out your page speed scores!')
//    process.exit();
// })
//
// // psi sequence with 'browser-sync-psi' instead
// gulp.task('psi-seq', function (cb) {
//    return sequence(
//       'ngrok-url',
//       'psi-mobile',
//       'psi-desktop',
//       cb
//    );
// });
// gulp.task('psi-mobile', function (cb) {
//    psi(site, {
//       nokey: 'true',
//       strategy: 'mobile'
//    }).then(function (data) {
//       log(con.green('Mobile speed score: '), con.yellow(data.ruleGroups.SPEED.score));
//       log(con.green('Mobile usability score: '), con.yellow(data.ruleGroups.USABILITY.score)); // mobile only
//    }).then(cb);
// });
//
// gulp.task('psi-desktop', function (cb) {
//    //console.log(site);
//    psi(site, {
//       nokey: 'true',
//       strategy: 'desktop'
//    }).then(function (data) {
//       log(con.green('Desktop speed score: '), con.yellow(data.ruleGroups.SPEED.score));
//    }).then(cb);
// });
//
