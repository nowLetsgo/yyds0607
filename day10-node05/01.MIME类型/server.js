const http = require("http");
const path = require("path");
const fs = require("fs")
//获取文件路径
const pathFile = path.resolve(__dirname, "./index.html");

const server = http.createServer((req, res) => {
    console.log("有请求进来了");

    //把要返回的文件当做一个可读流
    const rs = fs.createReadStream(pathFile);

    //因为响应的是一个html文件，所以要设置MIME类型
    res.setHeader("Content-type", "text/html;charset=utf-8")

    //响应res本身也是一个可写流，所以可以直接把可读流写入到res中
    rs.pipe(res)
})

server.listen(3000, "127.0.0.1", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("服务器启动成功 http://127.0.0.1:3000");
})