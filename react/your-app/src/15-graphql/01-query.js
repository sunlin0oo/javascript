import React, { Component } from 'react';
// 为了方便使用 graphql 则需要安装这几个模块
// npm i react-apollo apollo-boost graphql graphql-tag
import {ApolloProvider,Query} from 'react-apollo';
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
                    {/* 加载一个查询组件 */}
                    <SunlinQuery></SunlinQuery>
                </div> 
            </ApolloProvider>
            
        );
    }
}

export default App;

class SunlinQuery extends Component{
    query = gql `
    query{
        getFilmInfo{
            id,name,price,poster
    }
    }
    `
    render(){
        return(
            //  Query是一个组件
            <Query query={this.query}>
                {
                    ({loading, data})=>{
                        console.log(loading);// 返回true表示等待数据中,反之数据不等待已经返回
                        return loading?<div>loading.....</div>:
                        <div>
                            {
                                // 从Network里面的XHR中进行查找
                                data.getFilmInfo.map(item=><li key={item.id}>{item.name}</li>)
                            }
                        </div>
                    }
                }
            </Query>
        )
    }
}