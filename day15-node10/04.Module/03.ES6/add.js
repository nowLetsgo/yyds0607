//默认暴露
function add() {
    return a + b
}

//如果一个模块中只有一个功能需要暴露，则使用默认暴露
//默认暴露只能暴露一个功能
export default add;