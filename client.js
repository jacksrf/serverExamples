var WebSocket = require('ws');
ws = new WebSocket('ws://localhost:3000');

  ws.on('open', function (message) {
    ws.send("Hi Im new!");

    ws.on('message', function (message) {
      console.log(message);
      });

    });
