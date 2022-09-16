import React,{Component} from 'react'
import './css/01-index.css'
export default class App extends Component{
    a = 100;
    // 状态改变 重新渲染
    state = {
        list:[{
                    id:1,
                    text:"1111",
                    isChecked:false
                },{
                    id:2,
                    text:"2222",
                    isChecked:false
                },{
                    id:3,
                    text:"3333",
                    isChecked:false
                },{
                    id:4,
                    text:"4444",
                    isChecked:false
                },],
        mytext:'',
    }
    // myref = React.createRef();
    render(){
        return(
            <div>
                 {/* <input ref="mytext"/>  直接使用ref会被弃用*/}
                 {/* <input ref={this.myref}/> */}
                 <input value = {this.state.mytext} 
                        onChange={(evt)=>{
                            this.setState({
                                mytext:evt.target.value,
                            })
                 }}/>
                 {/* 点击事件加一个处理函数 */}
                 <button 
                 onClick={

                    // console.log("click1",this.refs.mytext)//this.refs.mytext 绑定到标签身上得到，DOM自身

                    this.handleClick}
                >add</button>
                {/* 不要主动用()去执行函数 */}
                {/* 这里是由点击事件系统来调用，故点击函数的this是点击事件系统，而非App
                    通过bind改变函数内的this
                 */}
                 <ul>
                    {
                        this.state.list.map((item,index)=>
                        <li key={item.id}>
                            <input type='checkbox' checked = {item.isChecked} onChange={()=>{
                                this.handleChecked(index)
                            }}/>
                            {/* {item.isChecked?'删除':"不删除"} */}
                            {/* 富文本展示 */}
                            <span dangerouslySetInnerHTML={
                                {
                                    __html:item.text
                                }
                            } style={{textDecoration: item.isChecked?"line-through":"" }}></span>
                            {/* <button onClick={this.handleDelClick.bind(this,index)}>del</button>*/}
                            <button onClick={()=>{this.handleDelClick(index)}}>del</button>
                            {/* <button onClick={this.handleDelClick1(index)}>del</button> */}
                        </li>)
                    }
                 </ul>
                
                 {/* {this.state.list.length === 0?<div>暂无待办事项</div>:null} */}
                 {/* 与的作用前面为假才会执行后面的 */}
                 {/* {this.state.list.length === 0 && <div>暂无待办事项</div>} */}
                 {/* 从01-index.css导入hidden类型 */}
                 <div className={this.state.list.length === 0?'':'hidden'}>暂无待办事项</div>
            </div> 
        )
    }
    // 箭头函数中this是当前对象外上下文环境中的this指向，添加的点击函数
    handleClick=(evt)=>{
        let newlist = [...this.state.list];
        let length = newlist.length +1;
        newlist.push({
            id:length,
            text:this.state.mytext})
        this.setState({
            list:newlist,
        })

        // 清空输入框
        this.setState({
            list:newlist,
            mytext:''
        })

        // this.myref.current.value = '';
    }

    handleDelClick(index){
        let newlist = this.state.list.concat();
        newlist.splice(index,1);
        this.setState({
            list:newlist,
        })
    }
    // 传多个参数需要这样进行
    handleDelClick1=(evt,index)=>()=>{
        let newlist = this.state.list.concat();
        newlist.splice(index,1);
        this.setState({
            list:newlist,
        })
    }
    // 划线点击函数
    handleChecked = (index)=>{
        let newlist =[...this.state.list];
        newlist[index].isChecked = !newlist[index].isChecked;
        this.setState({
            list :newlist
        })
    }
}

/**  React并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式(绑定到根节点上,然后冒泡进行查看)*/
