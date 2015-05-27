(function () {

  'use strict';

  angular.module('demoApp')

    .directive('helloWorld', function () {
      return {
        restrict: 'E',
        scope: {
          name: '@'
        },
        template: '<h3>Hello my name is {{name}}</h3>'

      }
    });

})();