describe("Weather", function() {
  var weather;

  describe("#isSunny", function() {

    beforeEach(function() {
      weather = new Weather;
    })

    it ("Responds to sunny?", function() {
      expect(weather.isSunny).toBeDefined();
    });

    it ("returns true or false", function() {
      expect([true, false]).toContain(weather.isSunny());
    });

    it ("returns true when 100% chance of being sunny", function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isSunny()).toEqual(true);
    });

    it ("returns false when 100% chance of not being sunny", function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather.isSunny()).toEqual(false);
    });

  });

});
