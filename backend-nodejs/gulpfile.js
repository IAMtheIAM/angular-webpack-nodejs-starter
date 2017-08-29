var gulp = require('gulp');
var path = require('path');
var nodemon = require('nodemon');

gulp.task('default', function() {
    nodemon({
        execMap: {
            js: 'node'
        },
        script: path.join(__dirname, 'build/server.bundle.js'),
        ignore: ['*'],
        watch: ['build'],
        ext: 'noop'
    }).on('restart', function() {
        console.log('Patched!');
    });
});



// Switched from gulp-zip to node zip-dir - see zipdir.js
//
// var gulp = require('gulp');
// var path = require('path');
// var zip = require('gulp-zip');
// var minimist = require('minimist');
// var fs = require('fs');
//
// var knownOptions = {
//   string: 'packageName',
//   string: 'packagePath',
//   default: {
//     packageName: "Azure-Deploy.zip",
//     packagePath: path.join(__dirname, '/')
//   }
// }
//
// var options = minimist(process.argv.slice(2), knownOptions);
//
// gulp.task('default', function () {
//
//   var packagePaths = [
//     '**',
//     '.gitignore',
//     '.editorconfig',
//     '!Azure-Deploy.zip',
//     '!**/.idea/**',
//   ]
//
//
//   // //add exclusion patterns for all dev dependencies
//   // var packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
//   // var devDeps = packageJSON.devDependencies;
//   //
//   // for (var propName in devDeps) {
//   //   var excludePattern1 = "!**/node_modules/" + propName + "/**";
//   //   var excludePattern2 = "!**/node_modules/" + propName;
//   //   packagePaths.push(excludePattern1);
//   //   packagePaths.push(excludePattern2);
//   //
//   // }
//
//   return gulp.src(packagePaths)
//     .pipe(zip(options.packageName))
//     .pipe(gulp.dest(options.packagePath));
// });
