describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe("by default ", function() {
    it("upon creation, is FLYING", function() {
      expect(plane.flyingStatus).toBe(true);
    });
  });

  describe("can change its flying status and go from ", function() {
    it("FLYING to DOCKED", function() {
      plane.toggleFlyingStatus();
      expect(plane.flyingStatus).toBe(false);
    });

    it("or DOCKED to FLYING", function() {
      plane.toggleFlyingStatus();
      expect(plane.flyingStatus).toBe(false);
      plane.toggleFlyingStatus();
      expect(plane.flyingStatus).toBe(true);
    });
  });

});
