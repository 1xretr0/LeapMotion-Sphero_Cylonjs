// leap2.js
// this code detects and returns user's hand position

var Cylon = require('cylon');

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

    my.leapmotion.on('hand', function(hand) {
      // Logger.info(payload.toString());
      console.log(hand.palmPosition.join(','));
    });
  }
}).start();