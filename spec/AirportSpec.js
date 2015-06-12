describe("Airport", function() {

  var airport;
  var plane;

  // beforeEach(function() {
  //   // plane = jasmine.createSpyObj([]);
  // )};

  describe("by default ", function() {
    it("starts with all planes DOCKED", function() {
      airport = new Airport();
      expect(airport.maximumCapacity).toEqual(true);
    });

    xit("can hold a maximum of 10 planes", function() {
      airport = new Airport();
      plane.bringPLaneIntoLand(10);

    });
  });





});
