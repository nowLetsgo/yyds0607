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


//对teacherModel进行修改 提供了updateOne和updateMany方法 返回promise对象

teacherModel.updateMany({
        name: /^yan/
    }, {
        $set: {
            age: 10
        }
    })
    .then(value => {
        console.log("修改成功", value)
    })
    .catch(reason => {
        console.log("修改失败", reason)
    })