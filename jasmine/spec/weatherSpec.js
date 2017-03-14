describe("Weather", function() {
  var weather;

  it ("Responds to sunny?", function() {
    weather = new Weather;
    expect(weather.isSunny).toBeDefined();
  });

  it ("returns true or false", function() {
    weather = new Weather;
    expect([true, false]).toContain(weather.isSunny());
  });

  describe("When it is sunny", function() {


  });

  describe("When it is not sunny", function() {


  });

});
