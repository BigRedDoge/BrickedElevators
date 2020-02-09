var WebSocket = require('ws');
// WebSocket Server

async function startWSS(server) {
    var wss = await new WebSocket.Server({ server });

    wss.on('connection', function connection(ws) {
        console.log("Pi Conencted!");
    
        ws.on('message', function incoming(data) {
            var res = JSON.parse(JSON.stringify(data));
            console.log(data);
            ws.send(JSON.stringify({
                "door": 0,
                "status": 1
            }));
        });
    
        ws.on('close', function incoming(data) {
            console.log("Remote Pi has disconnected");
        });
    
    });
}


module.exports = {
    startWSS
}