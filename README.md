Airport Challenge JS
====================

```
        ______
        _\____\___
=  = ==(____MA____)
          \_____\___________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

This project ports an [existing project](https://github.com/joemaidman/airport_challenge) from Ruby to Javascript. We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport and confirm that it has landed

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

# Structure
The program uses three classes to achieve the specification: `Airport`, `Plane` and `WeatherGenerator`. Users can create an `Airport` with a custom capacity (default 5) and storm probability (default 10) by passing these values as arguments to the constructor. The `Airport` is responsible for requesting that a plane lands or takes-off with responsibility for taking the action delegated to the `Plane` class. The `WeatherGenerator`'s `generate_random_weather` method can be passed a probability (0-100) and returns `0` for stormy and `1` for not stormy. This method is called by the `Airport` class to determine the current weather conditions.

# Usage

### Installation
- Clone the repo

### Testing
- Run `open jasmine/SpecRunner.html`
- The `Airport` test file makes use of a test double to mock the plane class.
