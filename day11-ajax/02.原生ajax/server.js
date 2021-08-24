const express = require("express");
const path = require("path");

//获取express的app
const app = express();

//处理post请求的报文体接受格式
//需要安装一个body-parser的包
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

//当访问根目录时 响应一个index.html给客户端
app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./index.html");
    //响应一个文件出去
    res.sendFile(filePath)
})

//书写一个登录的GET请求接口
app.get("/login", (req, res) => {
    console.log("登录请求");
    // res.send("登录成功")

    //在服务端中使用req.query得到get请求携带的查询字符串
    console.log("查询字符串", req.query);
    if (req.query.user != "lipeihua" || req.query.pass != '123456') {
        //登录失败
        //res返回响应执行后 并return退出函数 不再继续向下执行
        return res.send({
            code: 0,
            msg: "用户名或密码错误"
        })
    }
    //登录成功
    res.send({
        code: 1,
        msg: "登录成功啊"
    })
})

//书写一个登录的POST请求接口
app.post("/login", (req, res) => {
    //req.body不能直接被获取到，需要使用第三方的包来进行处理
    console.log("post请求报文体", req.body);

    if (req.body.user != "lipeihua" || req.body.pass != '123456') {
        //登录失败
        //res返回响应执行后 并return退出函数 不再继续向下执行
        return res.send({
            code: 0,
            msg: "用户名或密码错误"
        })
    }
    //登录成功
    res.send({
        code: 1,
        msg: "登录成功啊"
    })
})

app.listen(3003, err => {
    if (err) {
        console.log("服务器启动错误", err);
        return;
    }

    console.log("服务器启动成功，请访问http://127.0.0.1:3003");
})