/* 
    微任务和宏任务：
        - 异步代码的执行也分为两类，一类是微任务，一类是宏任务
        - 微任务是优先于宏任务执行的，当同步代码执行完毕之后，会先去微任务队列执行队列中的回调函数，然后再去执行宏任务的回调队列
        - 当执行宏任务的回调队列的时候，每次进入下一个阶段的时候，会先再去检测并执行微任务中的回调函数，然后再进入下一个阶段
        - 微任务：Promise.then/catch/fanally，process.nextTick，queueMicrotask
        - 宏任务：包括整体代码script，setTimeout，setInterval，io操作等等

*/