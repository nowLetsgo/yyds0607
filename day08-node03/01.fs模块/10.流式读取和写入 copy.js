const fs = require("fs");
const path = require("path");

const filePath1 = path.resolve(__dirname, "./test.mp4");
const filePath2 = path.resolve(__dirname, "./copy.mp4")


//创建一个可读流
const rs = fs.createReadStream(filePath1);
//创建一个可写流
const ws = fs.createWriteStream(filePath2);

//可读流依次可以读取64kb的内容
//使用可读流的data事件，可以消费可读流的内容
rs.on("data", (chunk) => {
    //参数chunk就是每次读取后事件触发得到的读取内容
    // console.log(chunk);

    //chunk就是每次读取的可读流数据，我们可以把它依次写入可写流
    ws.write(chunk);

})

//可读流读取完毕之后 会触发end事件
rs.on("end", () => {
    console.log("可读流读取完毕");
    //关闭可写流
    ws.end();
})

//给ws做一个结束监听
ws.on("close", () => {
    console.log("可写流写入完毕");
})