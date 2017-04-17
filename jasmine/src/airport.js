function Airport(capacity = 5, storm_probability = 10, weather = new WeatherGenerator()) {
  this.capacity = capacity;
  this.storm_probability = storm_probability;
  this.planes = [];
  this.weather = weather;
};

Airport.prototype.land_plane = function(plane) {
  if(plane.isLanded()) { throw "This plane is already on the ground." };
  if (this._isFull())  { throw "Sorry, this airport is full." };
  if (!this.weather.isStormy(this.storm_probability)){ throw "The weather at the airport is stormy, you cannot land." };
  plane.land(this);
  this.planes.push(plane);
  return plane;
};

Airport.prototype.permit_takeoff = function (plane) {
  if (!plane.isLanded()) { throw "This plane is already in the air." };
  if (!this.planes.includes(plane)) { throw "This plane is at a different airport." };
  if (!this.weather.isStormy(this.storm_probability)) { throw "The weather at the airport is stormy, you cannot takeoff." };
  plane.takeoff();
  this.planes.pop(plane);
  return plane;
};

Airport.prototype._isFull = function () {
  return this.planes.length >= this.capacity;
};
