import React,{Component} from 'react'

export default class App extends Component{
    a = 100;
    render(){
        return(
            <div>
                 <input />
                 {/* 点击事件加一个处理函数 */}
                 <button onClick={()=>{
                    console.log("click1",this.a)//this与外部一致
                 }}>add</button>

                 <button onMouseMove={()=>{
                    console.log("click2")
                 }}>move</button>

                {/* 不要主动用()去执行函数 */}
                {/* 这里是由点击事件系统来调用，故点击函数的this是点击事件系统，而非App
                    通过bind改变函数内的this
                 */}
                <button onClick={this.handleClick1.bind(this) }>add3</button>
                {/* 推荐，handleClick2 要用箭头函数写*/}
                <button onClick={this.handleClick2 }>add3</button>
                <button onClick={(evt)=>{
                    this.handleClick3(evt);//比较推荐
                }}>add4</button>
            </div> 
        )
    }

    handleClick1(){
        console.log("click3",this.a);//this是undefined,但是可以通过bind指向this(App)
    }
    // 箭头函数中this是当前对象外上下文环境中的this指向
    handleClick2=(evt)=>{
        console.log("click4",this.a,evt)
    }

    handleClick3=(evt)=>{
        console.log("click5",this.a,evt)
    }
}

/**  React并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式(绑定到根节点上,然后冒泡进行查看)*/

// class A{
//     constructor(){
//         this.a = "!1111";
//         this.b = "22222";
//     }
//     //ES7
//     c = 33333;
//     d = ()=>{

//     }

//     aaa(){

//     }

//     bbb(){
        
//     }

//     ccc(){
        
//     }
// }

// console.log(new A());

/**call,apply自执行函数
 * bind,手动加括号执行函数
 */

var obj1 = {
    name:"obj1",
    getName(){
        console.log(this.name);
    }
}

var obj2 = {
    name:"obj2",
    getName(){
        console.log(this.name);
    }
}

obj1.getName.bind(obj2)();