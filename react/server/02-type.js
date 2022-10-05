// 通过nodemon node-dev进行node模块自动化
const express = require('express');
// 构建轮廓的方法
const {buildSchema} = require('graphql')
// 进行桥梁的链接(轮廓与实际进行链接)
// require('express-graphql')返回一个对象，该对象具有一个被调用的属性graphqlHTTP，该对象是您要调用的函数。  
const graphqlHttp = require('express-graphql').graphqlHTTP;
// 所支持查询的类型==>需要言行一致
// 可以通过 type Account 进行自定义类型
// getFilmDetail(id:Int!) 前端调用查询语句时必须要调用的字段 添加 !
let Scchema = buildSchema(`
    type Account{
        name:String,
        age:Int,
        location:String
    }
    type Film{
        id:Int,
        name:String,
        poster:String,
        price:Int
    }
    type Query{
        hello:String,
        getName:String,
        getAge:Int,
        getIntArray:[Int],
        getStringArray:[String],
        getAccountInfo:Account,
        getFilmInfo:[Film],
        getFilmDetail(id:Int!):Film
    }
`)
let faskeDb = [{
    id:1,
    name:'11111',
    poster:'http://1111',
    price:100
},{
    id:2,
    name:'2222',
    poster:'http://222',
    price:200
},{
    id:3,
    name:'33333',
    poster:'http://3333',
    price:300
}]
// (查询)处理器===>获取多个资源，只用一个请求
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
    },
    getIntArray:()=>{
        return [1,2,3,4,45,6,6]
    },
    getStringArray:()=>{
        return ['1','2','3','4']
    },
    // 可以进行按需索取
    // ES6简写方式
    getAccountInfo(){
        return {
            name:'sulnin',
            age:11,
            location:'山东'
        }
    },
    // 数组也可以进行按需所取，但是会将你所需的key全部取出
    getFilmInfo(){
        return faskeDb;
    },
    // 需要将obj 进行你所需字段的解构 obj==>id
    getFilmDetail({id}){
        console.log(id);
        // 去查找faskDb中id匹配的数组
        // 将数据给前端进行传输
        return faskeDb.filter(item=>item.id === id)[0];
    }
}
var app = express();

app.use('/graphql',graphqlHttp({
    schema:Scchema,
    rootValue:root,
    // 开启调试器
    graphiql:true
}))

app.listen(3000);