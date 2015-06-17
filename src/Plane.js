var Plane = function() {
  this.isFlying = true;
};

Plane.prototype.land = function() {
  if (this.isFlying === true) {
    this.isFlying = false;
  } else {
    this.isFlying = true;
  }
};
