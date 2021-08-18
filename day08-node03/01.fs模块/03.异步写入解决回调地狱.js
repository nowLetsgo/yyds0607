const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "./01.txt");


(async function () {
    //fd就是等待成功的promise对象的值
    const fd = await new Promise((resolve, reject) => {
        fs.open(filePath, "a", (err, fd) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(fd);
        })
    })

    await new Promise((resolve, reject) => {
        fs.write(fd, "今天天气真不错", (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve("写入成功")
        })
    })

    await new Promise((resolve, reject) => {
        fs.close(fd, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve("关闭成功")
        })
    })

})()
.then(value => {
        console.log("文件写入成功并关闭");
    })
    .catch(reason => {
        console.log("文件写入失败", reason);
    })




console.log(1);