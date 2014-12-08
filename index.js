var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var i = 0;
server.on("connection", function(ws) {
  ws.on
  i++;
  var count = i;
  console.log(count + " people connected");

  // setInterval(function(message){
  //   ws.send("hello");
  // }, 1000);

  ws.on('message', function (message) {
    console.log(message);
    var x = Math.floor(Math.random() * (3));
    var jokeArray = ["What do you call a man with no arms and no legs playing in the leaves?... Russell","Why didn't the melons get married?... Because they cantaloupe!","What do you call a Bee who is having a bad hair day?.... A Frisbee", "What was Beethoven's favorite fruit?...BANANANAAAAAA!", "Why couldn't Dracula's wife get to sleep?....Because of his coffin.", "Why is the ocean blue?... Because all the little fish go blu, blu blu.", "Guy walks into a bar with a slab of asphalt under arm. Says to the bartender: I’ll take a beer, and one for the road.", "What happens to Pastors who eat chili dogs?....They have to sit in their own pew."];
    var randomJoke = jokeArray[x];
    ws.send(randomJoke);
  });

  ws.on('close', function () {
    i--;
    var count = i
    console.log(count + " people connected");
  });
});
