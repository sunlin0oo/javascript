function getData1(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('data1')
        },1000)
    })
}

function getData2(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('data2')
        },1000)
    })
}

function getData3(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('data3')
        },1000)
    })
}
// 原理:这里传来的参数是promise==>类似于ansy 和 await
function *gen(){
    const f1 = yield getData1();// yield 出来时Promise对象
    console.log('f1',f1);
    const f2 = yield getData2(f1);
    console.log('f2',f2);
    const f3 = yield getData3(f2);
    console.log('f3',f3);

    console.log('f3',f3)
}
// 自执行函数
function run(fn){
    // g 是生成器对象
    const g = fn();
    
    // 可以获取到data值
    function next(data){
        const result = g.next(data);
        // 如果是最后一步，则返回result.value
        if(result.done){
            return  result.value;
        }

        result.value.then(res=>{
            next(res);
        })
    }

    next();
}

run(gen);