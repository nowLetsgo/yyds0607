const mongoose = require("mongoose");

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

//当前模块把创建好的集合teacherModel 暴露出去供使用
module.exports = teacherModel;