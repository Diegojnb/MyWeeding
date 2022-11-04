jQuery(document).ready(function() {
    $("#core-button").click(function(){
        if($(this).html()=="☰"){
            $(this).html('&#10005');    
        }else{
            $(this).html('&#9776');
        }
    });

    
});

$(document).ready(function(){
    $("#principal").load("main.html");
	$("#index").click(function(){
		$("#principal").load("main.html");
	});
	$("#schedule").click(function(){
		$("#principal").load("schedule.html");
	});
    $("#location").click(function(){
		$("#principal").load("location.html");
	});
    $("#contact").click(function(){
		$("#principal").load("contact.html");
	});
    $("#index-phone").click(function(){
		$("#principal").load("main.html");
	});
	$("#schedule-phone").click(function(){
		$("#principal").load("schedule.html");
	});
    $("#location-phone").click(function(){
		$("#principal").load("location.html");
	});
    $("#contact-phone").click(function(){
		$("#principal").load("contact.html");
	});
});

function myNavFunc(){
    var dest = "40.923157, -3.560784"

    if( (navigator.platform.indexOf("iPhone") != -1) 
        || (navigator.platform.indexOf("iPod") != -1)
        || (navigator.platform.indexOf("iPad") != -1)){
        window.open("maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=" + dest);
    }else{
        window.open("https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=" + dest);
    }
}