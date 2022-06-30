var http = require("http");
var querystring = require("querystring");
http.createServer(function(req,res){
    var obj = querystring.parse(req.url.split("?")[1]);
    console.log(obj);//{ a: '1', b: '2', callback: 'fn' }
    var data = {a:1,b:2}
    // obj是一个函数，函数是fn(${JSON.stringify(data))==>执行这个函数
    res.end(`${obj.callback}(${JSON.stringify(data)})`);
}).listen(4050);