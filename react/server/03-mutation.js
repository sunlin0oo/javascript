// 通过nodemon node-dev进行node模块自动化
const express = require('express');
// 构建轮廓的方法
const {buildSchema} = require('graphql');
// 进行桥梁的链接(轮廓与实际进行链接)
// require('express-graphql')返回一个对象，该对象具有一个被调用的属性graphqlHTTP，该对象是您要调用的函数。  
const graphqlHttp = require('express-graphql').graphqlHTTP;
// 所支持查询的类型==>需要言行一致
// 可以通过 type Account 进行自定义类型
// 使用mutation进行数据的修改
// createFilm(input:FilmInput):Film 返回类型是Film

let Scchema = buildSchema(`
    type Film{
        id:Int,
        name:String,
        poster:String,
        price:Int
    }

    input FilmInput{
        name:String,
        poster:String,
        price:Int
    }

    type Query{
        getFilmInfo:[Film],
    }

    type Mutation{  
        createFilm(input:FilmInput):Film,
        updateFilm(id:Int!,input:FilmInput):Film,
        deleteFilm(id:Int!):Int,
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
    // 数组也可以进行按需所取，但是会将你所需的key全部取出
    getFilmInfo(){
        return faskeDb;
    },
    createFilm({input}){
        let obj = {...input,id:faskeDb.length+1}

        faskeDb.push(obj);
        return obj;
    },
    updateFilm({id,input}){
        // id是需要修改的key,input是所需要修改的内容
        let current = null;
        faskeDb = faskeDb.map(item=>{
            if(item.id === id){
                // ... 复制 同类相会进行合并
                current = {...item,...input}
                return {...item,...input}
            }
            return item;
        })
        return current;
    },
    deleteFilm({id}){
        faskeDb = faskeDb.filter(item=>item.id !==id);
        return 1;
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

/**Graphiql
 * mutation{
  updateFilm(id:1,input:{
    name:"111-xiugai",
    poster:"111-poster-xiugai",
    price:111
  }){
    // 复杂类型所需要进行返回到前端的key
    id,name,poster,price
  }
}*/