var http = require('http');
var fs = require('fs');
var WebSocket = require('ws');

var Gpio = require('onoff').Gpio;
var LED = [new Gpio(2, 'out'), new Gpio(8, 'out')];
var setButton = [new Gpio(3, 'in', 'rising', { debounceTimeout: 50 }),
new Gpio(17, 'in', 'rising', { debounceTimeout: 50 })];
var resetButton = [new Gpio(4, 'in', 'rising', { debounceTimeout: 50 }),
new Gpio(27, 'in', 'rising', { debounceTimeout: 50 })];
var broken = [0, 0];
var elevators = ['NRH1', 'NRH2']
var building = 'NRH';

var ws = new WebSocket('ws://192.168.43.187/:3030', {
    perMessageDeflate: false
});


ws.on('open', function open() {
    console.log("Connected to Server!");
    ws.send("Remote Pi Connected");
});


ws.on('message', function (data) {
    var info = JSON.parse(data);
    var door = info.door;
    var status = info.status;
    broken[door] = status
    LED[door].writeSync(status)
});


function sendStatus(door, status) {
    var data = {
        "building": building,
        "'door": door,
        "broken": status
    }
    ws.send(JSON.stringify(data));
}


function btnHandler(type, door) {
    if(!(type||broken[door])){
        broken[door]=1;
        sendStatus(door,1);
        LED[door].writeSync(1);
    }
    else if(type&&broken[door]) {
        broken[door]=0;
        sendStatus(door,0)
        LED[door].writeSync(0);
    }
}


setButton[0].watch(function (err, value) {
    btnHandler(0,0);
});
setButton[1].watch(function (err, value) {
    btnHandler(0,1);
});

resetButton[0].watch(function (err, value) {
    btnHandler(1,0);
});
resetButton[1].watch(function (err, value) {
    btnHandler(1,1);
});
