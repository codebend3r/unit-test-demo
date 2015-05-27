(function () {

  'use strict';

  angular.module('demoApp')

    .controller('homeCtrl', function ($scope, mathFactory) {

      $scope.name = 'Chester Rivas';

      $scope.newLabel = '';

      $scope.items = [];

      $scope.hoursWorked = [323, 432, 481, 83, 711];

      $scope.addItem = function (label) {

        // return if an empty label was not passed in
        if (label === '' && !angular.isDefined(label)) return;

        var index = $scope.items.length,
          hoursWorked = $scope.hoursWorked[index];

        $scope.items.push({
          id: Math.round(Math.random() * 1000),
          label: label,
          hoursWorked: mathFactory.convertMinutesToHours(hoursWorked)
        });

        $scope.newLabel = '';

      };

    });

})();