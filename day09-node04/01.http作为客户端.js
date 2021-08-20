const http = require("http");

//服务器的地址
const url = "http://127.0.0.1:3000";

//在http模块上有一个request的方法可以创建一个客户端，能够去请求服务端
//参数1 是url地址
//参数2 回调函数，当请求发出后并接受到响应，回调函数就会执行(回调函数对一个参数，就是响应对象)
const request = http.request(url, (responese) => {
    // console.log(responese);

    //响应状态码
    console.log(responese.statusCode);

    //node作为客户端请求后，得到的响应式一个可读流，我们需要去接受
    responese.on("data", chunk => {
        console.log(chunk.toString());
    })

    responese.on("end", chunk => {
        console.log("响应数据全部接受完毕");
    })
})

//创建好请求对象之后，要开始发送请求
request.end();