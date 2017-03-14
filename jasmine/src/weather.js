var Weather = function(){};

Weather.prototype.isSunny = function() {
  return Math.random() < 0.8;
}
