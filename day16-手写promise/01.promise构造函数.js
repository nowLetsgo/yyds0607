//myPromise是一个构造函数，将来可以被实例化，得到实例化的promise对象

function myPromise(exector) {
    const _this = this;
    //myPromise被实例化后肯定得到一个实例化对象，对象有两个key 一个是status，一个是value
    _this.status = "pending";
    _this.value = undefined;
    //exector回调函数需要接受两个参数，一个是resolve函数，一个reject函数
    function resolve(value) {
        _this.status = "resolved";
        _this.value = value;
    }

    function reject(reason) {
        _this.status = "rejected";
        _this.value = reason;
    }

    //promise的构造函数的参数是一个回调函数，当构造函数被实例化的时候，回调函数会直接调用
    exector(resolve, reject);
    
}


