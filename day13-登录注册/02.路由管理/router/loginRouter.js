const express = require("express");

const router = new express.Router();

//引入userModel集合
const userModel = require("../model/userModel")

router.post("/login", async (req, res) => {
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

//把router暴露出去
module.exports = router;