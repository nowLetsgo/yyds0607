//练习1
/* //微任务，并且一定是放在微任务的第一个
process.nextTick(() => {
    console.log(111);
});

//同步代码
const promise = new Promise(resolve => {
    console.log(222);
    resolve();
});

//宏任务 属于第一个阶段
setTimeout(() => {
    console.log(333);
}, 10);

//微任务 
promise.then(() => {
    console.log(444);
});


//宏任务 在第五个阶段
setImmediate(() => {
    console.log(666);
}); */


//练习2
//微任务老大
/* process.nextTick(() => {
    console.log('process.nextTick() 333');
})
//宏任务一阶段
setTimeout(() => {
    console.log('setTimeout()  111');
}, 0)

//宏任务5阶段
setImmediate(() => {
    console.log('setImmediate() 222');
})
//同步
console.log('全局代码执行完了 444'); */


//练习3
/* console.log('1') //同步

setTimeout(() => { //异步
    console.log('2')
}, 0)

new Promise((resolve) => { //同步
        console.log('3')
        resolve()
    })
    .then(() => { //异步微任务
        console.log('4')
    })
    .then(() => { //异步微任务
        console.log('5')
    })

console.log('6') //同步  */


//练习4：
/* //微任务老大
process.nextTick(() => {console.log(111);});

//宏任务1
setTimeout(() => {console.log(222);}, 0);
//宏任务2
setImmediate(() => {console.log(333);});

const promise = Promise.resolve();

//微任务1
promise
  .then(() => {
    console.log(444);
    process.nextTick(() => {console.log(555);});
    setTimeout(() => {console.log(666);}, 0);//宏任务3
  })
  .catch(() => {console.log(777);})
  .then(() => {
    console.log(888);
    setImmediate(() => {console.log(999);});//宏任务4
  })
  .catch(() => {console.log(101010);}) */


//练习5：
//4 1 3 6 8 2 7 5
/* async function async1() {
    console.log('1');
    await async2();
    console.log('2') //微任务1
}
async function async2() {
    console.log('3')
}
console.log('4');
setTimeout(() => { //宏任务1
    console.log('5')
}, 0);
async1();
new Promise((resolve) => {
    console.log('6');
    resolve()
}).then(() => { //微任务2
    console.log('7')
});
console.log('8') */



//练习6
/* setTimeout(() => {
    console.log(4);
}, 0);

new Promise(resolve => {
    console.log(1);
    for (let i = 0; i < 10000; i++) {
        i == 9999 && resolve();
    }
    console.log(2)
}).then(() => {
    console.log(5)
})

console.log(3) */

//练习7
//1 3 2 4
/* //微任务1
Promise.resolve().then(() => {
    console.log(1);
    queueMicrotask(() => { //微任务3
        console.log(2);
    })
})
//微任务2
Promise.resolve().then(function () {
    new Promise(function (resolve, reject) {
        console.log(3);
        reject();
    }).catch(function () { //微任务4
        console.log(4);
    });
}); */


//练习8
/* //1 3 4 2
//微任务1
Promise.resolve().then(() => {
    console.log(1);
    process.nextTick(() => { //微任务3（因为此时微任务正在执行，而nextTick需要放在微任务队列的最前边，所以现在只能重新创建一个微任务队列，放入nextTick）
        console.log(2);
    })
})
//微任务2
Promise.resolve().then(function () {
    new Promise(function (resolve, reject) {
        console.log(3);
        reject();
    }).catch(function () {
        console.log(4);
    });
}); */


//练习9
//微任务1
/* Promise.resolve().then(() => {
    console.log(1);
    process.nextTick(() => {
        console.log(2);
    })
})
//微任务2
Promise.resolve().then(function () {
    setTimeout(() => {
        new Promise(function (resolve, reject) {
            console.log(3);
            reject();
        }).catch(function () {
            console.log(4);
        });
    })
}); */


//练习10
//1 2 3 8 4 7 5 6
/* new Promise((resolve, reject) => {
        console.log(1)
        resolve(1)
    })
    .then(() => { //then1
        console.log(2)

        new Promise((resolve, reject) => {
                console.log(3)
                resolve()
            })
            .then(() => { //then2
                console.log(4)
            })
            .then(() => {//then4
                console.log(5)
            })
            .then(() => {//then5
                console.log(6)
            })
            
        console.log(8);
    })
    .then(() => { //then3
        console.log(7)
    }) */


//练习11
/* console.log(1); //
new Promise(function (resolve) {
    resolve();
    console.log(2); //
    setTimeout(function () { //定时器1
        console.log(3); //
    }, 0);
    Promise.resolve().then(function () { //微任务1
        console.log(4); //
        setTimeout(function () { //定时器3
            console.log(5);
        }, 0);
        setTimeout(function () { //定时器4
            (async function () {
                console.log(6);
                return function () {
                    console.log(7);
                };
            })().then(function (fn) {
                console.log(8);
                fn();
            });
        }, 0);
    });
    new Promise(function (resolve) {
        console.log(9); //
        resolve();
    }).then(function () { //微任务2
        new Promise(function (resolve, reject) {
            console.log(10);
            reject();
        }).then(function () {
            setTimeout(function () {
                console.log(11);
            }, 0);
            console.log(12);
        }).catch(function () { //微任务3
            console.log(13);
        });
    });
});
setTimeout(function () { //定时器2
    console.log(15);
    Promise.resolve().then(function () {
        console.log(16);
    });
}, 0); */



//练习12
/* console.log(1); //
new Promise((res, rej) => {
    console.log(2); //
    res();
}).then(() => { //then1
    console.log(3); //
    Promise.resolve().then(() => { //then3
        console.log(5);
        setTimeout(function () { //计时器5
            console.log(6); //
            Promise.resolve().then(function () {
                console.log(7);
            });
            setTimeout(function () { //计时器7
                console.log(8);
            }, 0);
        }, 0);
    });
}).then(() => { //then4
    console.log(4);
});

new Promise((res) => {
    console.log(19); //
    setTimeout(() => { //计时器1
        console.log(20); //
    }, 0);
});
Promise.resolve().then(() => { //then2
    setTimeout(() => { //计时器4
        Promise.resolve().then(() => {
            console.log(12);
        });
        console.log(13); //
    }, 0);
});
setTimeout(() => { //定时器2
    console.log(9); //
    new Promise((res) => {
        res();
        console.log(10);
    }).then(() => {
        console.log(11);
    });
});
setTimeout(() => { //计时器3
    setTimeout(() => { //计时器6
        setTimeout(() => { //计时器8
            Promise.resolve().then(() => {
                console.log(14);
            });
            console.log(15);
        }, 0);
        console.log(16);
    }, 0);
    console.log(17); //
}, 0); */