const mongoose = require("mongoose");

//定义一个user的schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now
    }
})

//创建user的Model
const userModel = mongoose.model("user", userSchema);

//把当前定义的userModel暴露出去
module.exports = userModel;