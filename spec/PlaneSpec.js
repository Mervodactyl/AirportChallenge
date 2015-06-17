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
    it("FLYING to DOCKED", function() {
      plane.land();
      expect(plane.isFlying).toBe(false);
    });

    it("DOCKED to FLYING",function() {
      plane.land();
      expect(plane.isFlying).toBe(false);
      plane.takeOff();
      expect(plane.isFlying).toBe(true);
    });
  });

});
