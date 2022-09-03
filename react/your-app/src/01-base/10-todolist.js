import React,{Component} from 'react'
import './css/01-index.css'
export default class App extends Component{
    a = 100;
    state = {
        list:[{
                    id:1,
                    text:"1111"
                },{
                    id:2,
                    text:"2222"
                },{
                    id:3,
                    text:"3333"
                },{
                    id:4,
                    text:"4444"
                },]
    }
    myref = React.createRef();
    render(){
        return(
            <div>
                 {/* <input ref="mytext"/>  直接使用ref会被弃用*/}
                 <input ref={this.myref}/>
                 {/* 点击事件加一个处理函数 */}
                 <button onClick={
                    // console.log("click1",this.refs.mytext)//this.refs.mytext 绑定到标签身上得到，DOM自身
                    this.handleClick1}>add</button>
                 <ul>
                    {
                        this.state.list.map((item,index)=>
                        <li key={item.id}>
                            {item.text}
                            {/* 父文本展示 */}
                            {/* <span dangerouslySetInnerHTML={{
                                __html:item.text
                            }}></span> */}
                            {/* <button onClick={this.handleDelClick.bind(this,index)}>del</button>*/}
                            {/* <button onClick={()=>{this.handleDelClick(index)}}>del</button> */}
                            <button onClick={this.handleDelClick1(index)}>del</button>
                        </li>)
                    }
                 </ul>
                 {/* {this.state.list.length === 0?<div>暂无待办事项</div>:null} */}
                 {/* 与的作用前面为假才会执行后面的 */}
                 {/* {this.state.list.length === 0 && <div>暂无待办事项</div>} */}
                 {/* 从01-index.css导入hidden类型 */}
                 {/* className === class */}
                 <div className={this.state.list.length === 0?'':'hidden'}>暂无待办事项</div>
            </div>
        )
    }
    // 箭头函数中this是当前对象外上下文环境中的this指向
    // 添加新的list内容
    handleClick1=(evt)=>{
        // 深复制到新的newlist
        let newlist = [...this.state.list];
        let length = newlist.length +1;
        newlist.push({
            id:length,
            text:this.myref.current.value})
        this.setState({
            list:newlist,
        })

        // 清空输入框
        this.myref.current.value = '';
    }
    // 删除list的内容
    handleDelClick(index){
        let newlist = this.state.list.concat();
        newlist.splice(index,1);
        this.setState({
            list:newlist,
        })
    }
    
    handleDelClick1=(evt,index)=>()=>{
        let newlist = this.state.list.concat();
        newlist.splice(index,1);
        this.setState({
            list:newlist,
        })
    }
}

/**  React并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式(绑定到根节点上,然后冒泡进行查看)*/
