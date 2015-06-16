var Airport = function() {
  this.dockingSpaceAvailabilty = 10;
  this.MINIMUM_DOCKING_SPACES_AVAILABLE = 0;
  this.MAXIMUM_DOCKING_SPACES_AVAILABLE = 10;
};

Airport.prototype.dockPlane = function(numberOfPlanes) {
  if (this.dockingSpaceAvailabilty - numberOfPlanes < this.MINIMUM_DOCKING_SPACES_AVAILABLE) {
    this.dockingSpaceAvailabilty = this.MINIMUM_DOCKING_SPACES_AVAILABLE;
  } else {
    this.dockingSpaceAvailabilty -= numberOfPlanes;
  }
};
//
// Airport.prototype.numberOfPlanesCalledToLand = function(numberOfPlanes) {
//   if (numberOfPlanes <= 1) {
//     this.dockingSpaceAvailabilty -= 1;
//   } else {
//     this.dockingSpaceAvailabilty = this.dockingSpaceAvailabilty;
//   }
// };
//
