/* 
    个人中心的权限控制
*/

const express = require("express");
const router = new express.Router();
//引入userModel集合
const userModel = require("../model/userModel")

//处理直接拿到cookie解析为对象 需要cookie-parser中间件
const cookieParser = require("cookie-parser");
router.use(cookieParser());


router.post("/center", async (req, res) => {
    //权限判断
    console.log("userINFO", req.session.user)

    if (req.session.user) {
        res.send({
            code: 10000,
            msg: req.session.user.username //返回用户名
        })
    } else {
        res.send({
            code: 10001,
            msg: "没有权限"
        })
    }


})

module.exports = router;