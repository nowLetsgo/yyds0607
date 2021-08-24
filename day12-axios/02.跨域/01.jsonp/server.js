const express = require("express");
const app = express();

app.get("/data", (req, res) => {
    console.log("请求到/login");
    console.log("接受的参数", req.query) //{ user: 'laoli', pass: '123', callback: 'fn' }
    //根据得到的user和pass 可以得到登录结果数据如下
    const result = {
        code: 1,
        msg: "登录成功"
    }

    // 拼接一个字符串
    let resultStr = `${req.query.callback}(${JSON.stringify(result)})`; //'fn({code: 1, msg: "登录成功"})'
    //把这个字符串响应给请求的script标签
    res.set("Content-type", "application/javascript;charset=utf-8")
    res.send(resultStr)
})

app.listen("3004", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功 可以访问 http://127.0.0.1:3004");
})