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