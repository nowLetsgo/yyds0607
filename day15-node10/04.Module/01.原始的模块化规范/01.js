/* 
    模块化最初始的写法：
        把功能封装在函数中 ，不同的函数就是一个模块
        但是可能多个模块会发生变量名的冲突

*/

/* function module1() {
    //模块1
}

function module2() {
    //模块2
} */




/* 
    对象模块写法：
        把模块写成一个对象，所有模块成员都放在里边
        可能会在外边修改模块内部成员信息

*/

/* const module1 = {
    num: 0,
    add() {

    },
    mins() {

    }
}
module1.add();
module1.mins();
module1.num = 2; //可能会在外边修改模块内部成员信息 */


/* 
    IIFE模块写法：
        可以不暴露私有成员

*/
const module1 = (function () {
    let num = 0;

    function add() {

    }

    function mins() {

    }
    return {
        add,
        mins
    }
})();

