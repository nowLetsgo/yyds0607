const express = require("express");
const path = require("path")
const app = express();



app.get("/login", (req, res) => {
    console.log(req.query);
    //允许某一个地址进行跨域(设置响应头的Access-Control-Allow-Origin属性值为跨域的地址)
    res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500")

    //延迟5s返回响应
    setTimeout(() => {
        res.send({
            code: 10001,
            msg: "密码错误"
        })
    }, 5000)
})



app.listen("3004", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功 可以访问 http://127.0.0.1:3004");
})