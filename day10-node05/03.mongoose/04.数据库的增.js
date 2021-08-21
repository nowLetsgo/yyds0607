const mongoose = require("mongoose");

//连接数据库(如果没有yyds这个库 则会自动创建)
mongoose.connect("mongodb://127.0.0.1:27017/nice", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//监听数据库是否连接成功,当数据库连接成功的时候 会触发mongoose.connection的open事件
mongoose.connection.once("open", err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("数据库连接成功");
})


//创建一个模式对象 对集合进行约束，需要实例化mongoose对象的Schema类
const teacherSchema = new mongoose.Schema({
    age: Number, //约束age的值是一个数值
    name: {
        type: String,
        unique: true, //这个值唯一存在（不能重名）
        required: true //必填项
    },
    sex: String,
    hobby: [String], //限制hobby的值必须是一个数组，数组内是字符串类型
    createTime: {
        type: Date,
        default: Date.now //设置默认值，不能调用，否则就是永远是当前创建Schama的时间
    }
})


//创建model对象（其实就是创建集合）,创建集合的时候需要传入约束对象Schema
//mongoose的model方法可以创建一个集合，第一个参数是集合名，第二个参数是集合的约束对象
const teacherModel = mongoose.model("teacher", teacherSchema)


//新增数据 create方法可以新增一个或对个数据

//新增一条数据
/* teacherModel.create({
    name: "yanhaijing",
    age: 18,
    sex: "男",
    hobby: ["抽烟", "喝酒", "打拳皇"],
    createTime: Date.now()
}, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("数据添加成功")
}) */


//新增多条数据
/* teacherModel.create([{
    name: "yanhaijing",
    age: 18,
    sex: "男",
    hobby: ["抽烟", "喝酒", "打拳皇"],
    createTime: Date.now()
}, {
    name: "小王",
    age: 20,
    sex: "男",
    hobby: ["斗地主", "吃龙虾"],
    createTime: Date.now()
}, {
    name: "老王",
    age: 32,
    sex: "女",
    hobby: ["逛街", "买鞋"],
    createTime: Date.now()
}], err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("数据添加成功")
}) */

//create方法返回的是一个promise对象，所以可以不用书写回调函数 直接使用then和catch接受即可
teacherModel.create({
        name: "yanjingjing",
        age: 12,
        sex: "女",
        hobby: ["买花花", "喝饮料", "打海静"],
        createTime: Date.now()
    })
    .then(value => {
        console.log("新增数据成功", value);
    })
    .catch(reason => {
        console.log("新增失败", reason);
    })