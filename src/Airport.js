var Airport = function() {
  this.planes = [];
};

Airport.prototype.park = function(plane) {
  plane.land();
  this.planes.push(plane);
};
