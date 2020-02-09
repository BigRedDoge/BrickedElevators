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


    $("#building1").click(function() {
        $("#collapse1").collapse("toggle");
    });
    $("#building2").click(function() {
        $("#collapse2").collapse("toggle");
    });
    $("#building3").click(function() {
        $("#collapse3").collapse("toggle");
    });
    $("#building4").click(function() {
        $("#collapse4").collapse("toggle");
    });
    $("#building5").click(function() {
        $("#collapse5").collapse("toggle");
    });
    $("#building6").click(function() {
        $("#collapse6").collapse("toggle");
    });
    $("#building7").click(function() {
        $("#collapse7").collapse("toggle");
    });
    $("#building8").click(function() {
        $("#collapse8").collapse("toggle");
    });    $("#building9").click(function() {
        $("#collapse9").collapse("toggle");
    });    $("#building10").click(function() {
        $("#collapse10").collapse("toggle");
    });

});

$("button").click(function(){
    $.post('https://BrickedElevators.tech/update',JSON.stringify({building,door}),function(data, status){
        console.log('Updated Data');
    });
});