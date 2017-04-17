function Plane() {};

Plane.prototype.land = function(airport) {
  this.airport = airport;
  return true;
};

Plane.prototype.takeoff = function(){
  this.airport = null;
  return true;
};

Plane.prototype.isLanded = function () {
  return this.airport !== null;
};
