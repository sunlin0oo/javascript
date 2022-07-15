"use strict";
var canvas = document.querySelector("#canvas2");
var ctx = canvas.getContext("2d");
canvas.style.position = "absolute";
canvas.style.left = "300px";
canvas.style.top = "50px";
// ctx.font="20px 宋体";
// ctx.textBaseline="middle";
// ctx.textAlign="center";
// ctx.direction="ltr";
// var rect:TextMetrics=ctx.measureText("hello world.");
// console.log(rect);
// ctx.fillText("hello world.",canvas.width/2,canvas.height/2);
function loadImage(src) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = src;
        img.onload = function (evt) {
            resolve(img);
        };
        img.onerror = function (evt) {
            reject(evt);
        };
    });
}
// init();
// async function init():Promise<void>
// {
//     var img=await loadImage("../img/common.png");
//     // ctx.drawImage(img,0,0);
//     // ctx.drawImage(img,0,0,1200,600);
//     // ctx.drawImage(img,290,447,178,64,100,100,100,40);
// }
// 放大镜
// var img:HTMLImageElement;
// var scale:number=1.5;
// init();
// async function  init():Promise<void>
//  {
//     img=await loadImage("../img/c1.jpg");
//     ctx.drawImage(img,0,0);
//     canvas.addEventListener("mouseenter",mouseHandler);
// }
// function mouseHandler(e:MouseEvent):void{
//     if(e.type==="mouseenter"){
//         canvas.addEventListener("mousemove",mouseHandler);
//         canvas.addEventListener("mouseleave",mouseHandler);
//     }else if(e.type==="mouseleave"){
//         canvas.removeEventListener("mousemove",mouseHandler);
//         canvas.removeEventListener("mouseleave",mouseHandler);
//         ctx.clearRect(0,0,canvas.width,canvas.height);
//         ctx.drawImage(img,0,0);
//     }else if(e.type==="mousemove"){
//         ctx.clearRect(0,0,canvas.width,canvas.height);
//         ctx.drawImage(img,e.offsetX/2,e.offsetY/2,600/2,300/2,0,0,600,300);
//     }
// }
var video, canvas1, ctx1;
var bool = true;
init();
function init() {
    video = document.createElement("video");
    video.src = "../img/test3.mp4";
    canvas1 = document.createElement("canvas");
    ctx1 = canvas1.getContext("2d");
    canvas1.width = 536;
    canvas1.height = 480;
    setInterval(animation, 1);
    document.addEventListener("click", clickHandler);
}
function animation() {
    ctx1.drawImage(video, 0, 0);
    // 69 185 239 255
    var imgData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    var data = imgData.data;
    // console.log(imgData);
    for (var i = 0; i < data.length; i += 4) {
        if ((data[i] >= 150 && data[i] <= 200) && (data[i + 1] >= 170 && data[i + 1] <= 200) && (data[i + 2] >= 200 && data[i + 2] <= 255) && data[i + 3] === 255) {
            data[i + 3] = 0;
        }
    }
    ctx.putImageData(imgData, 0, 0);
}
function clickHandler(e) {
    bool = !bool;
    if (bool) {
        video.pause();
    }
    else {
        video.play();
    }
}
//# sourceMappingURL=Main.js.map