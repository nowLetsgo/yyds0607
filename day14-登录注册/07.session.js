/* 
    session：
        - 服务端存储
        - 客户端发送登录请求给服务端
        - 服务端接收请求，验证成功后，创建一个session对象，然后给当前的客户端创建一个永远不会重复的sessionID，把当前用户的信息和sessionID组成的一个键值对保存的session对象中
        - 服务端返回响应，在cookie中携带sessionID
        - 客户端接收到服务端的响应，把sessionID存放在本地cookie中
        - 客户端第二次请求，会自动携带cookie，cookie中携带有sessionID
        - 服务端解析cookie，得到客户端携带的sessionID信息，去session对象上查询是否有保存
        - 如果服务端验证成功，则会响应请求，不需要再次登录，否则还需要再次登录

    session和cookie的对比：
        - 存放位置：cookie在浏览器中，session在服务端中
        - 安全性：cookie是明文放在客户端，session敏感信息放在服务端
        - session会占用服务端的内存，所以如果sesson过多，可以存放在数据库中

*/