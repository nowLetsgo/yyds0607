/* 
    node模块的外层函数：
        - 一个node的模块外层包裹着一层函数
        - 这个外层函数在当前模块被node执行后调用
        - 这个函数有5个形参
            - exports:代表模块的暴露的对象
            - require:负责引入模块方法
            - module:代表当前的模块信息
            - __filename:代表当前模块的绝对路径
            - __dirname:代表当前模块所在的文件夹的绝对路径

*/
console.log(arguments);
//arguments.callee:查看当前arguments所在的函数
console.log(arguments.callee);
//把当前函数转为字符串展示
console.log(arguments.callee.toString());

console.log("exports", exports);
console.log("require", require);
console.log("module", module);
console.log("__dirname", __dirname);
console.log("__filename", __filename);