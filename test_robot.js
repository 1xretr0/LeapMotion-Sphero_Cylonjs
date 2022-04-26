var Cylon = require('cylon');

Cylon.robot({
  work: function() {
    every((1).second(), function() {
      console.log("Hello, human!");
    });
  }
}).start();