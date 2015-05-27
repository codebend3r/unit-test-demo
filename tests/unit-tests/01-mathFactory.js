describe('01 - mathFactory', function () {

  var mathFactory;

  beforeEach(module('demoApp'));

  beforeEach(inject(function ($injector) {

    mathFactory = $injector.get('mathFactory');

  }));

  it('should have convertMinutesToHours method defined', function () {

    expect(mathFactory.convertMinutesToHours).toBeDefined();

  });

  it('should return hours formatted correctly', function () {

    expect(mathFactory.convertMinutesToHours(1)).toBe('0:01');
    expect(mathFactory.convertMinutesToHours(122)).toBe('2:02');
    expect(mathFactory.convertMinutesToHours(489)).toBe('8:09');


  });

});
