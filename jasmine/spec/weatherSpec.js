describe("Weather", function() {
  var weather;

  it ("Responds to sunny?", function() {
    weather = new Weather;
    expect(weather.isSunny(weather._randNum())).toBeDefined();
  });

  it ("returns true or false", function() {
    weather = new Weather;
    expect([true, false]).toContain(weather.isSunny(weather._randNum()));
  });

  it ("returns true when 100% chance of being sunny", function() {
    weather = new Weather;
    // var spy = spyOn(Math, 'random').and.returnValue(0.1);
    // expect(weather.isSunny).toEqual(true);
    expect(weather.isSunny(0)).toEqual(true);
  });

  it ("returns false when 100% chance of not being sunny", function() {
    weather = new Weather;
    expect(weather.isSunny(1)).toEqual(false);
  });

});
