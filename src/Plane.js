var Plane = function() {
  this.flyingStatus = true;
};

Plane.prototype.toggleFlyingStatus = function() {
  if (this.flyingStatus === true) {
    this.flyingStatus = false;
  } else {
    this.flyingStatus = true;
  }
};
