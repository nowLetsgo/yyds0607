const EventEmitter = require("events");

//一般书写实例化的EventEmitter的时候，会先定义一个子类 继承EventEmitter 然后实例化子类
class myEmitter extends EventEmitter {};
//实例化子类
const event1 = new myEmitter();

//使用on可以对EventEmitter的实例绑定事件
event1.on("hello", () => {
    console.log("hello事件被触发");
})

//once绑定的事件是一次性事件
event1.once("data", () => {
    console.log("data事件被触发");
})

//可以使用emit方法来触发事件
event1.emit("hello");
event1.emit("hello");
event1.emit("data");
event1.emit("data");