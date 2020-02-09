var WebSocket = require('ws');
var db = require("../mongodb/db.js");
// WebSocket Server

async function startWSS(server) {
    var wss = await new WebSocket.Server({ server });

    wss.on('connection', function connection(ws) {
        console.log("Pi Conencted!");
    
        ws.on('message', function incoming(data) {
            var res = JSON.parse(JSON.stringify(data));
            db.updateStatus()
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