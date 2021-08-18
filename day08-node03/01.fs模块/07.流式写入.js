const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "./01.txt");

//创建一个可写流
const ws = fs.createWriteStream(filePath);

//给可写流绑定事件
ws.on("open", () => {
    console.log("可写流打开");
})
//给可写流绑定关闭事件
ws.on("close", () => {
    console.log("可写流关闭");
})

//向可写流中写入数据
ws.write("锄禾日当午")
ws.write("汗滴禾下土")
ws.write("谁知盘中餐")
ws.write("粒粒皆辛苦")

//关闭可写流,关闭开头
ws.end();