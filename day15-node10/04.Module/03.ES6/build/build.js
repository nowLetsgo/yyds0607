(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

//默认暴露
function add(a, b) {
  return a + b;
} //如果一个模块中只有一个功能需要暴露，则使用默认暴露
//默认暴露只能暴露一个功能


var _default = add;
exports["default"] = _default;
},{}],2:[function(require,module,exports){
"use strict";

var _add = _interopRequireDefault(require("./add"));

var _mins = require("./mins");

var _student = require("./student");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//1.引入默认暴露的模块
//2.引入分别暴露的模块(必须用解构赋值的方式去接受)
//3.引入统一暴露的模块(如果重名，可以使用as来起一个别名)
// 4. 不想解构赋值一个个拿到暴露的功能， 想要放在一个对象中(引入全部并起一个别名)
// import * as person from './person'
console.log("add方法调用", (0, _add["default"])(1, 2));
console.log("name", _mins.name);
console.log("myName", _student.name);
/* 
    ES6模块化编译：
        - 使用babel工具把ES6模块化编译为commonJS模块化
        - 使用browserify再把commonJS模块化编译成浏览器识别语法

        - babel的使用：
            - npm install --save-dev @babel/core @babel/cli @babel/preset-env
                - @babel/core 核心包
                - @babel/cli 脚本命令包
                - @babel/preset-env 预设的包
            - 在package.json文件中配置babel
                "babel": {
                    "presets": [
                    "@babel/env"
                    ]
                }
            - 可以使用命令 把一个js文件夹内的ES6模块化规范代码，编译为commonJS模块化文件，然后放在一个新的文件夹中
                `npx babel 目标文件夹 -d 输出文件夹`（npx:当命令没有安装到全局的时候，启动本地命令）

        - 当babel把ES6模块转转为commonJS模块化之后，可以使用browserify把CommonJS模块化编译为浏览器识别的语法 供浏览器使用


*/
},{"./add":1,"./mins":3,"./student":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mins = mins;
exports.msg = exports.name = void 0;

/* 
    分别暴露：
        当一个模块中有多个功能需要暴露的时候，可以在声明前书写export暴露
        分别暴露 需要把export书写在完整的声明语句之前

*/
var name = 2;
exports.name = name;
var msg = [1, 2, 3, 4];
exports.msg = msg;

function mins(a, b) {
  return a - b;
}
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.say = say;
exports.age = exports.sex = exports.name = void 0;

/* 
    统一暴露：
        直接export后放对象，对象中是我们要暴露的内容
*/
var name = "老王";
exports.name = name;
var sex = "男";
exports.sex = sex;
var age = 18;
exports.age = age;

function say() {
  console.log("hello");
}
},{}]},{},[2]);
