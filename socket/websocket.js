var WebSocket = require('ws');
// WebSocket Server

var wss = function startWSS(server) {
    wss = new WebSocket.Server({ 
        port: process.env.WS_PORT 
    });
}

wss.on('connection', function connection(ws) {
    console.log("Pi Conencted!");

    ws.on('broken', function(data) {
        console.log(data);
        ws.send("Broken Request Received");
    });

    ws.on('fixed', function(data) {
        console.log(data);
    });

    ws.on('status', function(data) {
        console.log(data);
    });

    ws.on('close', function(data) {
        console.log("Remote Pi has disconnected");
    });

});

module.exports = {
    startWSS
}