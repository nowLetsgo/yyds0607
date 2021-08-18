const crypto = require("crypto");

//设置加密方式 md5 sha1 sha256 sha512
const type = crypto.createHash("sha512");

//得到用户的明文
let pass = "123456";

//为了更安全，可以给用户的明文加点盐
pass = pass + 'atguigu';

//开始加密 并转为16进制显示
const secret = type.update(pass, "utf-8").digest("hex");
console.log(secret); //e10adc3949ba59abbe56e057f20f883e