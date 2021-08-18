const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "./01.txt");


//异步打开
fs.open(filePath, "a", (err, fd) => {
    //参数err：如果文件打开失败 则存在err对象
    //参数fd:文件标识
    if (err) { //先进行错误优先处理
        console.log(err);
        return;
    }

    fs.write(fd, "蛋黄的长裙", (err, length) => {
        //err就是文件写入错误时出现
        //length是写入字符的字节长度
        if (err) {
            console.log(err);
            return;
        }

        //关闭
        fs.close(fd, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("文件关闭成功");
        })
    })
});


console.log(1);