jQuery(document).ready(function() {
    $("#core-button").click(function(){
        if($(this).html()=="☰"){
            $(this).html('&#10005');    
        }else{
            $(this).html('&#9776');
        }
    });
});