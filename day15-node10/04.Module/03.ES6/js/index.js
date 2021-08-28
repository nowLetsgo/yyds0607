//1.引入默认暴露的模块
import add from "./add";

//2.引入分别暴露的模块(必须用解构赋值的方式去接受)
import {
    name,
    mins
} from './mins'

//3.引入统一暴露的模块(如果重名，可以使用as来起一个别名)
import {
    name as myName,
    age,
    sex,
    say
} from './student'


// 4. 不想解构赋值一个个拿到暴露的功能， 想要放在一个对象中(引入全部并起一个别名)
// import * as person from './person'

console.log("add方法调用", add(1, 2))
console.log("name", name);
console.log("myName", myName);


/* 
    ES6模块化编译：
        - 使用babel工具把ES6模块化编译为commonJS模块化
        - 使用browserify再把commonJS模块化编译成浏览器识别语法

        - babel的使用：
            - npm install --save-dev @babel/core @babel/cli @babel/preset-env
                - @babel/core 核心包
                - @babel/cli 脚本命令包
                - @babel/preset-env 预设的包
            - 在package.json文件中配置babel
                "babel": {
                    "presets": [
                    "@babel/env"
                    ]
                }
            - 可以使用命令 把一个js文件夹内的ES6模块化规范代码，编译为commonJS模块化文件，然后放在一个新的文件夹中
                `npx babel 目标文件夹 -d 输出文件夹`（npx:当命令没有安装到全局的时候，启动本地命令）

        - 当babel把ES6模块转转为commonJS模块化之后，可以使用browserify把CommonJS模块化编译为浏览器识别的语法 供浏览器使用


*/