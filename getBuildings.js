async function getBuilding(building){
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb+srv://dbUser:2S1tQbxl0YXv8Xth@brickedelevator-4g5z0.mongodb.net/test?retryWrites=true&w=majority"

	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		var dbo = db.db("brickedElevator");
		dbo.collection("brickedElevator").findOne({"building": building}, function(err, result){
			if(err) throw err;
			db.close();
			return result;
		});
	});
}
async function getBuildings(){
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb+srv://dbUser:2S1tQbxl0YXv8Xth@brickedelevator-4g5z0.mongodb.net/test?retryWrites=true&w=majority"

	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		var dbo = db.db("brickedElevator");
		dbo.collection("brickedElevator").findOne({"building": building}, function(err, result){
			if(err) throw err;
			db.close();
			return result;
		});
	});
}
var building = getBuilding("Gibson");
console.log(building);