describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe("by default ", function() {
    it("is DOCKED in the Airport", function() {
      expect(plane.flyingStatus).toBe(false);
    });
  });

  describe("can change its flying status and go from ", function() {
    it("DOCKED to FLYING", function() {
      plane.toggleFlyingStatus();
      expect(plane.flyingStatus).toBe(true);
    });

    it("or FLYING to DOCKED", function() {
      plane.toggleFlyingStatus();
      expect(plane.flyingStatus).toBe(true);
      plane.toggleFlyingStatus();
      expect(plane.flyingStatus).toBe(false);
    });
  });

});
