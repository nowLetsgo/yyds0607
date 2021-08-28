/* 
    统一暴露：
        直接export后放对象，对象中是我们要暴露的内容
*/
const name = "老王";
const sex = "男";
const age = 18;

function say() {
    console.log("hello");
}

export {
    name,
    sex,
    age,
    say
}