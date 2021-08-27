const express = require("express");

const router = new express.Router();

const regRouterFn = (req, res, next) => {
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

}

router.use("/login", regRouterFn)
router.use("/register", regRouterFn)

module.exports = router;