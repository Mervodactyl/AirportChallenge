var Plane = function() {
  this.flying = true;
};

Plane.prototype.isFlying = function() {
  return this.flying;
};

Plane.prototype.land = function() {
  if (this.isFlying() === false) {
    throw new Error("You can not Land, you are already on the ground!");
  }
  this.flying = false;
};

Plane.prototype.takeOff = function() {
  if (this.isFlying()) {
    throw new Error("You can not Take Off, you are already in the air!");
  }
  this.flying = true;
};
