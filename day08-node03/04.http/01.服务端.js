//1.引入http模块
const http = require("http");

//2.使用http模块创建一个服务 使用createServer方法
//参数是一个回调函数，用来书写服务器的处理代码
//回调函数接受两个参数: request代表请求对象  response代表响应对象
const server = http.createServer((request, response) => {
    //当服务器启动以后，如果有请求，则直接进入当前回调函数处理
    console.log('有请求进来了');

    //给响应对象设置一个MIME类型
    //Content-type是规定响应的类型和字符编码 
    response.setHeader("Content-Type", "text/plain;charset=utf-8")
    //响应一个数据出去 在response对象上有一个end方法，可以响应数据出去
    response.end("棒棒哒")

});

//3.启动服务 启动的时候要规定主机名和端口号
//参数1：端口号(1023-65535)
//参数2：主机地址 localhost  127.0.0.1  192.168.0.103(当前你的ip地址)
//参数3：启动服务的回调函数
server.listen(3000, "127.0.0.1", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`服务器启动成功 请访问 http://127.0.0.1:3000`);
})