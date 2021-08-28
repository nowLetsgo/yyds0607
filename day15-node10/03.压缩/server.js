const express = require("express");
const app = express();

const path = require("path");
const fs = require("fs");

//引入压缩模块
const zlib = require("zlib");

app.get("/", async (req, res) => {
    //获取文件的服务端路径
    const filePath = path.resolve(__dirname, "./index.html")

    //获取客户端支持的压缩类型
    const acceptEncoding = req.headers["accept-encoding"];
    console.log(acceptEncoding);

    //得到可读流
    const rs = fs.createReadStream(filePath)

    //对acceptEncoding进行判断，支持哪一个类型就哪一种压缩
    if (acceptEncoding.includes("gzip")) {
        // zlib.createGzip() //创建一个gizp的容器 是个可写流
        //把可读流写入到压缩容器中,返回一个压缩好的文件（可读流）
        const zlibFile = rs.pipe(zlib.createGzip())
        //响应文件之前，告知客户端压缩的格式
        res.set("Content-Encoding", "gzip");
        //把压缩好的文件响应到客户端
        return zlibFile.pipe(res);

    }
    if (acceptEncoding.includes("deflate")) {
        const zlibFile = rs.pipe(zlib.createDeflate())
        res.set("Content-Encoding", "deflate");
        return zlibFile.pipe(res);
    }
    if (acceptEncoding.includes("br")) {
        const zlibFile = rs.pipe(zlib.createBrotliCompress())
        res.set("Content-Encoding", "br");
        return zlibFile.pipe(res);
    }

    // 如果上边的条件都不允许，则直接不压缩

    res.sendFile(filePath) //不压缩是37.6k

})



app.listen("3000", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功，请访问 http://127.0.0.1:3000");
})