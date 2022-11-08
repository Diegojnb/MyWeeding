var numPhotos=81;
var listPhotos = [];
var timeout = 10000;
var margin = 200;
var millisecondsToWait = 200;

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
    var index = generateRandomNumber();
    var el = listPhotos[index];        
    listPhotos = customSplice(index);
    var srcPhoto = "./images/carrousel/" + el + ".jpg";
    var basehtml = "<img src=\"" + srcPhoto + "\">";
    if(document.getElementById('carr0')==null){
        return;
    }
    document.getElementById('carr0').innerHTML = basehtml;
    if(listPhotos.length==0){
        initializeList();
    }
}

jQuery(document).ready(function() {


    async function carousel() {
        initializeList();        
        setTimeout(function() {
            changePhotos();
        }, millisecondsToWait); //sleep para que cargue la primera foto despues de cargar el main.html
        while (true) {
            changePhotos();
            await sleep(timeout);
        }
    }
    
    carousel();

});