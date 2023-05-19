
// 与self.onmessage 等价
// self.addEventListener('message', function (e) {
//   console.log(e);
//   var data = e.data;
//   switch (data.args) {
//     case 'start':
//       self.postMessage('WORKER STARTED: ' + data.args);
//       break;
//     case 'stop':
//       self.postMessage('WORKER STOPPED: ' + data.args);
//       self.close(); // Terminates the worker.
//       break;
//     default:
//       self.postMessage('Unknown command: ' + data.args);
//   };
// }, false);

// workerThread1.js
let i = 1

function simpleCount() {
  i++
  // 用来向主线程发送消息
  self.postMessage(i)
  setTimeout(simpleCount, 1000)
}

simpleCount()

self.onmessage = ev => {
  postMessage(ev.data + ' 呵呵~')
}