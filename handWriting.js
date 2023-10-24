// 手写
// 一、JavaScript基础

// Object.create()可以帮我们生成一个对象，通过传参，可以将生成的对象的原型指向第一个参数
function create(obj) {
    // 创建一个空函数，作为将要返回的对象实例
    function F() { }
    // 将
    F.prototype = obj
    return new F()
}

// ex:
const a = { name: '1' };
const b = create(a);
console.log(a.name); // 1

// instanceof 
function myInstanceof(left, right) {
    // 这里先用typeof来判断基础数据类型，如果是，直接返回false
    if (typeof left !== 'object' || left === null) return false;
    let proto = Object.getPrototypeOf(left), // 获取对象的原型
        prototype = right.prototype; // 获取构造函数的prototype对象

    // 判断构造函数的 prototype 对象是否在对象的原型链上
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        proto = Object.getPrototypeof(proto);
    }
}

// 手写 new 操作符
function objectFactory() {
    let newObject = null;
    /**
     * 为了拿到第一个参数，就是传入的构造函数
     * 通过使用.call()方法，我们将shift()方法应用于arguments对象，
     * 实际上相当于将arguments对象作为shift()方法的上下文，并在该上下文中调用该方法
     */
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;
    // 判断参数是否是一个函数
    if (typeof constructor !== 'function') {
        console.log('type error');
        return
    }

    // 新建一个空对象，对象的原型为构造函数的 prototype 对象
    newObject = Object.create(constructor.prototype);
    // 将this指向新对象，并且执行函数
    result = constructor.apply(newObject, arguments);
    // 判断返回对象
    let flag = result && (typeof result === 'object' || typeof result === 'function');
    // 判断返回结果
    return flag ? result : newObject;
}

// 使用方法
objectFactory('构造函数', '初始化参数');

function Animal(name) {
    this.name = name;
    console.log("create animal");
}

let animal = objectFactory(Animal, '111');  //create animal

// 手写 Promise
// 1.定义常量
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
// 2.书写Promise函数
function MyPromise(fn) {
    // 2.1 保持初始化状态
    let self = this;

    // 2.2 初始化状态
    this.state = PENDING;

    // 2.3 用于保存 resolve 或者 rejected 传入的值
    this.value = null;

    // 2.4 用于保存 resolve 的回调函数
    this.resolvedCallbacks = [];

    // 2.5 用于保存 reject 的回调函数
    this.rejectedCallbacks = [];

    // 2.6 状态转变为 resolved 方法
    function resolve(value) {
        // 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再度进行改变
        if (value instanceof MyPromise) {
            return value.then(resolve, reject);
        }

        // 保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
            // 只有状态为 pending 时才能转变
            if (self.state === PENDING) {
                // 修改状态
                self.state = RESOLVED;

                // 设置传入的值
                self.value = value;

                // 执行回调函数
                self.resolvedCallbacks.forEach(callback => {
                    callback(value);
                })
            }
        }, 0)
    }

    // 2.7 状态转为 rejected 方法
    function reject(value) {
        // 保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
            // 只有状态为 pending 时才能转变
            if (self.state === PENDING) {
                // 修改状态
                self.state = REJECTED;

                // 设置传入的值
                self.value = value;

                // 执行回调函数
                self.rejectedCallbacks.forEach(callback => {
                    callback(value);
                })
            }
        }, 0)
    }

    // 2.8 将两个方法传入函数执行
    try {
        fn(resolve, reject);
    } catch (e) {
        // 遇到错误时，捕获错误，执行 reject 函数
        reject(e);
    }
}
// 3.书写then.()
MyPromise.prototype.then = function (onResolved, onRejected) {
    // 首先判断两个参数是否为函数类型，因为这两个参数都是可选参数
    onResolved =
        typeof onResolved === 'function'
            ? onResolved
            : function (value) {
                return value;
            };

    onRejected =
        typeof onRejected === 'function'
            ? onRejected
            : function (error) {
                throw error;
            };

    // 如果是等待状态，则将函数加入对应列表中
    if (this.state === PENDING) {
        this.resolvedCallbacks.push(onResolved);
        this.rejectedCallbacks.push(onRejected);
    }

    // 如果状态已经凝固，则直接执行对应状态的函数
    if (this.state === RESOLVED) {
        onResolved(this.value);
    }

    if (this.state === REJECTED) {
        onRejected(this.value);
    }
}

