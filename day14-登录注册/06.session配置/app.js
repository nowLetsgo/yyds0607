const express = require("express");
const app = express();

//引入自动打开浏览器的模块
const open = require("./util/open");

//连接数据库
require("./db");
//引入userModel集合
const userModel = require("./model/userModel")

const path = require("path");

//引入session配置
const session = require("express-session");
const MongoStore = require("connect-mongo");

//配置session
app.use(session({
    secret: "lipeihua", //配置加密字符串
    store: MongoStore.create({ //将session存入数据库
        mongoUrl: 'mongodb://127.0.0.1:27017/atguigu'
    })
}))


//官方的静态资源中间件
//暴露public静态路径，则可以直接访问这个public内的静态资源
//第一个参数代表访问当前静态资源的路径
app.use("/public/", express.static(path.resolve(__dirname, "./public")))
app.use("", express.static(path.resolve(__dirname, "./views")))

//解决post请求的报文体body的数据 中间件
app.use(express.urlencoded({ //解决post发送的报文体格式是表单格式
    extended: false
}))
app.use(express.json()); //解决post发送的报文体格式是json格式


//引入各个路由 并把路由挂载到app上
const regRouter = require("./router/regRouter")
const loginRouter = require("./router/loginRouter")
const registerRouter = require("./router/registerRouter")
const centerRouter = require("./router/centerRouter")

//挂载在app上
app.use(regRouter)
app.use(loginRouter)
app.use(registerRouter)
app.use(centerRouter)

app.listen("3005", err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功 请访问 http://127.0.0.1:3005");
    open("3005", "127.0.0.1")
})