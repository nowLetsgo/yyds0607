//引入连接数据库模块
require("./db") //index.js可以直接省略

//引入teacher集合的模块
const teacherModel = require("./schema/teacher")

//对数据库进行查询
teacherModel.find({
        name: "yanhaijing"
    })
    .then(value => {
        //查询的值是一个对象，因为findOne只能得到一条数据
        console.log("查询成功", value)
    })
    .catch(reason => {
        console.log("查询失败", reason)
    })