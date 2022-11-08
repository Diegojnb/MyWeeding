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
        fixMain();
		$("#principal").load("main.html");
	});
	$("#schedule-phone").click(function(){
        fixSchedule();
		$("#principal").load("schedule.html");        
	});
    $("#location-phone").click(function(){
        fixSchedule();
		$("#principal").load("location.html");        
	});
    $("#contact-phone").click(function(){
        fixSchedule();
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

function fixMain(){
    fix("130px","80px","1500px","200px","15%","3%","700","80","200px");
}

function fixSchedule(){
    fix("90px","55px","1050px","110px","-13%","5%","600","60","100px");
}

function fix(a,b,c,d,e,f,g,h,i){
    document.getElementById('navigation-letters').style.fontSize = a;
    var elements = document.getElementsByClassName('links-top');
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.style.fontSize = b;
    }
    document.getElementById('exCollapsingNavbar').style.height = c;
    var elements = document.getElementsByClassName('li-collapse');
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.style.paddingTop = d;
    }
    document.getElementById('core-button').style.marginLeft = e;
    document.getElementById('core-button').style.marginTop = f;
    document.getElementById('core-button').style.fontWeight = g;
    document.getElementById('core-button').style.fontSize = h;
    document.getElementById('core-button').style.height = i;
}