describe ("Airport", function() {
  var airport;
  var plane1;

  var planeDouble = function(){
    this.airport = null;
  };
  planeDouble.prototype = {
    isLanded: function(){
      return this.airport !== null;
    },
    land: function(airport){
      this.airport = airport;
    },
    takeoff: function(){
      this.airport = null;
    }
  }

  beforeEach(function() {
    sunnyAirport = new Airport(20, 0);
    stormyAirport = new Airport(20, 100);
    plane1 = new planeDouble();
  });

  it ("has been defined", function() {
    expect(sunnyAirport).toBeDefined();
  });

  describe ("#land_plane", function() {

    it ("responds to land_plane method", function() {
      expect(sunnyAirport.land_plane).toBeDefined();
    });

    it ("adds the plane to the airport", function() {
      sunnyAirport.land_plane(plane1);
      expect(sunnyAirport.planes).toEqual([plane1]);
    });

    it ("returns the plane", function() {
      expect(sunnyAirport.land_plane(plane1)).toEqual(plane1);
    });

    it ("throws an error if the weather is stormy", function() {
      expect(function(){stormyAirport.land_plane(plane1)}).toThrow();
    });

    it ("throws an error if the airport is full", function() {
      sunnyAirport.capacity = 0;
      expect(function(){sunnyAirport.land_plane(plane1)}).toThrow();
    });

    it ("throws an error if the plane is already landed", function() {
      sunnyAirport.capacity = 5;
      sunnyAirport.land_plane(plane1);
      expect(function(){sunnyAirport.land_plane(plane1)}).toThrow();
    });

  });

  describe ("#permit_takeoff", function() {

    it ("responds to permit_takeoff method", function() {
      expect(sunnyAirport.permit_takeoff).toBeDefined();
    });

    it ("removes the plane from the airport", function() {
      sunnyAirport.land_plane(plane1);
      sunnyAirport.permit_takeoff(plane1);
      expect(sunnyAirport.planes).toEqual([]);
    });

    it ("returns the plane", function() {
      sunnyAirport.land_plane(plane1);
      expect(sunnyAirport.permit_takeoff(plane1)).toEqual(plane1);
    });

    it ("throws an error if the weather is stormy", function() {
      expect(function(){stormyAirport.permit_takeoff(plane1)}).toThrow();
    });

    it ("throws an error if the plane is at a different airport", function() {
      sunnyAirport.land_plane(plane1);
      expect(function(){stormyAirport.permit_takeoff(plane1)}).toThrow();
    });

    it ("throws an error if the plane is already in the air", function() {
      sunnyAirport.land_plane(plane1);
      sunnyAirport.permit_takeoff(plane1);
      expect(function(){sunnyAirport.permit_takeoff(plane1)}).toThrow();
    });

  });

});
