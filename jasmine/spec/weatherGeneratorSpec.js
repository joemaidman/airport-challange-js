describe("WeatherGenerator", function() {
  var weather;

  describe("#isStormy", function() {

    beforeEach(function() {
      weather = new WeatherGenerator;
    });

    it ("Responds to generateRandomWeather", function() {
      expect(weather.isStormy).toBeDefined();
    });

    it ("returns true or false", function() {
      expect([true, false]).toContain(weather.isStormy(50));
    });

    it ("returns true when 100% chance of being sunny", function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather.isStormy(100)).toEqual(true);
    });

    it ("returns false when 100% chance of not being sunny", function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isStormy()).toEqual(false);
    });

  });

});
