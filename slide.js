var photos = ["images/ff2.jpg", "images/ff.jpg", "images/ff3.jpg"]

var imgTag = document.querySelector("img")


var cnt=0;


function next(){
    cnt++;
    if(cnt>=photos.length){
        cnt=0;
        imgTag.src = photos[cnt];
    }else{
        imgTag.src=photos[cnt];
    }
}

function prev(){

    cnt--;
    if(cnt<=0){
        cnt=0;
        imgTag.src = photos[cnt]
    }else{
        imgTag.src=photos[cnt];
    }
    
}