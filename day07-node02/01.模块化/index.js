/* 
    模块的标识：
        模块标识就是传递给require() 方法的参数， 采用小驼峰命名， 或者以.、..开头的相对路径或绝对路径。 它可以不加文件后缀.js。 对于下载的模块或系统模块模块的标识就是文件的名字
    模块的分类：
        - 核心模块：在Node源码编译就完成了，直接被加进内存中，如（http fs path），直接在require中书写模块名就可以
        - 第三方模块：它会从文件的node_modules逐层往上找，直到根目录的node_modules。
        - 自定义模块：以“./” “../”路径形式的文件模块，将其转化为真实路径，根据真实路径 索引去查找，后缀名可以省略，会按照js、json、node依次补充尝试

    - 引入模块
        - 使用require方法引入

*/


//引入自定义模块模块
// const add = require("./add");
// console.log("add", add);
// console.log(module);

//引入第三方模块(需要下载的)
// const jquery = require("jquery");

//引入内置模块
// const fs = require("fs")


/* const add = require("./add");
console.log("add", add); */

const {
    add,
    mins
} = require("./add");

console.log("add", add);
console.log("mins", mins);