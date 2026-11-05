

// function fun1() {
//     return Promise.resolve("fun1")
// }

// function fun2() {
//     return Promise.resolve("fun2")
// }

// function fun3() {
//     return Promise.resolve("fun3")
// }

// let result = Promise.all([fun1(), fun2(), fun3()])

// result.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })






function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("fun1")
        }, 3000);
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             reject("fun2")
        }, 1000);
    })
}

function fun3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fun3")
        }, 7000);
    })
}

// let result = Promise.all([fun1(), fun2(), fun3()])

// let result = Promise.allSettled([fun1(), fun2(), fun3()])

// let result = Promise.race([fun1(), fun2(), fun3()])           ///   jo  pehle settled hogaya wo output hai  

let result = Promise.any([fun1(), fun2(), fun3()])                ///  jo  pehle fulfill milgaya wo output hai  

result.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})