// 手写 Promise.then ==> 没有写过1
then(onFulfilled, onReject) {
    // 保存前一个 promise 的 this
    const self = this;
    return new MyPromise((resolve, reject) => {
        // 封装前一个promise成功时执行的函数
        let fulfilled = () => {
            try {
                const result = onFulfilled(self.value); // 承前
                return result instanceof MyPromise ? result.then(resolve, reject) : resolve(result); // 启后 
            } catch (err) {
                reject(err)
            }
        }

        // 封装前一个promise失败时执行的函数
        let rejected = () => {
            try {
                const result = onReject(self.reason);
                return result instanceof MyPromise ? result.then(resolve, reject) : reject(result);
            } catch (err) {
                reject(err)
            }
        }

        switch (self.status) {
            case PENDING:
                self.onFulfilledCallbacks.push(fulfilled);
                self.onRejectedCallbacks.push(rejected);
                break;

            case FULFILLED:
                fulfilled();
                break;

            case REJECT:
                rejected();
                break;
        }
    })
}

// 手写 Promise.all
function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            throw new TypeError(`argument must be a array`)
        }
        // already resolved promise
        let resolvedCounter = 0;
        let promiseNum = promises.length;
        let resolvedResult = [];

        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i]).then(value => {
                resolvedCounter++;
                resolvedResult[i] = value;

                if (resolvedCounter == promiseNum) {
                    return resolve(resolvedResult)
                }
            }, error => {
                return reject(error)
            })
        }
    })
}

// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})

let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})

let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})

promiseAll([p3, p1, p2]).then(res => {
    console.log(res);
})

// 手写 Promise.race
Promise.race = function (args) {
    return new Promise((resolve, reject) => {
        for (let i = 0, len = args.length; i < len; i++) {
            args[i].then(resolve, reject)
        }
    })
}

// 手写防抖函数
function debounce(fn, wait) {
    let timer = null;

    return function () {
        let context = this,
            args = arguments;

        // 如果此时存在定时器的花，则取消之前的定时器重新计时
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        // 设置定时器，使事件间隔指定时间后执行
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }
}

// 手写节流函数
function throttle(fn, delay) {
    let curTime = Date.now();

    return function () {
        let context = this,
            args = arguments,
            nowTime = Date.now();
        // 如果两次时间间隔超过了置顶时间，则执行函数
        if (nowTime - curTime >= delay) {
            curTime = Date.now();
            return fn.apply(context, args);
        }
    }


}

// 手写类型判断函数
function getType(value) {
    // 判断数据时 null 的情况
    if (value === null) {
        return value + '';
    }

    // 判断数据是饮用类型的情况
    if (typeof value === 'object') {
        // [xxx 类型];
        const valueClass = Object.prototype.toString.call(value);
        const type = valueClass.split(" ")[1].split("");
        type.pop();
        return type.join("").toLowerCase();
    } else {
        // 判断数据时基本数据类型的情况和函数的情况
        return typeof value;
    }
}

// 手写call函数
Function.prototype.myCall = function (context) {
    // 判断调用对象 -- this 指的调用的函数
    if (typeof this !== 'function') {
        console.error('type error');
    }

    // 获取参数
    let args = [...arguments].slice(1),
        result = null;

    // 判断 context 是否传入，如果未传入则设置为 window
    context = context || window;

    // 将调用函数设置为对象的方法
    context.fn = this;

    // 调用函数
    result = context.fn(...args);

    // 将属性删除
    delete context.fn;
    return result;
}


