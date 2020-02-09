$(document).ready(function() {

    var buildings = [["Gibson", 1],
                     ["Gleason", 2],
                     ["Ellingson", 2],
                     ["NRH", 2],
                     ["Sol", 2],
                     ["Peterson", 1],
                     ["Res Hall A", 1],
                     ["Res Hall B", 1],
                     ["Res Hall C", 1],
                     ["Res Hall D", 1]];


    for(var i=0;i<10;i++){
        $("#building"+i).click(function() {
            $("#collapse"+i).collapse("toggle");
        });
    }
});