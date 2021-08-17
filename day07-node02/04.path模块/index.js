/* 
    path 模块提供用于处理文件路径和目录路径的实用工具

        - path.resolve():直接得到 Node.js 进程的当前工作目录 绝对路径
        - path.resolve():可以把多个参数路径合并起来 得到一个绝对路径

*/
const path = require("path");

//获取node启动所在路径
const filePath1 = path.resolve();
console.log(filePath1);

//把其他路径拼接在启动路径上（参数中没有绝对路径，则在node启动路径上拼接）
const filePath2 = path.resolve("./img", "../js", "01.js");
console.log("filePath2", filePath2);

//获取当前文件的绝对路径
console.log("当前文件路径", __filename)
console.log("当前文件所在文件夹路径", __dirname)



//!!!!!获取当前文件夹中01.txt的路径（参数有绝对路径，则在参数这个绝对路径上拼接）
const path2 = path.resolve(__dirname, "./01.txt");
console.log(path2);