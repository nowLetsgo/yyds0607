function add(a, b) {
    return a + b;
}
console.log(module);
/* 
    module对象上有一个exports属性指向的是一个对象,这个对象就是暴露出去的对象


*/

//1.想要把add方法暴露出去
// module.exports.add = add;
//以上暴露 想要在其他模块中引入add的方式如下
// const { add } = require("./add")//这样就可以直接拿到add的方法


//2.把add暴露出去
// module.exports = add;
//以上暴露的引入方式
// const add = require("./add");


//3.使用exports暴露
// exports.add = add;
//以上暴露引入方式
// const {add} = require("./add")


//以下暴露是错误的，因为exports是对module.exports对象的一个引用，module.exports对象才是真正的暴露的对象，如果更改了exports的地址不是module.exports的地址，则exports没有任何的暴露功能
// exports = add;
