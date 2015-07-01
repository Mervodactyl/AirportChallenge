describe("Airport", function() {
  var airport;
  var plane;

    beforeEach(function() {
      airport = new Airport();
      plane = jasmine.createSpyObj("plane", ["land"]);
    });

  describe("by default, ", function() {
    it("has no Planes Docked when first created", function() {
      expect(airport.dockedPlanes).toEqual([]);
    });

    // it("has a maximum LANDING CAPACITY is 10 Planes", function() {
    //   airport.dock(plane); // times 11??? how???
    //   expect(airport.dockedPlanes).toEqual([10]); // 10 planes
    // });
    //
    // it("will raise an ERROR if more than 10 Planes attempt to Land", function() {
    //   expect(function() { plane.dock(); }).toThrow(new Error("You must divert your course, there is no room to Land here!"));
    // });
  });

  describe("knows how to ", function() {
    it("LAND a Plane Before DOCKING it ", function() {
      airport.dock(plane);
      expect(plane.land).toHaveBeenCalled();
    });


    it("DOCK a Plane After LANDING it", function() {
      airport.dock(plane);
      expect(airport.dockedPlanes).toEqual([plane]);
    });
  });

});
