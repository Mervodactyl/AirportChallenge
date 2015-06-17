var Plane = function() {
  this.isThePlaneInFlight = true;
};

Plane.prototype.togglePlaneFlyingStatus = function() {
  if (this.isThePlaneInFlight === true) {
    this.isThePlaneInFlight = false;
  } else {
    this.isThePlaneInFlight = true;
  }
};

Plane.prototype.takeOff = function() {
  if (this.isThePlaneInFlight === true) {
    throw new Error("You cannot Take off, you are already flying!");
  } else {
    this.isThePlaneInFlight = true;
  }
};


Plane.prototype.landPlane = function() {
  if (this.isThePlaneInFlight === false) {
    throw new Error("You cannot Land, you are already Docked!");
  } else {
    this.isThePlaneInFlight = true;
  }
};
