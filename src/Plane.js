var Plane = function() {
  this.flying = true;
};

Plane.prototype.isFlying = function() {
  return this.flying;
};

Plane.prototype.land = function() {
  this.flying = false;
};
