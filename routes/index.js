var express = require('express');
var router = express.Router();
var db = require("../mongodb/db.js");

function getAllMongoData() {
    var cache = [];
    return new Promise((resolve) => {
      resolve(new Promise((resolve) => {
        db.getAll().then((res) => {
          resolve(JSON.stringify(res, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Duplicate reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        }));
      });
    }));
});
}

var getAllMongo = function(req, res, next) {
  
  getAllMongoData().then((res) => {
    req.mongoData = res;
    return next();
  });
  
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.json(req.mongoData)
});

router.get('/db', getAllMongo, function(req, res, next) {
  res.json(req.mongoData)
});

router.get('/:building/:num/', function(req, res, next) {
  //res.json(req.mongoData)
  res.send("send")
  db.updateStatus(req.params.building, req.params.num);
});




module.exports = router;
