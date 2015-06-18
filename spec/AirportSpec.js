describe("Airport", function() {
  var airport;

  describe("by default, ", function() {
    it("has no Planes Docked when first created", function() {
      var airport = new Airport();
      expect(airport.planes).toEqual([]);
    });
  });

});
