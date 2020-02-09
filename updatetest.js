function updateWorking(building, eleIndex){
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb+srv://dbUser:2S1tQbxl0YXv8Xth@brickedelevator-4g5z0.mongodb.net/test?retryWrites=true&w=majority"

	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		
		var dbo = db.db("brickedElevator");
		dbo.createCollection("buildings", function(err, res){
			if(err) throw err;
		});
		var changeVal;
		dbo.collection("brickedElevator").findOne({"building" : building}, function(err, result){
			if(err) throw err;
			if(result.elevators[eleIndex].working){
				changeVal = {'$set' : {"elevators."+eleIndex+".working" : false }}
			}else{
				changeVal = {'$set' : {"elevators."+eleIndex+".working" : true }}
			}
			dbo.collection("brickedElevator").updateOne({"building" : "Ellingson"},changeVal , function(err,res) {
							if (err) throw err;
							console.log("Updated");
							});
		});
	});
}