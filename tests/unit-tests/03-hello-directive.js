'use strict';

fdescribe('03 - hello directive', function () {

  var $rootScope,
    $compile,
    markup,
    element,
    $directiveScope;

  beforeEach(module('demoApp'));

  beforeEach(inject(function ($injector) {

    $rootScope = $injector.get('$rootScope');

    $rootScope.madeUpName = 'Ace Ventura';

    $compile = $injector.get('$compile');

    markup = '<hello-world name="{{madeUpName}}"></hello-world>';

    element = $compile(markup)($rootScope);

    $directiveScope = element.isolateScope();

    $rootScope.$digest();

  }));

  it('should have proper dom structure with the correct name', function () {

    expect(element.html()).toContain('Ace Ventura'); // less specific
    expect(element.html()).toEqual('<h3 class="ng-binding">Hello my name is Ace Ventura</h3>'); // super specific

  });


});