//1.引入express模块
const express = require("express");

const path = require("path")

//2.创建一个express的application对象
const app = express();

//书写接口
//默认接口 只要访问127.0.0.1/3001就可以进入这个接口中
app.get("/", (req, res) => {
    console.log("默认接口");

    //req就是请求对象，可以得到关于请求的详细内容
    // console.log("req", req);
    console.log("请求方式", req.method);
    console.log("get请求的查询字符串", req.query) //以对象的形式呈现
    console.log("得到的是请求的路径地址", req.url);

    //得到关于响应的数据
    //end方法不会设置响应头的Content-type类型
    // res.end("我是express的响应")

    //send方法会自动的设置响应头
    // res.send("我是express的响应")

    //响应一个json数据
    res.json({
        userID: "12345"
    })

})


//书写一个download接口
app.get("/download", (req, res) => {
    //获取图片
    const filePath = path.resolve(__dirname, "./05.jpg")
    res.download(filePath);
})

//响应一个文件打开
app.get("/img", (req, res) => {
    const filePath = path.resolve(__dirname, "./05.jpg");
    res.sendFile(filePath)
})

//响应重定向
app.get("/jd", (req, res) => {
    res.redirect("http://www.jd.com")
})

//不确定值的接口
app.get("/:id", (req, res) => {
    //params得到用户请求的路径接口
    console.log("params", req.params)

    res.send("你是编号为" + req.params.id + "的商户")
})


//3.给当前服务启动 并设置端口号,地址已经默认监听了 localhost 127.0.0.1  192.168.0.103
app.listen(3001, err => {
    if (err) {
        console.log("服务器启动失败", err);
        return;
    }
    console.log("服务器启动成功", "http://127.0.0.1:3001");
})