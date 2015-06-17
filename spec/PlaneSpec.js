describe("Plane", function() {
  var plane;

    beforeEach(function() {
      plane = new Plane();
    });

  describe("by default, ", function() {
    it("has a status of FLYING when created", function() {
      expect(plane.isFlying).toBe(true);
    });
  });

  describe("can change its status from ", function() {
    it("FLYING to LAND", function() {
      plane.land();
      expect(plane.isFlying).toBe(false);
    });
  });

});
