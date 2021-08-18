const fs = require("fs");

//同步的打开文件  "a"代表如果没有该文件 则创建一个新的
//openSync的返回值 就是被写入的文件的标识
const fd = fs.openSync("./01.txt", "a")

//同步写入文件
fs.writeSync(fd, "锄禾日当午")

//同步关闭
fs.close(fd);
