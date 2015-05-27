(function () {

  'use strict';

  angular.module('demoApp', [
    'ui.router'
  ]);

  angular.module('demoApp')

    .config(function ($urlRouterProvider, $stateProvider) {

      $urlRouterProvider.when('', '/home');

      $stateProvider
        .state('app', {
          abstract: true
        })
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'homeCtrl'
        })

    })

    .controller('homeCtrl', function ($scope) {

      $scope.hello = 'Hello World';

      $scope.newLabel = '';

      $scope.items = [];

      $scope.addItem = function (label) {

        $scope.items.push({
          id: Math.round(Math.random() * 1000),
          label: label
        });

        $scope.newLabel = '';

      };

    });

})();