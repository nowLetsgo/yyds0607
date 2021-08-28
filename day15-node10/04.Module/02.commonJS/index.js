/* 
    浏览器不支持commonJS规范，所以需要使用browserify来转换
    首先全局安装browserify工具  npm i -g browserify
    使用browserify把当前的入口文件编译成浏览器可识别的语法
        browserify index.js -o build.js


*/
const add = require("./add");
const mins = require("./mins")
console.log("入口文件");
console.log("add的使用", add(1, 2));
console.log("mins的使用", mins(3, 3))