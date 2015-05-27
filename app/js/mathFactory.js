(function () {

  'use strict';

  angular.module('demoApp')

    .factory('mathFactory', function () {

      return {

        addNumbers: function (a, b) {
          return a + b;
        },
        convertMinutesToHours: function (mins) {

          var baseHours = Math.floor(mins / 60),
            baseMins = mins % 60;

          if (baseMins < 10) baseMins = '0' + baseMins;

          return baseHours + ':' + baseMins;

        },
        formatToGB: function (mb) {
          //
        }

      }

    });

})();