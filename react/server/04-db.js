/**
 * 1.启动db serve（外部）==>需要下载mongodb==>.\mongod.exe --dbpath=E:\mongodb6.0.2\data\db  或者 net start MongoDB/net stop MongoDB
 *  .\mongod.exe --config 'E:\mongodb-win32-x86_64-windows-5.0.13\bin\mongodb.config'
 * 2.连接数据库（04-db.js）
 * 3.改造增删改查
 * 4.可视化
 */
// 照葫芦画瓢
// 通过nodemon node-dev进行node模块自动化
const express = require('express');
// 构建轮廓的方法
const {buildSchema} = require('graphql');
// 进行桥梁的链接(轮廓与实际进行链接)
// require('express-graphql')返回一个对象，该对象具有一个被调用的属性graphqlHTTP，该对象是您要调用的函数。  
const graphqlHttp = require('express-graphql').graphqlHTTP;

//------------------------------------------------------连接数据库服务------------------------------------------------------------
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/maizuo')

// 初始化模型==>限制数据库中films(集合表)==>只能存放三个字段(name,poster,price)
var FilmModel = mongoose.model('film',new mongoose.Schema({
    name:String,
    poster:String,
    price:Number
}));
// 创建模型==>FilmMoel.create()
// 查找模型==>FilmMoel.find()
// 更新模型==>FilmMoel.update()
// 删除模型==>FilmMoel.delete()
//------------------------------------------------------连接数据库服务------------------------------------------------------------


let Scchema = buildSchema(`
    type Film{
        id:String,
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
        getFilmInfo(id:String!):[Film],
    }

    type Mutation{  
        createFilm(input:FilmInput):Film,
        updateFilm(id:String!,input:FilmInput):Film,
        deleteFilm(id:String!):Int,
    }
`)
// (查询)处理器===>获取多个资源，只用一个请求
let root = {
    // 数组也可以进行按需所取，但是会将你所需的key全部取出
    getFilmInfo({id}){
        if(!id) return FilmModel.find();//如果查询错误的id，则返回所有的id
        // 因为在mongoose中存储的都是下划线id=>查找指定的id
        return FilmModel.find({_id:id});
    },
    createFilm({input}){
        /**
         * 1.创建模型
         * 2.操作数据库
         */
        // 在这里返回的就是Promise对象
        return FilmModel.create({
            // 将input进行分开进行输入
            ...input
        })
        // .then(res=>{
        //     console.log(res)
        // })
    },
    updateFilm({id,input}){
        // id是需要修改的key,input是所需要修改的内容
        // console.log('...input',...input);
       return FilmModel.updateOne({_id:id},{...input})
       .then(res=>FilmModel.find({_id:id}))// 这里find返回一个数组
       .then(res=>res[0]);
    },
    deleteFilm({id}){
        return FilmModel.deleteOne({_id:id}).then(res=>1);
    }
}
var app = express();

app.use('/graphql',graphqlHttp({
    schema:Scchema,
    rootValue:root,
    // 开启调试器
    graphiql:true
}))
// 配置静态资源目录
app.use(express.static('public'))
app.listen(3000);