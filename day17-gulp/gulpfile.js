//本文件名称不能修改，将来运行gulp指令 会自动的查找该文件
const gulp = require("gulp");
//语法检查的jshint的包
const jshint = require('gulp-jshint')
//babel编译的包
const babel = require("gulp-babel");
//browserfiy包
const browserify = require("gulp-browserify");
//修改名字的包
const rename = require("gulp-rename");
//less编译
const less = require("gulp-less");
//concat合并
const concat = require("gulp-concat");

//服务器配置
const connect = require("gulp-connect");

//获取exec方法
const {
    exec
} = require("child_process");


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
        .pipe(connect.reload())
})

gulp.task("browserify", () => {
    return gulp.src("./dist/js/index.js")
        .pipe(browserify())
        .pipe(rename("build.js"))
        .pipe(gulp.dest("./dist/js"))
        .pipe(connect.reload())
})

//对上边的三个任务统一配置，要按照顺序依次执行 需要使用gulp.series方法
gulp.task("js-dev", gulp.series(["jshint", "babel", "browserify"]))


//less解析的任务
gulp.task("less", () => {
    return gulp.src("./src/less/*.less")
        .pipe(less())
        .pipe(concat("all.css")) //把解析的所有的css合并成一个文件all.css
        .pipe(gulp.dest("./dist/css"))
        .pipe(connect.reload())
})

//处理html
gulp.task("html", () => {
    return gulp.src("./src/index.html")
        .pipe(gulp.dest("./dist"))
        .pipe(connect.reload())
})

//统一html css js的配置
gulp.task("dev", gulp.parallel(["js-dev", "less", "html"]))



//开发环境下的服务器配置
gulp.task("connect", () => {
    connect.server({
        port: 8888, //配置端口号
        root: ["dist"], //暴露的目录
        livereload: true //打开自动刷新
    })
    //自动打开浏览器
    exec("start http://localhost:8888")

    //自动的监听html less js的文件变化 实时编译
    gulp.watch("src/index.html", gulp.series(['html']))
    gulp.watch("src/less/*.less", gulp.series(["less"]))
    gulp.watch("src/js/*.js", gulp.series(["js-dev"]))
})

//统一配置开发环境的编译和启动服务器
gulp.task("watch", gulp.series(["dev", "connect"]))