const http = require("http");

const server = http.createServer((req, res) => {
    console.log("有请求进来了");
    res.setHeader("Content-Type", "text/plain,charset=utf-8")
    res.end("hello")
})

server.listen(3000, "127.0.0.1", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("服务器启动成功");
})