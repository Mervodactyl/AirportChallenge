describe("Plane", function() {
  var plane;

  describe("by default ", function() {
    it("is DOCKED in the Airport", function() {
      plane = new Plane();
      expect(plane.flyingStatus).toBe(false);
    });
  });

  describe("can change its flying status and go from ", function() {
    it("DOCKED to FLYING", function() {
      plane = new Plane();
      plane.toggleFlyingStatus();
      expect(plane.flyingStatus).toBe(true);
    });

    it("or FLYING to DOCKED", function() {
      plane = new Plane();
      plane.toggleFlyingStatus();
      expect(plane.flyingStatus).toBe(true);
      plane.toggleFlyingStatus();
      expect(plane.flyingStatus).toBe(false);
    });
  });


});
