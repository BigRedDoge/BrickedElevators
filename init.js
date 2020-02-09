var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dbUser:2S1tQbxl0YXv8Xth@brickedelevator-4g5z0.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbo = db.db("brickedElevator");
	dbo.createCollection("buildings", function(err, res){
		if(err) throw err;
	});
		dbo.collection("brickedElevator").insertMany([{"building" : "Gibson", "elevators" : [{"position" : "center", "working" : true}]},
					{"building" : "Gleason", "elevators" : [{"position" : "left", "working" : true},
					{"position" : "right", "working" : true}]},
					{"building" : "Ellingson", "elevators" : [{"position" : "left", "working" : true},
					{"position" : "right", "working" : true}]},
					{"building" : "NRH", "elevators" : [{"position" : "left", "working" : true},
					{"position" : "right", "working" : true}]},
					{"building" : "Sol Heumann", "elevators" : [{"position" : "left", "working" : true},
					{"position" : "right", "working" : true}]},
					{"building" : "Peterson", "elevators" : [{"position" : "center", "working" : true}]},
					{"building" : "Res Hall A", "elevators" : [{"position" : "center", "working" : true}]},
					{"building" : "Res Hall B", "elevators" : [{"position" : "center", "working" : true}]},
					{"building" : "Res Hall C", "elevators" : [{"position" : "center", "working" : true}]},
					{"building" : "Res Hall D", "elevators" : [{"position" : "center", "working" : true}]}], function(err, res){
						if (err) throw err;
						console.log("Created building statuses");
						db.close();
					});
});