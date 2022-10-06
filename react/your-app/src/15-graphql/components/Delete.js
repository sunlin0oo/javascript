import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag'

class Delete extends Component {
    deleteFilm = gql `
    mutation deleteFilm($id:String!){
        deleteFilm(id:$id)
    }
    `
    state = {
        id:"633d41c33764bd553c6493b6"
    }
    render(){
        return(
            <div>
                <Mutation mutation={this.deleteFilm}>
                    {/* 回调函数中保证返回值==>对应的变量放到上面的gql查询语句中 */}
                    {
                        // 这里的回调方法是后端的方法名称;后端的查询数据会在回调函数第二个参数中给出
                        (deleteFilm,{data})=>{
                            console.log('data',data)
                            return <div>
                                <button onClick={()=>{
                                    deleteFilm({
                                        variables:{
                                            id:this.state.id,
                                        }
                                    })
                                }}>deleteFilm</button>
                            </div>
                        }
                    }
                </Mutation>
            </div>
        )
    }
}

export default Delete;