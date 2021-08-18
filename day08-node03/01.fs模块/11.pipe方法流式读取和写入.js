const fs = require("fs");
const path = require("path");

const filePath1 = path.resolve(__dirname, "./test.mp4");
const filePath2 = path.resolve(__dirname, "./copy.mp4")


//创建一个可读流
const rs = fs.createReadStream(filePath1);
//创建一个可写流
const ws = fs.createWriteStream(filePath2);


//pipe方法：管道，在可读流和可写流建立一个管道，直接简单读取和写入
rs.pipe(ws);


//给ws做一个结束监听
ws.on("close", () => {
    console.log("可写流写入完毕");
})