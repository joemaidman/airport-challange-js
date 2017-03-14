var Plane = function() {
  this.airport;
};

Plane.prototype.land = function(airport) {
  this.airport = airport;
  return true;
}

Plane.prototype.takeoff = function(){
  this.airport = null;
  return true;
};
