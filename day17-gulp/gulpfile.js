//本文件名称不能修改，将来运行gulp指令 会自动的查找该文件
const gulp = require("gulp");
//语法检查的jshint的包
const jshint = require('gulp-jshint')
//babel编译的包
const babel = require("gulp-babel");

//新建一个任务
gulp.task("jshint", () => {
    return gulp.src("./src/js/*.js")
        .pipe(jshint({
            esversion: 6, //我们可以使用es6语法
            eqeqeq: true, //必须使用===  !==
            asi: false //可以不添加分号
        }))
        .pipe(jshint.reporter("default"))
})

//新建一个babel的任务
gulp.task("babel", () => {
    return gulp.src("./src/js/*.js")
        .pipe(babel({
            //使用babel进行编译
            //预设:把es6代码编译为es5，将模块化编译成commonjs
            presets: ["@babel/env"]
        }))
        .pipe(gulp.dest("./dist/js/"))
})