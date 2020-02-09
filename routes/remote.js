var express = require('express');
var router = express.Router();
var db = require("../mongodb/db.js");


function getMongoData(building, door) {
    db.getBuilding(building).then((res) => {
        return JSON.stringify(res);
    });
}

var getMongoDataMiddleware = function(req, res, next) {
    if (req.params.building && req.params.door) {
        req.mongoData = getMongoData();
        return next();
    } else {
        return next();
    }
}

router.get('/status/?building/?door', getMongoData, (req, res, next) => {

    console.log(building);
    res.json(req.mongoData);
});

router.post('/update', (req, res) => {
    console.log(req.params);
});