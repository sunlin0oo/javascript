importScripts("t1.js");
console.log("worker.js");
onmessage = function(e){
    console.log(e.data)
}
postMessage('I post a message to main thread')