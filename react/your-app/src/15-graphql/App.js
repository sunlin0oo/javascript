import React, { Component } from 'react';
// 为了方便使用 graphql 则需要安装这几个模块
// npm i react-apollo apollo-boost graphql graphql-tag
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import Add from './components/Add';
import SunlinQuery from './components/Query';
// 配置请求地址
const client = new ApolloClient({
    uri:'/graphql'
})
class App extends Component {
    render() {
        return (
            // 通过ApolloProvider 提供整个客服端的配置==>client==>加上跨域
            <ApolloProvider client={client}>
                <Add></Add>
                <SunlinQuery></SunlinQuery>
            </ApolloProvider>
        );
    }
}

export default App;