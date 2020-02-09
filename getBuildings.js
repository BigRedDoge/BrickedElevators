var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dbUser:2S1tQbxl0YXv8Xth@brickedelevator-4g5z0.mongodb.net/test?retryWrites=true&w=majority"


function getBuilding(building) {
	return new Promise((resolve, reject) => {
		MongoClient.connect(url, function (err, db) {
			if (err) throw err;
			var dbo = db.db("brickedElevator");
			dbo.collection("brickedElevator").findOne({ "building": building }, function (err, result) {
				if (err) throw err;
				resolve(result);
			});
		});
	});
}

function getBuildings() {
	return new Promise((resolve, reject) => {
		MongoClient.connect(url, function (err, db) {
			if (err) throw err;
			var dbo = db.db("brickedElevator");
			dbo.collection("brickedElevator").find({}, function (err, result) {
				if (err) throw err;
				resolve(result);
			});
		});
	});
}

getBuildings().then((res) => console.log(res));