// 手写apply函数
Function.prototype.myApply = function (context) {
    // 判断对象是否为函数
    if (typeof this !== 'function') {
        throw new TypeError('ERROR');
    }

    let result = null;
    // 判断 context 是否存在，如果未传入则为 window
    context = context || window;

    // 将函数设置为对象的方法
    context.fn = this;

    // 调用方法
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn()
    }

    // 将属性删除
    delete context.fn;
    return result;
}

// 手写 bind 函数
Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== 'function') {
        throw new TypeError("ERROR");
    }

    // 获取参数
    let args = [...arguments].slice(1),
        fn = this;

    return function Fn() {
        // 根据调用方式，传入不同绑定值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )
    }
}

// 柯里化函数实现
function curry(fn, args) {
    // 获取函数需要的参数长度
    let length = fn.length;

    args = args | [];

    return function () {
        let subArgs = args.slice(0);

        // 拼接得到现有的所有参数
        for (let i = 0; i < arguments.length; i++) {
            subArgs.push(arguments[i]);
        }

        // 判断参数的长度是否已经满足函数所需求的长度
        if (subArgs.length >= length) {
            // 如果满足，执行函数
            return fn.apply(this, subArgs);
        } else {
            // 如果不满足，递归返回柯里化的函数，等待参数的传入
            return curry.call(this, fn, subArgs);
        }
    }
}

// es6 实现
function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

// 实现AJAX请求
const SERVER_URL = '/server';

let xhr = new XMLHttpRequest();

// 创建 Http 请求
xhr.open("GET", SERVER_URL, true);

// 设置状态监听函数
xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    // 当请求成功时
    if (this.status === 200) {
        FileSystemHandle(this.response);
    } else {
        console.log(this.statusText);
    }
};

// 设置请求失败时的监听函数
xhr.onerror = function () {
    console.error(this.statusText);
};

// 设置请求头信息
xhr.responseType = 'json';
xhr.setRequestHeader("Accept", "application/json");
// 发送 Http 请求
xhr.send(null);

// 使用 Promise 封装 AJAX 请求
function getJSON(url) {
    // 创建一个 promise 对象
    let promise = new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        // 新建一个 http 请求
        xhr.open("GET", url, true);
        // 设置状态的监听函数
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            // 当请求失败时，改变promise 的状态
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };

        // 设置错误监听函数
        xhr.onerror = function () {
            reject(new Error(this.statusText));
        };

        // 设置相应的数据类型
        xhr.responseType = "json";

        // 设置请求头信息
        xhr.setRequestHeader("Accept", "application/json");

        // 发送 http 请求
        xhr.send(null);
    })
    return promise;
}

// 手写浅拷贝
function shallowCopy(object) {
    // 只拷贝对象
    if (!object || typeof object !== "object") return;

    // 根据 object 的类型判断时新建一个数组还是对象
    let newObject = Array.isArray(object) ? [] : {};

    // 遍历 object，并且判断是 object 的属性才拷贝
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = object[key];
        }
    }

    return newObject;
}


// 深拷贝实现
function deepCopy(object) {
    if (!object || typeof object !== "object") return;

    let newObject = Array.isArray(object) ? [] : {};

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] =
                typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
        }
    }
}

// 使用SetTimeOut实现SetInterval
function mySetInterval(fn, delay){
    let timer = null;
    function interval(){
        fn();
        timer = setTimeout(interval, delay);
    }
    interval();
    return {
        cancel:()=>{
            clearTimeout(timer);
        }
    }
}
// 使用SetInterval实现SetTimeOut
function mySetTimeOut(fn, delay){
    let timer = null;
    function timeOut(){
        fn();
        clearInterval(timer);
    }
    timer = setInterval(timeOut(timer),delay);
}