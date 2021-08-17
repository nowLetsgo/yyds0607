//立即调用
setImmediate(() => {
    console.log("setImmediate");
})

//微任务
queueMicrotask(() => {
    console.log('queueMicrotask');
})

//延迟调用定时器
setTimeout(() => {
    console.log("setTimeout");
}, 0)

//立即执行函数
process.nextTick(() => {
    console.log("nextTick");
})