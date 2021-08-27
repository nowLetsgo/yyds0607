const {
    exec
} = require("child_process")

function open(port, host) {
    //获取当前的操作系统
    const type = process.platform;
    //根据操作系统设置打开浏览器的命令
    let open = "";
    switch (type) {
        case "win32": //windows
            open = "start";
            break;
        case "darwin": //MacOS
            open = "open";
            break;
        case "linux": //linux
            open = "xdg-open";
            break;

    }

    exec(`${open} http://${host}:${port}`)
}

module.exports = open;