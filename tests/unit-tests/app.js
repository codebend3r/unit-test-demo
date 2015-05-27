describe('homeCtrl', function () {

  var $scope,
    uiRouter,
    $controller;

  beforeEach(module('demoApp'));

  beforeEach(inject(function ($injector) {

    $scope = $injector.get('$rootScope').$new();
    $controller = $injector.get('$controller');

    $controller('homeCtrl', { $scope: $scope });

  }));

  it('truth', function () {

    expect(true).toBe(true);

  });

  it('should have $scope variables defined', function () {
    expect($scope.hello).toBeDefined();
    expect($scope.items).toBeDefined();
    expect($scope.addItem).toBeDefined();
  });

  it('should increase the length of items array when calling addItem', function () {

    expect($scope.items.length).toEqual(0);

    $scope.addItem('unit testing')

    expect($scope.items.length).toEqual(4);

  });

});
