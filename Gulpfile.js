var gulp = require('gulp-help')(require('gulp')),
  runSequence = require('run-sequence'),
  $ = require('gulp-load-plugins')(),
  gutil = require('gulp-util'),
  karma = require('gulp-karma'),
  browserSync = require('browser-sync');

require('gulp-help')(gulp, {
  description: 'you are looking at it.'
});

/**
 * Runs in sequence
 * - watches for changes
 * - serves up files
 */
gulp.task('build', 'watches and serves files', function(callback) {
  runSequence(
    'browser-sync',
    'watch',
    callback);
});

/**
 * runs karma unit tests
 */
gulp.task('unit', 'Run unit tests', function () {

  gulp.src(['/tests/unit-tests/**/*.js'])
    .pipe(karma({
      configFile: 'karma.conf.js'
    }));
});


/**
 * watches for changes in the unit test
 */
gulp.task('watch', 'watches for changes', function() {

  // Watch .js files
  gulp.watch([
    'app/**/*.js',
    'app/**/*.html'
  ], ['bs-reload']);

});

/**
 * Serves files on port 8888
 */
gulp.task('browser-sync', 'services up files', function() {

  browserSync({
    open: true,
    port: 8000,
    server: {
      baseDir: 'app'
    }
  });

});

/**
 * Reloads files via browser sync
 */
gulp.task('bs-reload', 'refresh browser sync', function() {

  browserSync.reload();

});
