jQuery(document).ready(function() {
    $("#core-button").click(function(){
        if($(this).html()=="☰"){
            $(this).html('&#10005');    
        }else{
            $(this).html('&#9776');
        }
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

