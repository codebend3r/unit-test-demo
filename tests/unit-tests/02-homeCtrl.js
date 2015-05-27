describe('02 - homeCtrl', function () {

  var $scope,
    $controller;

  beforeEach(module('demoApp'));

  beforeEach(inject(function ($injector) {

    $scope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');

    $controller('homeCtrl', { $scope: $scope });

  }));

  it('should have $scope variables defined', function () {

    expect($scope.name).toBeDefined();
    expect($scope.newLabel).toBeDefined();
    expect($scope.items).toBeDefined();
    expect($scope.hoursWorked).toBeDefined();
    expect($scope.addItem).toBeDefined();

  });

  it('should increase the length of items array when calling addItem', function () {

    expect($scope.items.length).toEqual(0);
    $scope.addItem('unit testing');
    expect($scope.items.length).toEqual(1);

  });

});
