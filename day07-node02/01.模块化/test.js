const os = require("os");

console.log("系统剩余内存比例是", (os.freemem() / os.totalmem()).toFixed(2));