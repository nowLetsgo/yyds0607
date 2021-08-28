const express = require("express");
const app = express();

const path = require("path");
const fs = require("fs");

app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./01.html");
    res.sendFile(filePath)
})

/* 
    强制缓存：
        - 强制缓存是向浏览器缓存查找请求结果，并且根据该结果的缓存规则来决定是否使用该缓存结果的过程
        - 简单来说就是强制浏览器使用当前的缓存
        - 首先请求头要携带"Cache-Control"的信息为"max-age=XXX":客户端允许开启强制缓存
        - 响应头需要携带"Cache-Control"的信息为"max-age=XXX"：服务端也允许开启强制缓存

*/
app.get("/img", (req, res) => {
    const filePath = path.resolve(__dirname, "./01.jpg");
    const rs = fs.createReadStream(filePath);

    //设置强制缓存
    res.set("Cache-Control", "max-age=10000")
    rs.pipe(res);
})

app.listen("3000", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功，请访问 http://127.0.0.1:3000");
})