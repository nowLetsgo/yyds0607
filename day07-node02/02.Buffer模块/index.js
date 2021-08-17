/* 
    Buffer.alloc(size,fill):
        - 创建一个长度是size的buffer容器，里边填充fill内容

    Buffer.allocUnsafe(size):
        - 创建一个长度是size的buffer容器，但是里边可能存在一些垃圾数据

    Buffer.from(str)
        - 根据字符串初始化一个buffer的实例

    buf.toString方法
        - 可能将buf转成字符串
*/

const buf1 = Buffer.alloc(5);
console.log(buf1); //创建一个空的 没有填充

const buf2 = Buffer.alloc(5, "尚硅谷");
console.log(buf2); //填充了内容


const buf3 = Buffer.allocUnsafe(10);
console.log(buf3); //创建一个buffer容器，但是里边可能会有一些垃圾数据 还没有来得及被清理掉


const buf4 = Buffer.from("hello atguigu");
console.log("buf4", buf4);


//把buffer转为字符串
console.log("buf->string", buf4.toString());