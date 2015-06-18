var Plane = function() {
  this.flying = true;
};

Plane.prototype.isFlying = function() {
  return this.flying;
};

Plane.prototype.land = function() {
  this.flying = false;
};

Plane.prototype.takeOff = function() {
  if (this.isFlying()) {
    throw new Error ("You can not Take Off, you are already flying!");
  }
  this.flying = true;
};
