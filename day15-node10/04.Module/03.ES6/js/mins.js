/* 
    分别暴露：
        当一个模块中有多个功能需要暴露的时候，可以在声明前书写export暴露
        分别暴露 需要把export书写在完整的声明语句之前

*/
export const name = 2;
export const msg = [1, 2, 3, 4]

export function mins(a, b) {
    return a - b;
}