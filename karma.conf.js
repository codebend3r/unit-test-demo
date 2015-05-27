// Karma configuration
'use strict';

module.exports = function (config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine',
      'phantomjs-shim'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
    //reporters: ['progress', 'coverage', 'junit'],

    // optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage'
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/views/**/*.html': 'ng-html2js',
      'app/js/**/*.js': 'coverage'
    },

    junitReporter: {
      outputFile: 'junit/test-results.xml',
      suite: ''
    },

    // list of files / patterns to load in the browser
    files: [

      // bower library
      'app/bower_components/angular/angular.js',
      'app/bower_components/ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-mocks/angular-mocks.js',

      // our app
      'app/js/**/*.js',

      // tests
      'tests/unit-tests/**/*.js',

      //location of templates
      'app/views/**/*.html'

    ],

    ngHtml2JsPreprocessor: {
      //stripPrefix: 'app/',
      moduleName: 'templates',
      cacheIdFromPath: function (filepath) {
        return filepath.match(/views\/.*/)[0];
      }
    },

    // list of files to exclude
    exclude: [],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    //browsers: ['PhantomJS', 'Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true

  });
};
