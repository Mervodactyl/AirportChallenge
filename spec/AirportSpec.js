describe("Airport", function() {
  var airport;

    beforeEach(function() {
      airport = new Airport();
    });

  describe("by default, ", function() {
    it("has no Planes Docked when first created", function() {
      expect(airport.planes).toEqual([]);
    });
  });

  describe("knows how to ", function() {
    it("LAND a Plane Before DOCKING it ", function() {
      var plane = jasmine.createSpyObj("plane", ["land"]);
      airport.park(plane);
      expect(plane.land).toHaveBeenCalled();
    });


    it("DOCK a Plane After LANDING it", function() {
      var plane = jasmine.createSpyObj("plane", ["land"]);
      airport.park(plane);
      expect(airport.planes).toEqual([plane]);
    });
  });

});
