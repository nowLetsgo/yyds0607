/* 
then的返回值：
    - 失败的promise对象p1调用then，则then返回失败的promise对象，和p1一样
    - 成功的promise对象p1调用then
        - 当then的处理函数出现报错，则then返回失败的promise对象，值为错误信息
        - 当then中回调函数返回一个失败的promise对象，则then返回失败的promise对象，值是内部失败promise对象的值

        - then中回调函数没有return，或者return的不是promise对象，则then返回成功的promise对象，值为return的值或者undefined
        - then中回调函数return的是一个promise对象，则then的返回值和回调函数return的promise对象类似


catch的返回值
    - 成功的promise对象p1调用catch，则catch返回成功的promise对象，和p1一样
    - 失败的promise对象p1调用catch
        - 当catch中报错了，则catch返回失败的promise对象，值为报错信息
        - 当catch中回调函数返回了一个失败的promise对象，则catch返回失败的promise对象，只为回调函数返回失败的promise对象的值

        - 当catch中的回调函数没有return 或者 return的不是一个promise对象，则catch返回一个成功的promise对象，值为return的值
        - 当catch中的回调函数返回了一个成功promise对象，则catch的返回的值是成功的promise对象，值为回调函数内部返回promise对象的值

finally的返回值：
    - 当finally中没有return的不是一个失败的promise对象，或者没有return的时候，则调用的finally的promise对象是成功，finally就返回成功，调用的finally的promise对象是失败，finally就返回失败
    - 当finally中返回一个失败的promise对象，则finally直接返回一个失败的promise对象，值是失败的值


*/