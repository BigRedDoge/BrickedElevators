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

	var client = await MongoClient.connect(url, {useNewUrlParser: true}).catch(err => { console.log(err);});
	try{
		var dbo = client.db("brickedElevator");
		var collection = dbo.collection("brickedElevator");
		var result = await collection.find({}).toArray();
		return result;
	}catch (err){
		console.log(err);
		console.log("AHHHHHH");
	}finally{
		client.close();
	}
}
var building = getBuildings();
console.log(building);