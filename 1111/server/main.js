const http=require("http");
const {insertDB,selectAll:select,selectItem}=require("./sql");

const querystring=require("querystring");
http.createServer(function(req,res){
    // console.log(req.url)==>查看?后面的数据

    // 解析出？前面的东西
    var type=req.url.split("?")[0];
    // 配置cors解决跨域问题
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8",
        "Access-Control-Allow-Origin":"*"// * 任意谁都可以进来
    })
    router(type,req,res)

    // //请求数据接收事件
    // var data = await getData(req);
    // res.end(data);
    //   var data;
    
    //   if(/get/i.test(req.method)){
    //       data = req.url.split("?")[1];
    //   }else if(/post/i.test(req.method)){
    //       data = await getData(req);
    //   }
    //   res.end(data);
   
}).listen(4020);
//获取前端发来数据
function getData(req){
    return new Promise(function(resolve,reject){
        // 请求数据接收事件==>数据量大会导致chunk分段==>一段二进制叫做包
        // 对后面的数据进行拼接，防止粘包
        var data="";
        req.on("data",function(chunk){
           data+=chunk;
        })
        // end:意味所有的数据都已经接收完毕
        req.on("end",function(){
            resolve(data);
        })
    })
}

function router(type,req,res){
    switch(type){
        case "/signUp":
        return signup(req,res);
        case "/signIn":
        return signIn(req,res);
        case "/selectAll":
        return selectAll(req,res);
    }
}

// 登录
async function signup(req,res){
    var data=await getData(req);
    try{
        data=JSON.parse(data);//将数组转换成字符串
    }catch(e){};
    if(!Array.isArray(data)){
        return res.end(JSON.stringify({result:false}));
    }
    var result=await insertDB(data);
     // 属性值和属性名相同时可以省略
    res.end(JSON.stringify({result}));
}
// 注册
async function signIn(req,res){
    var data=await getData(req);
    var result=await selectItem(JSON.parse(data));
    res.end(JSON.stringify({result}));
}

async function selectAll(req,res){
    var data=await select(req);
    res.end(JSON.stringify());
}
