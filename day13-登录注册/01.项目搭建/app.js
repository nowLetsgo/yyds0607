const express = require("express");
const app = express();

//连接数据库
require("./db");
//引入userModel集合
const userModel = require("./model/userModel")

const path = require("path");

//官方的静态资源中间件
//暴露public静态路径，则可以直接访问这个public内的静态资源
//第一个参数代表访问当前静态资源的路径
app.use("/public/", express.static(path.resolve(__dirname, "./public")))
app.use("", express.static(path.resolve(__dirname, "./views")))

//解决post请求的报文体body的数据 中间件
app.use(express.urlencoded({ //解决post发送的报文体格式是表单格式
    extended: false
}))
app.use(express.json()); //解决post发送的报文体格式是json格式

//书写一个正则处理的中间件
app.use((req, res, next) => {
    //先拿到用户的输入内容
    const {
        username,
        password
    } = req.body;
    console.log(username, password);

    //书写用户名和密码的正则
    const userReg = /^[a-zA-Z]{1}[0-9a-zA-Z_]{5,9}$/g;
    const passReg = /^[0-9]{3,6}$/g;

    if (!userReg.test(username) || !passReg.test(password)) {
        //处理不符合正则的
        return res.send({
            code: 20000,
            msg: "账号名和密码格式错误"
        })
    }

    //如果正则校验成功，则直接进入下一步操作
    next();

})

//注册接口
app.post("/register", async (req, res) => {

    //查看用户发送的信息
    console.log("注册时用户发送的数据", req.body);

    //获取到用户发送信息的各个字段
    const {
        username,
        password
    } = req.body;

    //判断当前的用户名是否被注册，去数据库进行查询
    //数据库的查询是一个异步的 返回promise对象
    const isHasUser = await userModel.findOne({
        username
    })

    //查询不到则为null 如果查询到则为查询的到json对象
    console.log(isHasUser);

    //判断如果查询到了 则应该响应一个信息 用户名被注册
    if (isHasUser) {
        return res.send({
            code: 10001,
            msg: "用户名已经被注册"
        })
    }
    //如果查询不到，则在数据库添加信息
    //数据库的操作是异步的，所以还要进行异步处理
    const registerData = await userModel.create({
        username,
        password
    })

    console.log(registerData)

    res.send({
        code: 10000,
        msg: "注册成功"
    })
})

// 登录接口
app.post("/login", async (req, res) => {

    console.log("登录的数据", req.body);
    //拿到用户的登录信息
    const {
        username,
        password
    } = req.body;

    //判断用户名是否存在
    const isHasUser = await userModel.findOne({
        username
    })
    console.log(isHasUser)

    //当用户名不存在的时候 则直接响应信息
    if (!isHasUser) {
        return res.send({
            code: 10001,
            msg: "用户名不存在"
        })
    }

    //如果用户名存在，则判断密码是否正确
    if (isHasUser.password !== password) {
        return res.send({
            code: 10002,
            msg: "密码错误"
        })
    }

    //当代码运行到这个位置，则表示登录成功
    res.send({
        code: 10000,
        msg: "登录成功"
    })
})

app.listen("3005", err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功 请访问 http://127.0.0.1:3005");
})