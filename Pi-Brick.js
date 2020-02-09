var http = require('http');
var fs = require('fs');
var Gpio = require('onoff').Gpio;
var LED = [new Gpio(2,'out'),new Gpio(8,'out')];
var setButton = [new Gpio(3,'in','rising',{debounceTimeout:50}),new Gpio(5,'in','rising',{debounceTimeout:50})];
var resetButton = [new Gpio(4,'in','rising',{debounceTimeout:50}),new Gpio(6,'in','rising',{debounceTimeout:50})];
var broken = [0,0];
var elevators = ['NRH1','NRH2']

const options = {
    port:80,
    host:'',
    method:'CONNECT',
    path:''
};

const req = http.request(options);
req.end();

req.on('connect',(res,socket,head)=>{
    for(var i=0;i<2;i++){
        req.on(elevators[i],(state)=>{
            broken[i] = state;
            LED[i].writeSync(state);
        });
        setButton[i].watch(function(err,value){
            if(err){
                console.error('Setting Error');
                return;
            }
            else if(!broken[i]){
                req.emit(elevators[i],1);
                broken=1;
                LED[i].writeSync(1);
            }
        });
        resetButton[i].watch(function(err,value){
            if(err){
                console.error('Resetting Error');
                return;
            }
            else if(broken[i]){
                req.emit(elevators[i],0);
                broken=0;
                LED[i].writeSync(0);
            }
        });
    }
});