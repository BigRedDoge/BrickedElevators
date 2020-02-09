var WebSocket = require('ws');

var ws = new WebSocket('ws://192.168.43.187/:3030', {
  perMessageDeflate: false
});

ws.on('open', function open() {
    console.log("Connected to Server!");
    ws.send("Remote Pi Connected");
});