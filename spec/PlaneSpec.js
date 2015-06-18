describe("Plane", function() {
  var plane;

    beforeEach(function() {
      plane = new Plane();
    });

  describe("by default, ", function() {
    it("is FLYING when created", function() {
      expect(plane.isFlying()).toBe(true);
    });
  });

  describe("can change its status ", function() {
    it("from FLYING to DOCKED", function() {
      plane.land();
      expect(plane.isFlying()).toBe(false);
    });

    it("or from DOCKED to FLYING", function() {
      plane.land();
      plane.takeOff();
      expect(plane.isFlying()).toBe(true);
    });
  });

  describe("cannot, and will raise an ERROR when it is made to ", function() {
    it("try and change its status to FLYING if it already is", function() {
      expect(function() { plane.takeOff(); }).toThrow(new Error("You can not Take Off, you are already Flying!"));
    });

    it("try and chnage its status to DOCKED if it is already grounded", function() {
      plane.land();
      expect(function() { plane.land(); }).toThrow(new Error("You can not Land, you are already Docked!"));
    });

  });




});
