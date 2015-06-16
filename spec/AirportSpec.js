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
    it("only ONE Plane to Dock at a time", function() {
      airport.numberOfPlanesCalledToLand(1);
      expect(airport.dockingSpaceAvailabilty).toEqual(9);
      airport.numberOfPlanesCalledToLand(2);
      expect(airport.dockingSpaceAvailabilty).toEqual(9);
    });
  });



});
