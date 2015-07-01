var Airport = function() {
  this.dockedPlanes = [];
  this.MAXIMUM_CAPACITY = 10;
};

Airport.prototype.dock = function(plane) {
  plane.land();
  this.dockedPlanes.push(plane);
};
