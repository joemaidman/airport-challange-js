describe ("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane;
  })

  it ("has been defined", function() {
    expect(plane).toBeDefined();
  });

  it ("responds to land method", function() {
    expect(plane.land).toBeDefined();
  });

  it ("returns true when lands", function() {
    expect(plane.land()).toEqual(true);
  });

  it ("remembers the airport it landed in", function() {
    plane.land('Heathrow');
    expect(plane.airport).toBeDefined();
    expect(plane.airport).toEqual('Heathrow');
  });

});
