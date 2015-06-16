describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("by default ", function() {
    it("has all Docking spaces EMPTY and ready for Planes to land", function() {
      expect(airport.dockingSpaceAvailabilty).toEqual(10);
    });

    it("can HOLD a MAXIMUM of 10 planes", function() {
      airport.dockPlane(11);
      expect(airport.dockingSpaceAvailabilty).toEqual(0);
    });
  });

  describe("brings in to Land", function() {
    xit("only ONE Plane to Dock at a time", function() {
      airport.numberOfPlanesCalledToLand(2);
      expect(airport.dockingSpaceAvailabilty).toEqual(10);
    });
  });

  // it("has a maximum temperature of 25 degrees (due to PSM)", function() {
  //     thermo.increaseTemperature(6);
  //     expect(thermo.currentTemperature).toEqual(25);
  //   });




});
