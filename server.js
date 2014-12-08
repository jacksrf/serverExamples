var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var i = 0;
server.on("connection", function(ws) {
  ws.on
  i++;
  var count = i;
  console.log(count + " people connected");

    ws.on('message', function (message) {
    console.log(message);
    });

    ws.on('close', function () {
    i--;
    var count = i
    console.log(count + " people connected");
    });
  });
