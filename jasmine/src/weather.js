var Weather = function(){};

Weather.prototype.isSunny = function(num) {
  return num < 0.8;
}

Weather.prototype._randNum = function() {
  return Math.random();
}
