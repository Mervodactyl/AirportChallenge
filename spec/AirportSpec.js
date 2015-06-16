describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("by default ", function() {
    it("has all docking spaces empty and ready for Planes to land", function() {
      expect(airport.dockingSpaceAvailabilty).toEqual(10);
    });

    it("can dock a maximum of 10 planes", function() {
      airport.dockPlane(11);
      expect(airport.MAXIMUMCAPACITY).toEqual(10);
    });
  });





});
