var WebSocket = require('ws');
// WebSocket Server

async function startWSS(server) {
    var wss = await new WebSocket.Server({ server });

    wss.on('connection', function connection(ws) {
        console.log("Pi Conencted!");
    
        ws.on('broken', function incoming(data) {
            console.log(data);
            ws.send("Broken Request Received");
        });
    
        ws.on('fixed', function incoming(data) {
            console.log(data);
        });
    
        ws.on('status', function incoming(data) {
            console.log(data);
        });
    
        ws.on('close', function incoming(data) {
            console.log("Remote Pi has disconnected");
        });
    
    });
}


module.exports = {
    startWSS
}