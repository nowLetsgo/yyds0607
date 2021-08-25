const express = require("express");
const app = express();

const path = require("path");

//官方的静态资源中间件
//暴露public静态路径，则可以直接访问这个public内的静态资源
//第一个参数代表访问当前静态资源的路径
app.use("/public/", express.static(path.resolve(__dirname, "./public")))
app.use("", express.static(path.resolve(__dirname, "./views")))


app.listen("3005", err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功 请访问 http://127.0.0.1:3005");
})