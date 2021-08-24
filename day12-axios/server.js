const express = require("express");
const path = require("path")
const app = express();

//处理post请求的报文体接受格式
//需要安装一个body-parser的包
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get("/user", (req, res) => {
    console.log(req.query);
    res.send("查询成功")
})

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("新增成功")
})

app.put("/user", (req, res) => {
    console.log(req.body);
    res.send("修改成功")
})

app.delete("/user", (req, res) => {
    console.log(req.query);
    res.send("删除成功")
})


app.get("/axios", (req, res) => {
    const filePath = path.resolve(__dirname, "./axios.min.js");
    res.sendFile(filePath);
})

app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./02.axios基础使用2.html");
    res.sendFile(filePath);
})



app.listen("3004", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功 可以访问 http://127.0.0.1:3004");
})