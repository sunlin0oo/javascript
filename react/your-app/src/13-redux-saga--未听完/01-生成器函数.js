function *test(){
    console.log('1111',);
    // yield '1111-输出';
    const input1 =  yield '1111-输出';

    console.log('2222',input1);
    // yield '2222-输出';
    const input2 = yield '2222-输出';

    console.log('3333',input2);
    // yield '3333-输出';
    const input3 = yield '3333-输出';
    console.log(input3)
}
// yield搭配next  每伴随一次next就会推进一次
var sunlinTest = test();
// res会传输回一个对象包含两个值==>{value(绑定在yield上的值):xxxx;done(表示是否为最后阶段);}
const res1 = sunlinTest.next();//第一次只是开始执行 遇到 yield就停止了 这里只执行到===>console.log('1111');
console.log(res1);
const res2 = sunlinTest.next('aaaa');//这里的aaaa 会传输到input1
console.log(res2);
const res3 = sunlinTest.next('bbbb');//这里的bbbb 会传输到input2
console.log(res3);
const res4 = sunlinTest.next('cccc');//这里的cccc 会传输到input3
console.log(res4);
sunlinTest.next();

// async function A(){
//     // 依次请求==>将异步变成同步进行
//     const res1 = await fetch();
//     const res2 = await fetch();
//     const res3 = await fetch();

//     console.log(res3)
// }

function *test1(){
    setTimeout(()=>{
        console.log('11111111-success')
        // 将next放到异步函数中
        sunlintest1.next();
    },1000);
    yield;
    setTimeout(()=>{
        console.log('2222222-success')
        sunlintest1.next();
    },1000);
    yield;
    setTimeout(()=>{
        console.log('3333333-success')
        sunlintest1.next();
    },1000);
    yield;
}

const sunlintest1 = test1();

sunlintest1.next();