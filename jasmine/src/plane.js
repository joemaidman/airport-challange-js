var Plane = function() {
  var airport;
};

Plane.prototype.land = function(airport) {
  this.airport = airport;
  return true;
}
