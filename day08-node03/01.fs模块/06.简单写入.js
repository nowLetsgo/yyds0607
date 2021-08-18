const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "./01.txt");


//简单写入：自动的打开文件写入文件关闭文件
fs.writeFile(filePath, "hello nodejs", {
    flag: "a"
}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("写入成功");
})


