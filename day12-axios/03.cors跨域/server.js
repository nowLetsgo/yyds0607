const express = require("express");
const path = require("path")
const app = express();



app.get("/data", (req, res) => {
    console.log(req.query);
    //白名单
    const whiteName = ["http://127.0.0.1:5400", "http://127.0.0.1:5500", "http://127.0.0.1:5600", "http://127.0.0.1:5700"]
    //获取当前请求的的地址，判断是否在白名单中
    console.log(req.headers.origin);
    if (whiteName.includes(req.headers.origin)) {
        //如果当前的请求地址在白名单中，则处理跨域
        res.set("Access-Control-Allow-Origin", req.headers.origin)
    }
    //允许某一个地址进行跨域(设置响应头的Access-Control-Allow-Origin属性值为跨域的地址)
    // res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5400")
    res.send({
        type: "查询成功"
    })
})




app.listen("3004", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功 可以访问 http://127.0.0.1:3004");
})