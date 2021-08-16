//微任务，并且一定是放在微任务的第一个
process.nextTick(() => {
    console.log(111);
});

//同步代码
const promise = new Promise(resolve => {
    console.log(222);
    resolve();
});

//宏任务 属于第一个阶段
setTimeout(() => {
    console.log(333);
}, 10);

//微任务 
promise.then(() => {
    console.log(444);
});


//宏任务 在第五个阶段
setImmediate(() => {
    console.log(666);
});