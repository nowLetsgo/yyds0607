const express = require("express");
const app = express();

const path = require("path");
const fs = require("fs");

const etag = require("etag")

const {
    promisify
} = require("util");

app.get("/", async (req, res) => {
    //获取文件的服务端路径
    const filePath = path.resolve(__dirname, "./01.html")

    //1.首先判断客户端是否携带有关于协商缓存的字段，并得到字段的值
    const ifNoneMath = req.headers["if-none-match"]; //文件唯一标识
    const ifModifiedSince = req.headers["if-modified-since"]; //文件最后修改时间
    console.log(ifNoneMath, ifModifiedSince);

    //2.获取服务器上的被请求资源的文件唯一标识(eTag)和文件最后修改时间(last-modified)
    //fs模块有一个stat方法，可以得到文件的详细信息，包含文件的最后修改时间
    const stat = promisify(fs.stat); //把fs的stat方法封装成返回promise对象的方法
    const fileStat = await stat(filePath); //等待拿到当前文件的详细信息
    console.log(fileStat);
    //得到服务器上的文件最后修改的时间
    const lastModified = fileStat.mtime.toGMTString();
    //得到服务器上的文件的唯一标识
    const eTag = etag(filePath);

    //3.把客户端携带的信息和服务端得到的信息进行比较 判断是否走缓存
    if (ifNoneMath === eTag && ifModifiedSince === lastModified) {
        //直接响应读取缓存
        return res.status(304).end();
    }

    //如果不走缓存，则说明服务端的文件有变化
    //更新客户端的文件唯一标识和最后修改时间字段
    res.set("ETag", eTag)
    res.set("Last-Modified", lastModified)

    res.sendFile(filePath);


})



app.listen("3000", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功，请访问 http://127.0.0.1:3000");
})