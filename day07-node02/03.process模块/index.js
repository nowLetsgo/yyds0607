/* 
    process模块：
        argv属性 属性返回一个数组，
            数组的第一个值是node.exe的安装绝对路径
            数组的第二个值是被node启动的当前文件的绝对路径
            后边的值包含当启动 Node.js 进程时传入的命令行额外参数

        cwd() 方法
            返回 Node.js 进程的当前工作目录 绝对路径

        process.exit()
            停止当前的进程

        process.nextTick():
            立即调用函数

*/

const argv = process.argv;
// console.log(argv);

const user = argv[2];

if (user === "laowang") {
    console.log("hello 你来了");
} else if (user === "laoli") {
    console.log("hello 欢迎光临");
} else {
    console.log("赶紧走人");
}


const nodePath = process.cwd();
console.log(nodePath);


//exit方法
let i = 0;
setInterval(() => {
    i++;
    if (i >= 10) {
        process.exit();
    }
    console.log(i);
}, 100);