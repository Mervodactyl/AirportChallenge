describe("Plane", function() {

  it("by default, is FLYING when created", function() {
    var plane = new Plane();
    expect(plane.isFlying()).toBe(true);
  });

  it("can change its status from FLYING to DOCKED", function() {
    var plane = new Plane();
    plane.land();
    expect(plane.isFlying()).toBe(false);
  });

});
