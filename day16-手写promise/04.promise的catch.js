//myPromise是一个构造函数，将来可以被实例化，得到实例化的promise对象

function myPromise(exector) {
    const _this = this;
    //myPromise被实例化后肯定得到一个实例化对象，对象有两个key 一个是status，一个是value
    _this.status = "pending";
    _this.value = undefined;
    _this.callBack = {};

    //exector回调函数需要接受两个参数，一个是resolve函数，一个reject函数
    function resolve(value) {
        //resolve和reject函数改变promise状态，但是promise对象的状态只能是pending变成其他状态
        //所以先判断当前promise对象的状态，如果不是pending，则直接退出，不再执行后边的代码
        if (_this.status !== "pending") return;
        _this.status = "resolved";
        _this.value = value;

        //当resolve执行完成以后，才能去执行then中的onResolved方法
        //为了保证onResolved函数在then调用之后执行，所以把他放在一个异步中（计时器），这样then就可以先调用生成以一个onResolved方法，然后在这个位置才能调用onResolved方法
        setTimeout(() => {
            //因为then中可能没有传递参数，则先进行判断
            _this.callBack.onResolved && _this.callBack.onResolved(value)
        })
    }

    function reject(reason) {
        if (_this.status !== "pending") return;
        _this.status = "rejected";
        _this.value = reason;

        setTimeout(() => {
            _this.callBack.onRejected && _this.callBack.onRejected(reason)
        })

    }

    //promise的构造函数的参数是一个回调函数，当构造函数被实例化的时候，回调函数会直接调用
    exector(resolve, reject);

}

//then方法我们设计的是 内部的函数是异步调用的
myPromise.prototype.then = function (onResolved, onRejected) {
    const _this = this;

    //then方法一定会返回一个promise对象
    return new myPromise((resolve, reject) => {
        //我们需要保证用户传递进来的onResolved，和onRejected两个回调函数，在这个位置执行，这样我们才能知道执行结果，然后确定then返回的promise对象的状态和值
        //但是用户传递进来的onResolved，和onRejected两个回调函数需要在Promise对象的构造函数中的reject和resolve函数内部执行，才能确定他们的执行时间
        //解决，我们自己封装两个函数，让构造函数的resolve和reject调用我们封装的函数，然后我们在封装的函数中调用onResolved和onRejected
        _this.callBack.onResolved = function (value) {
            //接下来开始考虑then的返回的promise对象的状态和值，和onResolved或者onRejected两个函数的调用相关
            //then返回失败的情况：1.onResolved函数返回失败的promise对象，2.onResolved函数中报错
            //使用try catch来检测onResolved的是否报错
            try {
                const result = onResolved(value);
                //如果onResolved函数没有报错，则验证以下是否返回promise对象
                if (result instanceof myPromise) {
                    //如果re是promise对象,可以通过then来判断当前是成功还是失败
                    result.then(value => {
                        //re是成功的promis对象，value就是他的值，这个时候调用resolve
                        resolve(value)
                    }, reason => {
                        //re是失败的promise对象，reason就hi是他的失败的值，则调用reject
                        reject(reason)
                    })
                } else {
                    //re不是promise对象，直接then返回成功状态,值就是当前onResolved函数的返回值
                    resolve(result)
                }

            } catch (e) {
                //如果onResolved方法报错，则直接调用reject，让then返回一个失败的promise对象，值为错误的信息
                reject(e);
            }

        }
        _this.callBack.onRejected = function (reason) {
            try {
                const result = onRejected(reason);
                if (result instanceof myPromise) {
                    result.then(value => {
                        resolve(value)
                    }, reason => {
                        reject(reason)
                    })
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        }

    })
}

//catch的逻辑其实就是then的第二个参数的逻辑 所以可以直接使用then，传入第二个参数
myPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
}