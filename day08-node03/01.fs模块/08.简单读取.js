const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "./01.txt");

fs.readFile(filePath, (err, con) => {
    if (err) {
        console.log(err);
        return;
    }

    //快速读取文件 得到的内容是一个buffer
    console.log("读取的内容", con);
    console.log(con.toString());
})