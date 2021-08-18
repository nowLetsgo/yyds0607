const fs = require("fs");
const path = require("path");
const {
    promisify
} = require("util")

//获取文件路径
const filePath = path.resolve(__dirname, "./01.txt");

//把open write close方法用promisify处理，就变成了返回promise对象的方法了
const openFile = promisify(fs.open);
const writeFile = promisify(fs.write);
const closeFile = promisify(fs.close);


(async function () {
    const fd = await openFile(filePath, "a");
    await writeFile(fd, "hello world");
    await closeFile(fd)
})()
.then(value => {
        console.log("文件写入成功");
    })
    .catch(reason => {
        console.log("文件写入失败", reason);
    });