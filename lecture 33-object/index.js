
// let product1 = ["iphone", 54352, 4.5, 75]

// console.log(product1[0]);
// console.log(typeof product1);



// let product2 = {
//     productName: "Iphone 25 pro max",
//     price: 54635,
//     avgRating: 4.5,
//     totalRevives: 75,
//     dicount: 10,
//     'first-name': "hasib",
//     printProductName : function (){
//         console.log(this.productName);
//     },
//     printDiscount(){
//         console.log("10%");
//     }
// }

// console.log(product1[0]); 

// console.log(product2);

// product2.first-name    ///    eror
// product2["first-name"]



// console.log(product2["first-name"] );


// product2.printProductName()
// product2.printDiscount()

// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));


// for(value of product1){
//     console.log(value);
// }

// for( i = 0; i< product1.length; i++){
//     console.log(product1[i]);
// }

// product1.forEach(function(value , index){
//     console.log(value, index);
// })

// function b(fun){
//     console.log("b");
//     console.log(fun);
//     fun()
// }

// let a = function(){
//     console.log("a");
// }

// b(a)


// for(value in product2){
//     console.log(value);
// }




// for(value in product1){
//     console.log(value);
// }



// for(value in product2){
//     console.log(product2[value]);
// }



// let product1 = ["iphone", 54352, 4.5, 75]

// const [a, b, c, d, e, g] = ["iphone", 54352, 4.5, 75]
// console.log(a);







// let product2 = {
//     productName: "Iphone 25 pro max",
//     price: 54635,
//     avgRating: 4.5,
//     totalRevives: 75,
//     dicount: 10,
//     'first-name': "hasib",
//     printProductName: function () {
//         console.log(this.productName);
//     },
//     printDiscount() {
//         console.log(this.dicount);
//     }
// }


// let { price, printDiscount, avgRating, } = product2

// console.log(price, printDiscount(), avgRating);


// for(value of Object.keys(product2)){
//     console.log(value);
// }




// for(value of Object.values(product2)){
//     console.log(value);
// }


// for(value of Object.entries(product2)){
//     console.log(value);
// }


// for([keys ,value] of Object.entries(product2)){
//     console.log(keys ,value);
// }


// for ([a, b] of Object.entries(product2)) {
//     console.log(a, b);
// }



// for([keys ,value] of Object.entries(product2)){
//     console.log(keys ,value);
// }


// let product1 = ["iphone", 54352, 4.5, 75]



// const [n, p] = ["iphone", 54352, 4.5, 75]

// console.log(n, p);


let arr = [55, 54, 335, 253, 25, 65, 42, 11, 21, 35]
// console.log(arr);

// console.log(...arr);

// console.log(Math.min(...arr));



// let a = [1, 2]

// let b = [3, 4]
// let c = [...a, ...b]
// console.log(c);
// console.log(...c);



// let product1 = ["iphone", 54352, 4.5, 75]

// const [n, p, ...hello] = ["iphone", 54352, 4.5, 75]

// console.log(hello);




// function add(...numbers) {
//     console.log(numbers);
// }

// console.log(add(4, 45, 55, 45, 456, 342));




function add(...numbers) {
    let total = 0;
    for (value of numbers) {
        total += value
    }
    return total;

}

console.log(add(4, 45, 55, 45, 456, 342));




let product2 = {
    productName: "Iphone 25 pro max",
    price: 54635,
    avgRating: 4.5,
    totalRevives: 75,
    dicount: 10,
    'first-name': "hasib",
    printProductName: function () {
        console.log(this.productName);
    },
    printDiscount() {
        console.log(this.dicount);
    }
}


let { price, productName, ...privateDetail } = product2

console.log(price, productName, privateDetail);