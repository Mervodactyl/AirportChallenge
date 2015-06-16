var Airport = function() {
  this.dockingSpaceAvailabilty = 10;
  this.MAXIMUMCAPACITY = 10;
};

Airport.prototype.dockPlane = function(plane) {
  if (this.dockingSpaceAvailabilty + plane > this.MAXIMUMCAPACITY) {
    this.dockingSpaceAvailabilty = this.MAXIMUMCAPACITY;
  } else {
    this.dockingSpaceAvailibilty += plane;
  }
};
