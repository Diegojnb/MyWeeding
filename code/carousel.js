var numPhotos=78;
var activeElement = 0;
var listPhotos = [];

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

function changePhotosPrev(){
    activeElement-=1;
    if(activeElement<0){
        activeElement=0;
    }
    activeElement=activeElement%3;
    changePhotos();
}

function changePhotosNext(){
    activeElement+=1;
    activeElement=activeElement%3;
    changePhotos();
}


function changePhotos(){
    console.log(activeElement);
    var randomNumber = generateRandomNumber();
    listPhotos = customSplice(randomNumber);
    var srcPhoto = "./images/carrousel/" + zeroPad(randomNumber+1) + ".jpg";
    var basehtml = "<img src=\"" + srcPhoto + "\">";
    /*var newImg = new Image;
    newImg.onload = function() {
        document.getElementById('myCarousel').style.setProperty('width', this.width+"px");
        document.getElementById('myCarousel').style.setProperty('height', this.height+"px");
    }
    newImg.src = srcPhoto;
    */
    if(document.getElementById('carr' + activeElement)==null){
        return;
    }
    document.getElementById('carr' + activeElement).innerHTML = basehtml;
    
    if(listPhotos.length==0){
        initializeList();
    }
    activeElement+=1;
    activeElement=activeElement%3;           
}

$(document).ready(function(){


    async function demo() {
        initializeList();
        const carousel = new bootstrap.Carousel('#myCarousel');
        carousel.carousel();

        while (true) {                
            await sleep(6000);
            changePhotos();            
        }
    }
    
    demo();

});