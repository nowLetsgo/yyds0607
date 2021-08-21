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

// console.log(teacherSchema);