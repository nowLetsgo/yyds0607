const path = require("path");

module.exports = {
    //1.入口文件
    entry: "./src/js/index.js",

    //2.出口文件
    output: {
        //出口的路径配置
        path: path.resolve(__dirname, "./build"),
        //配置默认出口js文件的位置及名称，相对于出口路径
        filename: "./js/main.js"
    },

    //5.模式
    // mode: "development", //开发环境配置（二选一）
    mode: "production" //生产环境配置（二选一）

}