<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="prev()">Previews</button>
    <img src="./images/ff.jpg" alt="" height="300" width="300">

    <button onclick="next()">Next</button>

</body>
    <script src="./slide.js"></script>

</html>

-------------- javascript ----------------

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
