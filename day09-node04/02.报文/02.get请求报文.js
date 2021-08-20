/* 
    GET请求报文：
        //1.报文首行(当前请求的简略信息：请求方式+主机地址+协议版本)
        GET http://127.0.0.1:3000/?user=laowang&pass=123 HTTP/1.1
        
        //2.报文头部
        //要访问服务器主机地址
        Host: 127.0.0.1:3000
        //保持长连接
        Connection: keep-alive
        //是否可以设置缓存（缓存禁用）
        Cache-Control: no-cache
        //sec-ch-ua可以理解为 userAgent，但是使用sec-ch-ua可以防止泄露浏览器的详细信息
        sec-ch-ua: "Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"
        //是否支持https
        Upgrade-Insecure-Requests: 1
        //用户代理
        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36
        //能够接受的响应的格式
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng;q=0.8,application/signed-exchange;v=b3;q=0.9
        //可以接受的压缩包格式
        Accept-Encoding: gzip, deflate, br
        //主要使用的语言
        Accept-Language: zh-CN,zh;q=0.9

        //3. 报文空行(用来间隔报文体和报文头)

        //4. 报文体(请求报文体就是请求携带的内容，但是get请求都是在url地址上，所以get请求报文体为空)


*/