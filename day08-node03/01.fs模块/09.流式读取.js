const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "./test.mp4");


//创建一个可读流
const rs = fs.createReadStream(filePath);

//可读流依次可以读取64kb的内容
//使用可读流的data事件，可以消费可读流的内容
rs.on("data", (chunk) => {
    //参数chunk就是每次读取后事件触发得到的读取内容
    console.log(chunk);
})

//可读流读取完毕之后 会触发end事件
rs.on("end", () => {
    console.log("可读流读取完毕");
})