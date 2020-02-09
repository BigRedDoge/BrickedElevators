var http = require('http');
var fs = require('fs');
var WebSocket = require('ws');

var Gpio = require('onoff').Gpio;
var LED = [new Gpio(2, 'out'), new Gpio(8, 'out')];
var setButton = [new Gpio(3, 'in', 'rising', { debounceTimeout: 50 }),
new Gpio(5, 'in', 'rising', { debounceTimeout: 50 })];
var resetButton = [new Gpio(4, 'in', 'rising', { debounceTimeout: 50 }),
new Gpio(6, 'in', 'rising', { debounceTimeout: 50 })];
var broken = [0, 0];
var elevators = ['NRH1', 'NRH2']
var building = 'NRH';

var ws = new WebSocket('ws://192.168.43.187/:3030', {
    perMessageDeflate: false
});


ws.on('open', function open() {
    console.log("Connected to Server!");
    ws.send("Remote Pi Connected");
    monitorInputs
});

ws.on('message', function (data) {
    var info = JSON.parse(data);
    var door = (info.door).parseInt();
    var status = (info.status).parseInt();
    broken[door] = status
    LED[door].writeSync(status)
});


function sendStatus(door, status) {
    var data = {
        "building": building,
        "elevator_door": door,
        "broken": status
    }
    ws.send(JSON.stringify(data));
}


function btnHandler(door, status) {
    if (err) {
        console.error('Setting Error');
        return;
    }
    if (broken[door]) {
        broken[door] = status;
        sendStatus(door, status)
        LED[!status].writeSync(status);
    }
}


setButton[0].watch(function (err, value) {
    btnHandler(0, 1);
});
setButton[1].watch(function (err, value) {
    btnHandler(1, 1);
});

resetButton[0].watch(function (err, value) {
    btnHandler(0, 0);
});
resetButton[1].watch(function (err, value) {
    btnHandler(1, 0);
});

