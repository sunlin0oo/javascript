"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
// ctx.save();//入栈
// ctx.restore();//出栈
// 入栈和出栈必须保持成对出现，不能出现交叉，或者连续出栈和入栈,而且入栈的内容仅能获取一次
// 目的是保持各种绘制前的设置
// ctx.save();
// ctx.shadowOffsetX=4;
// ctx.shadowOffsetY=4;
// ctx.shadowColor="#000";
// ctx.shadowBlur=4;
// ctx.fillStyle="red";
// ctx.fillRect(50,50,100,100);
// ctx.restore();
// ctx.fillRect(200,50,100,100);
// ctx.save();
// ctx.translate(100,0);
// ctx.fillStyle="red";
// ctx.fillRect(0,0,100,100);
// ctx.translate(100,0);
// ctx.restore();
// ctx.fillStyle="blue";
// ctx.fillRect(0,0,100,100);
// 旋转
// ctx.translate(100,100);
// ctx.rotate(30);
// ctx.fillStyle="#FFF";
// ctx.fillRect(-50,-50,100,100);
// 缩放
// var  img:HTMLImageElement=document.createElement("img") as HTMLImageElement;
// img.src="../img/b.jpg";
// img.addEventListener("load",loadHandler);
// function loadHandler(e:Event){
//     ctx.translate(1200,0);
//     ctx.scale(-1,1);
//     ctx.drawImage(img,0,0,1200,600);
// }
// 形变
// var  img:HTMLImageElement=document.createElement("img") as HTMLImageElement;
// img.src="../img/b.jpg";
// img.addEventListener("load",loadHandler);
// function loadHandler(e:Event){
//     // ctx.transform(水平缩放,水平倾斜,垂直倾斜,垂直缩放,水平平移,垂直平移)
//     // ctx.transform(-1,0,0,1,300,1);
//     ctx.transform(1,Math.PI/180*60,0,1,0,1);
//     ctx.drawImage(img,0,0,300,150);
// }
// var x=50;
// var y=50;
// var speedX=2;
// var speedY=2;
// var angle=1;
// var scale=1;
// enum SCALE{SMALL="small",BIG="big"};
// var state=SCALE.SMALL;
// var fill:CanvasGradient=ctx.createRadialGradient(25,-25,0,25,-25,50);
// fill.addColorStop(0,"#FFF");
// fill.addColorStop(1,"red");
// ctx.fillStyle=fill;
// setInterval(move,16);
// function move():void
// {   
//     if(x+50>=canvas.width || x<50) speedX=-speedX;
//     if(y+50>=canvas.height || y<50) speedY=-speedY;
//     x+=speedX;
//     y+=speedY;
//     angle+=0.02;
//     if(angle>360) angle-=360;
//     if(state===SCALE.SMALL){
//         scale-=0.01;
//         if(scale<=0){
//             state=SCALE.BIG;
//         }
//     }else if(state===SCALE.BIG){
//         scale+=0.01;
//         if(scale>=1){
//             state=SCALE.SMALL;
//         }
//     }
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.save();
//     ctx.translate(x,y);
//     ctx.scale(scale,scale); 
//     ctx.rotate(angle);
//     ctx.beginPath();
//     ctx.arc(0,0,50,0,Math.PI/180*360);
//     ctx.fill();
//     ctx.restore();
// }
// var  img:HTMLImageElement=document.createElement("img") as HTMLImageElement;
// img.src="../img/b.jpg";
// img.addEventListener("load",loadHandler);
// function loadHandler(e:Event){
//     ctx.fillRect(0,0,1200,600)
//     ctx.arc(50,50,50,0,Math.PI/180*360);
//     ctx.clip();
//     ctx.drawImage(img,0,0,1200,600);
// }
// var x=50;
// var y=50;
// var speedX=2;
// var speedY=2;
// var  img:HTMLImageElement=document.createElement("img") as HTMLImageElement;
// img.src="../img/b.jpg";
// img.addEventListener("load",loadHandler);
// ctx.fillStyle="red";
// function loadHandler(e:Event){
//     ctx.fillRect(0,0,1200,600)
//     setInterval(move,16);
// }
// function move(){
//     if(x+50>=canvas.width || x<50) speedX=-speedX;
//     if(y+60>=canvas.height || y<50) speedY=-speedY;
//     x+=speedX;
//     y+=speedY;
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.save();
//     ctx.beginPath();
//     ctx.arc(x,y,50,0,Math.PI/180*360);
//     ctx.clip();
//     ctx.drawImage(img,0,0,1200,600);
//     ctx.restore();
// }
var imgList;
var arr = new Set();
var width = 300, height = 200;
init();
function loadImage(src) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = src;
        img.onload = function (e) {
            resolve(img);
        };
        img.onerror = function (err) {
            reject(err);
        };
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all([loadImage("../img/a.jpg"), loadImage("../img/b.jpg")])];
                case 1:
                    imgList = _a.sent();
                    ctx.drawImage(imgList[0], 0, 0, 1200, 600);
                    for (i = 0; i < 4; i++) {
                        for (j = 0; j < 3; j++) {
                            arr.add({ x: 1200 / 4 * i, y: 600 / 3 * j });
                        }
                    }
                    canvas.addEventListener("mousedown", mouseHandler);
                    return [2 /*return*/];
            }
        });
    });
}
function mouseHandler(e) {
    var e_1, _a;
    if (e.type === "mousedown") {
        canvas.addEventListener("mousemove", mouseHandler);
        canvas.addEventListener("mouseleave", mouseHandler);
        canvas.addEventListener("mouseup", mouseHandler);
    }
    else if (e.type === "mousemove") {
        try {
            for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var item = arr_1_1.value;
                if (e.offsetX >= item.x && e.offsetX <= item.x + width && e.offsetY >= item.y && e.offsetY <= item.y + height) {
                    arr.delete(item);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (arr.size > 0) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, 20, 0, Math.PI / 180 * 360);
            ctx.clip();
            ctx.drawImage(imgList[1], 0, 0, 1200, 600);
            ctx.restore();
        }
        else {
            ctx.save();
            ctx.clearRect(0, 0, 1200, 600);
            ctx.drawImage(imgList[1], 0, 0, 1200, 600);
            ctx.restore();
        }
    }
    else {
        canvas.removeEventListener("mousemove", mouseHandler);
        canvas.removeEventListener("mouseleave", mouseHandler);
        canvas.removeEventListener("mouseup", mouseHandler);
    }
}
//# sourceMappingURL=Main.js.map