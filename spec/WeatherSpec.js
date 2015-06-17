describe("Weather", function() {
  var weather;

  describe("can be either ", function() {
    xit("SUNNY or STORMY", function() {
      weather = new Weather();
      expect(weather.setRandomWeather()).toEqual(jasmine.any(String));
    });
  });

});
