// 挂起需要重启服务才可以刷新
// nodemon main 可以实时更新
var http=require("http");//超文本对象协议
// var https=require("https");
// createServer 创建服务
// createServer中参数是一个回调函数，而回调函数中参数有两个，一个是req,res
// req 请求  类型IncomingMessage  请求头==>发送
// res 响应  类型ServerResponse   响应头==>接收
// 消息分为两个部分，一个叫消息头，一个叫消息体
http.createServer(function(req,res){
    // 写入响应的消息
    // res.write("你好");
    // res.write("你好1");
    // res.write("你好2");
    // res.end();//结束发送
    // 写响应头消息：
    // 这种写法一次只能设置一个头消息，必须只能写在writeHead前面
    // res.setHeader("Content-Type","text/html;charset=utf-8");
    // 可以设置很多头消息，并且包含了返回状态码200==>成功拿到数据
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
    })
    res.write("<ul>");
    for(var i=0;i<10;i++){
        res.write("<li>"+i+"</li>")
    }
    res.write("</ul>");
    res.end();
    // res.end("你好");
    // end必须最后执行
}).listen(4010)//侦听

// .listen(4000,"localhost",function(){
//     /**参数一：创建服务有一个listen方法，开启服务侦听，端口号设置，这里是4000
//      * 参数二：需要有当前服务的域名
//      * 参数三：函数是服务创建成功后自动执行的函数
//      */
//     console.log("创建服务成功")
// })
