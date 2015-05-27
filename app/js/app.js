(function () {

  'use strict';

  // declare app
  angular.module('demoApp', [
    'ui.router'
  ]);

  // config route
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

})();