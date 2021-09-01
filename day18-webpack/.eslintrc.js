module.exports = {
    // eslint配置
    parserOptions: {
        ecmaVersion: 11, // es11
        sourceType: "module", //  ECMAScript 模块
    },
    //规则
    rules: {
        // error 和 2 代表错误
        // warn 和 1 代表警告
        // off 和 0 代表关闭
        semi: 0, // 分号
        "no-debugger": "warn",
        eqeqeq: "off", // 必须使用三个等号
    },
};