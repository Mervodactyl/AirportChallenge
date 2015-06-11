var Plane = function() {
  this.flyingStatus = false;
};

Plane.prototype.toggleFlyingStatus = function() {
  if (this.flyingStatus === false) {
    this.flyingStatus = true;
  } else {
    this.flyingStatus = false;
  }
};
