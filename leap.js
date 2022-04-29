// leap.js
// this code returns log data such as hand count, pointables, frames, etc

var Cylon = require('cylon'); // Init robot

Cylon.robot({
  connections: {
    leapmotion: { adaptor: 'leapmotion' }
  },

  devices: {
    leapmotion: { driver: 'leapmotion' }
  },

  work: function(my) {
    my.leapmotion.on('connect', function() {
      console.log("Connected");
    });

    my.leapmotion.on('start', function() {
      console.log("Started");
    });

    my.leapmotion.on('frame', function(frame) {
      console.log(frame.toString());
    });

    my.leapmotion.on('hand', function(hand) {
      console.log(hand.toString());
    });

    my.leapmotion.on('pointable', function(pointable) {
      console.log(pointable.toString());
    });

    my.leapmotion.on('gesture', function(gesture) {
      console.log(gesture.toString());
    });
  }
});

Cylon.start();
