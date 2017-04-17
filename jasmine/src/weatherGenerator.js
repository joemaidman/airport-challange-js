function WeatherGenerator(){};

WeatherGenerator.prototype.isStormy = function(probability) {
  console.log(probability / 100)
  return Math.random() >= (probability / 100.0);
};
