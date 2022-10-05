// 通过nodemon node-dev进行node模块自动化
const express = require('express');
// 构建轮廓的方法
const {buildSchema} = require('graphql')
// 进行桥梁的链接(轮廓与实际进行链接)
// require('express-graphql')返回一个对象，该对象具有一个被调用的属性graphqlHTTP，该对象是您要调用的函数。  
const graphqlHttp = require('express-graphql').graphqlHTTP;
// 所支持查询的类型==>需要言行一致==> : 后面是需要返回的类型
let Scchema = buildSchema(`
    type Query{
        hello:String,
        getName:String,
        getAge:Int,
        getIntArray:[Int],
        getStringArray:[String],

    }
`)
// 处理器(处理器)===>获取多个资源，只用一个请求
let root = {
    hello:()=>{
        // 通过数据库查
        const str = 'hello world';
        return str;
    },
    getName:()=>{
        return 'sunlin'
    },
    getAge:()=>{
        return 1111;
    }
}
var app = express();

app.use('/home',function(req,res){
    res.send('home data111');
})

app.use('/list',function(req,res){
    res.send('list data');
})

app.use('/graphql',graphqlHttp({
    schema:Scchema,
    rootValue:root,
    // 开启调试器
    graphiql:true
}))

app.listen(3000);