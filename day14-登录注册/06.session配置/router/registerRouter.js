const express = require("express");
//实例化一个路由
const router = new express.Router();

//引入userModel集合
const userModel = require("../model/userModel")

//注册接口挂载在路由上
router.post("/register", async (req, res) => {

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

//把当前的路由暴露出去 用来在app.js引入 并挂载在app上
module.exports = router;