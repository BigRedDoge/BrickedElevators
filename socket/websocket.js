var WebSocket = require('ws');
// WebSocket Server

async function startWSS(server) {
    var wss = await new WebSocket.Server({ server });

    wss.on('connection', function connection(ws) {
        console.log("Pi Conencted!");
    
        ws.on('message', function incoming(data) {
            var res = JSON.parse(data);
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