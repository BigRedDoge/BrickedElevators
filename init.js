var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dbUser:2S1tQbxl0YXv8Xth@brickedelevator-4g5z0.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbo = db.db("brickedElevator");
	dbo.createCollection("buildings", function(err, res){
		if(err) throw err;
	});
		dbo.collection("brickedElevator").insertMany([{"building" : "Gibson", "elevators" : [{"position" : "center", "working" : true, "recentChanges" : []}]},
					{"building" : "Gleason", "elevators" : [{"position" : "left", "working" : true, "recentChanges" : []},
					{"position" : "right", "working" : true, "recentChanges" : []}]},
					{"building" : "Ellingson", "elevators" : [{"position" : "left", "working" : true, "recentChanges" : []},
					{"position" : "right", "working" : true, "recentChanges" : []}]},
					{"building" : "NRH", "elevators" : [{"position" : "left", "working" : true, "recentChanges" : []},
					{"position" : "right", "working" : true, "recentChanges" : []}]},
					{"building" : "Sol Heumann", "elevators" : [{"position" : "left", "working" : true, "recentChanges" : []},
					{"position" : "right", "working" : true, "recentChanges" : []}]},
					{"building" : "Peterson", "elevators" : [{"position" : "center", "working" : true, "recentChanges" : []}]},
					{"building" : "Res Hall A", "elevators" : [{"position" : "center", "working" : true, "recentChanges" : []}]},
					{"building" : "Res Hall B", "elevators" : [{"position" : "center", "working" : true, "recentChanges" : []}]},
					{"building" : "Res Hall C", "elevators" : [{"position" : "center", "working" : true, "recentChanges" : []}]},
					{"building" : "Res Hall D", "elevators" : [{"position" : "center", "working" : true, "recentChanges" : []}]}], function(err, res){
						if (err) throw err;
						console.log("Created building statuses");
						db.close();
					});
});