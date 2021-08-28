(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function add(a, b) {
    return a + b;
}

module.exports = add;
},{}],2:[function(require,module,exports){
/* 
    浏览器不支持commonJS规范，所以需要使用browserify来转换
    首先全局安装browserify工具  npm i -g browserify
    使用browserify把当前的入口文件编译成浏览器可识别的语法


*/
const add = require("./add");
const mins = require("./mins")
console.log("入口文件");
console.log("add的使用", add(1, 2));
console.log("mins的使用", mins(3, 3))
},{"./add":1,"./mins":3}],3:[function(require,module,exports){
function mins(a, b) {
    return a - b;
}

module.exports = mins;
},{}]},{},[2]);
