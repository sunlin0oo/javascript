const http=require("http");
const cityData=require("./cityData");
http.createServer(async function(req,res){
    var type=req.url.split("?")[0];//在这里获取到路由类型
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8",
        "Access-Control-Allow-Origin":"*",
    })
    router(type,req,res)//服务器拿到了路由类型
}).listen(4020);

//获取数据
function getData(req){
    return new Promise(function(resolve,reject){
        var data = "";
        //req.on用于接收客户端的数据
        req.on("data",function(chunk){
            data+=chunk;
        })
        //接收完成后返回结束后的data
        req.on("end",function(){
            resolve(data);
        })
    })
}

function router(type,req,res){
    switch(type){
        case "/province":
            return getProvince(req,res);
        case "/city":
            return getCity(req,res);
        case "/county":
            return getCounty(req,res);
    }
}

//获取到省份
async function  getProvince(req,res){
    res.end(JSON.stringify(cityData["86"]));//结束响应客户端, 发送json字符串确定省份的键(key)是哪个
}

async function  getCity(req,res){
    var data = await  getData(req);//在这里接到了getData函数里接收到的客户端的的省份Id数据返回值data
    data = JSON.parse(data);//由于接来的数据是字符串, 所以这里转为了对象
    res.end(JSON.stringify(cityData[data.provinceId]));//结束响应,找到接收到的省份ID相对应的Key键, 它下面是就是市
}
async function  getCounty(req,res){
    var data = await getData(req);//把数据接收到, 这里接收到的市的字符串数据
    data = JSON.parse(data);//转为对象 { cityId: '110100' }
    res.end(JSON.stringify(cityData[data.cityId]));//最终把对象指向cityData下的data.cityId键下面的值
;
}