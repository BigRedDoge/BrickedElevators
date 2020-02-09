var express = require('express');
var router = express.Router();

/*
function getMongoData() {
    console.log("stuff");
}

var getMongoDataMiddleware = function(req, res, next) {
    if (req.params.dorm && req.params.door) {
        req.mongoData = getMongoData();
        return next();
    } else {
        return next();
    }
}

router.get('/status/?dorm/?door', getMongoData, (req, res, next) => {

    console.log(dorm);
    res.json(`Elevator status of elevator number ${req.params.door} in ${req.params.dorm}`);
});*/

router.post('/update', (req, res) => {
    console.log(req.params);
});