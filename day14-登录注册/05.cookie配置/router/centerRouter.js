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
    console.log(req.cookies)
    try {
        //因为cookie中的userID保存的是用户的id 所以可以查询一下数据中是否有当前id
        const result = await userModel.findOne({
            _id: req.cookies.userID
        })

        console.log(result)
        if (result) {
            res.send({
                code: 10000,
                msg: result.username //返回用户名
            })
        } else {
            //当cookie中的userID查询不到，则清除客户端的cookie
            res.clearCookie("userID");
            res.send({
                code: 10001,
                msg: "没有权限"
            })
        }
    } catch (e) {
        //当cookie中的userID被篡改格式不对，则清除客户端的cookie
        res.clearCookie("userID");
        //当userID的格式不对，数据库会报错，则我们要捕获错误
        res.send({
            code: 10001,
            msg: "没有权限"
        })
    }


})

module.exports = router;