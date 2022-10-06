import React, { Component } from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo';

class SunlinQuery extends Component {
    query = gql `
    query getFilmInfo($id:String!){
        getFilmInfo(id:$id){
            id,name,price,poster
        }
    }
    `
    state = {
        id:""
    }
    render(){
        return(
            <div>
            <input type='text' onChange={(evt)=>{
                // console.log('evt',evt)
                this.setState({
                    id:evt.target.value
                })
            }}></input>
            {/*Query是一个组件 */}
            <Query query={this.query} variables={{id:this.state.id}}>
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
            </Query></div>
            
        )
    }
}

export default SunlinQuery;