
// async function fun2() {
//     // console.log("hii");

//     return 11
// }

// function fun1() {

//     // console.log("hello");
//     // return 10
//     // return Promise.resolve(10)
//     // return Promise.reject(10)

//     return 10

// }


// console.log(fun2());
// console.log(fun1());

// fun2().then((data) => {
//     console.log(data);
// })

// console.log(fun1());


// console.log("a");

// async function fun3() {
//     console.log("b");
// }

// console.log(fun3());
// console.log("c");


// async function fun3() {
//     return "hello"
// }


// fun3().then(data => {
//     console.log(data);
// })






// async function fun3() {
//     return "hello"
// }

// async function fun4() {
//     return Promise.resolve("hiiiii")
// }

// console.log("1");

// async function fun5() {

//     // fun3().then(data => {
//     //     console.log(data);
//     // })

//     console.log("2");
//     let data = await fun3()
//     console.log("3");
//     let data2 = await fun4()
//     console.log("4");
//     console.log(data, data2);
// }

// console.log("nishant");

// fun5()

// console.log("5");





// console.log("a");

// async function random() {


//     console.log("b");

//     await 1;

//     console.log("c");
// }

// random()

// console.log("d");




// let data;

// async function userData() {
//     return { name: "hasib" }
// }

// async function fun4() {
//     return Promise.reject("error aa gaya")
// }


// async function fun5() {

//     try {
//         let data = await userData()

//         let data2 = await fun4()

//         console.log(data.name, data2);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("   mai to hamsha chalunga ");
//     }
// }


// fun5()





function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza searching...");
        setTimeout(function fun1() {
            console.log("Here is the Pizza's Menu.");
            let price = 500;
            // a(price)
            resolve(price)
        }, 2000)
    })

}

function addToCart(price) {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to cart...");
        setTimeout(function fun2() {
            console.log("Pizza Added to cart");
            resolve(price)
        }, 3000)
    })
}

function payment(price) {
    return new Promise(function (resolve, reject) {
        console.log(`Payment Initiated , Amount : ${price}`);
        setTimeout(function fun3() {

            let isPaymentSuccessful = true

            if (isPaymentSuccessful) {
                console.log(`Payment Completed, Amount : ${price}`);
                resolve()
            } else {
                reject("Bhaiya payment failed")
            }


        }, 5000)
    })
}

// // searchPizza().then(function(price){
// //     console.log(price);
// // })

// let res = searchPizza()
// let price =0
// res.then(function (price) {
//     return addToCart(price)
// }).then(function (price) {
//     return paymet(price)
// }).then(function () {
//     console.log("Bss Aa hee gaya Pizza");
// }).catch(function (err) {
//     console.log(err);
// })


async function orderFood() {
    try {
        let price = await searchPizza()
        await addToCart()
        await payment(price)
        console.log("Bss Aa hee gaya Pizza");

    } catch (error) {
        console.log(error);
    }
}

orderFood()