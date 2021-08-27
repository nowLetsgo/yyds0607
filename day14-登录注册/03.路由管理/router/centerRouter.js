/* 
    个人中心的权限控制
*/

const express = require("express");
const router = new express.Router();

router.post("/center", (req, res) => {
    //权限判断

    //模拟返回
    /* res.send({
        code: 10001,
        msg: "没有权限"
    }) */

    res.send({
        code: 10000,
        msg: "lipeihua"
    })

})

module.exports = router;