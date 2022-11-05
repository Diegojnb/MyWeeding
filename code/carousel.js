var numPhotos=78;
var listPhotos = [];
var timeout = 6000;
var margin = 200;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function zeroPad(num) {
    return num.toString().padStart(3, "0");
}

function initializeList(){
    for (let index = 1; index <= numPhotos; index++) {
        listPhotos[index-1]=zeroPad(index);            
    }
}

function generateRandomNumber(){        
    return Math.floor(Math.random() * listPhotos.length);

}

function customSplice(index){
    var x = listPhotos.slice(0,index);
    var y = listPhotos.slice(index+1);
    return x.concat(y);
} 


function changePhotos(){
    var randomNumber = generateRandomNumber();
    listPhotos = customSplice(randomNumber);
    var srcPhoto = "./images/carrousel/" + zeroPad(randomNumber+1) + ".jpg";
    var basehtml = "<img src=\"" + srcPhoto + "\">";
    
    if(document.getElementById('carr0')==null){
        return;
    }
    document.getElementById('carr0').innerHTML = basehtml;        
    
    const img = new Image();
    img.onload = function() {
        console.log(this.height);
        console.log(this.width);
        if(this.height + margin > 1800){
            document.getElementById('principal-right').style.height = 1600;    
        }else{
            document.getElementById('principal-right').style.height = this.height + margin;
        }
        
    }
    img.src = srcPhoto;

    if(listPhotos.length==0){
        initializeList();
    }
}

jQuery(document).ready(function() {


    async function demo() {
        initializeList();
        while (true) {             
            changePhotos();
            await sleep(timeout);
        }
    }
    
    demo();

});