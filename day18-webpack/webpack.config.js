const path = require("path");
//引入eslint插件
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    //1.入口文件
    entry: "./src/js/index.js",

    //2.出口文件
    output: {
        //出口的路径配置
        path: path.resolve(__dirname, "./build"),
        //配置默认出口js文件的位置及名称，相对于出口路径
        filename: "./js/main.js",
        assetModuleFilename: "./images/[hash:8][ext][query]",
    },

    //3.loader
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    //babel-loader 把es6语法编译为ES5语法
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"]
            }, {
                test: /\.(png|jpeg|gif|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024, // 小于8kb以下的图片会被打包成base64格式
                    },
                },
            }, {
                test: [/\.ttf$/, /\.woff$/, /\.woff2$/],
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },

    //4.插件
    plugins: [
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    //5.模式
    mode: "development", //开发环境配置（二选一）
    // mode: "production" //生产环境配置（二选一）


    //服务器的配置信息
    devServer: {
        port: 8888, // 端口号
        open: true // 自动打开浏览器
    }

};