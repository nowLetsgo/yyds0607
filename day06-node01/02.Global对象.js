/* 
    浏览器端的js构成：
        DOM
        BOM
        ES
    node端js构成：
        DOM（完全没有）
        BOM（只有个别）
        ES

    浏览器端的顶层对象是window扮演者global的角色
    在nodejs端顶层对象是global，没有window对象

    global对象的打印：
        {
            global: [Circular *1],
            clearInterval: [Function: clearInterval],
            clearTimeout: [Function: clearTimeout],
            setInterval: [Function: setInterval],
            setTimeout: [Function: setTimeout] {
                [Symbol(nodejs.util.promisify.custom)]: [Getter]
            },
            queueMicrotask: [Function: queueMicrotask],
            clearImmediate: [Function: clearImmediate],
            setImmediate: [Function: setImmediate] {
                [Symbol(nodejs.util.promisify.custom)]: [Getter]
            }
        }

*/

// console.log(window); //ReferenceError: window is not defined
console.log(global);