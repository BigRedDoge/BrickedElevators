function updateWorking(building, eleIndex){
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb+srv://dbUser:2S1tQbxl0YXv8Xth@brickedelevator-4g5z0.mongodb.net/test?retryWrites=true&w=majority"

	MongoClient.connect(url, function(err, db){
		if(err) throw err;
		var dbo = db.db("brickedElevator");
		var changeVal;
		dbo.collection("brickedElevator").findOne({"building" : building}, function(err, result){
			if(err) throw err;
			var eleWork = "elevators." + eleIndex + ".working";
			if(result.elevators[eleIndex].working){
				changeVal = {'$set' : { [eleWork] : false }}
			}else{
				changeVal = {'$set' : { [eleWork] : true }}
			}
			dbo.collection("brickedElevator").updateOne({"building" : "Ellingson"},changeVal , function(err,res) {
							if (err) throw err;
							console.log("Updated");
							db.close();
							return true;
							});
		});
	});
}

//updateWorking("Ellingson", 0);
