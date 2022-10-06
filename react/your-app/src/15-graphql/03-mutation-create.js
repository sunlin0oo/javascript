import React, { Component } from 'react';
// 为了方便使用 graphql 则需要安装这几个模块
// npm i react-apollo apollo-boost graphql graphql-tag
import {ApolloProvider, Mutation} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
// 配置请求地址
const client = new ApolloClient({
    uri:'/graphql'
})
class App extends Component {
    render() {
        return (
            // 通过ApolloProvider 提供整个客服端的配置==>client==>加上跨域
            <ApolloProvider client={client}>
                <div>
                    {/* 加载一个创造组件 */}
                    <SunlinCreate></SunlinCreate>
                </div> 
            </ApolloProvider>
            
        );
    }
}

export default App;

class SunlinCreate extends Component{
    createFilm = gql `
    mutation createFilm($input:FilmInput){
        createFilm(input:$input){
            id,name,price
        }
    }
    `
    state = {
        id:"633d41c33764bd553c6493b6"
    }
    render(){
        return(
            <div>
                <Mutation mutation={this.createFilm}>
                    {/* 回调函数中保证返回值==>对应的变量放到上面的gql查询语句中 */}
                    {
                        // 这里的回调方法是后端的方法名称;后端的查询数据会在回调函数第二个参数中给出
                        (createFilm,{data})=>{
                            console.log('data',data)
                            return <div>
                                <button onClick={()=>{
                                    createFilm({
                                        variables:{
                                            input:{
                                                name:"777",
                                                poster:"http://77777",
                                                price:77,
                                            }
                                        }
                                    })
                                }}>add</button>
                            </div>
                        }
                    }
                </Mutation>
            </div>
        )
    }
}