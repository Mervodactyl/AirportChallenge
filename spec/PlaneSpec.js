describe("Plane", function() {
  var plane;

    beforeEach(function() {
      plane = new Plane();
    });

  describe("by default ", function() {
    it("upon creation, is FLYING", function() {
      expect(plane.isThePlaneInFlight).toBe(true);
    });
  });

  describe("can change its mobility status and go from ", function() {
    it("FLYING to DOCKED in Airport", function() {
      plane.togglePlaneFlyingStatus();
      expect(plane.isThePlaneInFlight).toBe(false);
    });

    it("or DOCKED in Airport to FLYING", function() {
      plane.togglePlaneFlyingStatus();
      expect(plane.isThePlaneInFlight).toBe(false);
      plane.togglePlaneFlyingStatus();
      expect(plane.isThePlaneInFlight).toBe(true);
    });
  });

  describe("cannot ", function() {
    it("change its status to FLYING if it is already in the air", function() {
      plane.takeOff();
      expect(function() { plane.takeOff(); }).toThrow(new Error("You cannot Take off, you are already Flying!"));
    });

    it("change its status to DOCKED if it is already on the ground", function() {
      plane.togglePlaneFlyingStatus();
      plane.landPlane();
      expect(function() { plane.landPlane(); }).toThrow(new Error("You cannot Land, you are already Docked!"));
    });
  });

});
