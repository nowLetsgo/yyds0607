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