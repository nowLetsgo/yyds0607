const express = require("express");
const app = express();

const path = require("path");
const fs = require("fs");

app.get("/", (req, res) => {
    const filePath = path.resolve(__dirname, "./01.html");
    res.sendFile(filePath)
})

app.get("/img", (req, res) => {
    const filePath = path.resolve(__dirname, "./01.jpg");
    const rs = fs.createReadStream(filePath);

    rs.pipe(res);
})

app.listen("3000", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功，请访问 http://127.0.0.1:3000");
})