const express = require("express");
const path = require("path");

//获取express的app
const app = express();

//当访问根目录时 响应一个index.html给客户端
app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./index.html");
    //响应一个文件出去
    res.sendFile(filePath)
})

//书写一个登录的接口
app.get("/login", (req, res) => {
    console.log("登录请求");
    res.send("登录成功")
})

app.listen(3003, err => {
    if (err) {
        console.log("服务器启动错误", err);
        return;
    }

    console.log("服务器启动成功，请访问http://127.0.0.1:3003");
})