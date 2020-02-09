var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dbUser:2S1tQbxl0YXv8Xth@brickedelevator-4g5z0.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbo = db.db("brickedElevator");
	dbo.createCollection("brickedElevator", function(err, res){
		if(err) throw err;
	});
		dbo.collection("brickedElevator").insertMany([{"building" : "Gibson", "elevators" : [{"position" : 0, "working" : true}]},
					{"building" : "Gleason", "elevators" : [{"position" : 0, "working" : true},
					{"position" : 1, "working" : true}]},
					{"building" : "Ellingson", "elevators" : [{"position" : 0, "working" : true},
					{"position" : 1, "working" : true}]},
					{"building" : "NRH", "elevators" : [{"position" : 0, "working" : true},
					{"position" : 1, "working" : true}]},
					{"building" : "Sol Heumann", "elevators" : [{"position" : 0, "working" : true},
					{"position" : 1, "working" : true}]},
					{"building" : "Peterson", "elevators" : [{"position" : 0, "working" : true}]},
					{"building" : "Res Hall A", "elevators" : [{"position" : 0, "working" : true}]},
					{"building" : "Res Hall B", "elevators" : [{"position" : 0, "working" : true}]},
					{"building" : "Res Hall C", "elevators" : [{"position" : 0, "working" : true}]},
					{"building" : "Res Hall D", "elevators" : [{"position" : 0, "working" : true}]}], function(err, res){
						if (err) throw err;
						console.log("Created building statuses");
						db.close();
					});
});