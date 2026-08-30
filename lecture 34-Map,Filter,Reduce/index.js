let student = {
    name: "hasib",
    rollno: 56,
    subject: ["math", "hindi", "english"],

}

// let {name,rollno,subject} = student

// console.log(name);

// let {...hello} = student
// // console.log(hello);

// let {name, ...hello} = student
// console.log( name,hello);


// how to rename key
// let { subject: vishay, ...hello } = student
// console.log(vishay);



// let { subject: vishay, totalMarks = 500, ...hello } = student
// console.log(vishay);
// console.log(totalMarks);

// ///     object ko merge karna    ///////
// let obj1 = {
//     name:"hasib",
//     phone:5435464321
// }


// let obj2 = {
//     address:"india",
//     adharCard:354654615321,
//     name:"yash"
// }


// // let obj3 = { ...obj1, ...obj2}
// // console.log(obj3);



// let obj3 = { ...obj1, ...obj2}
// console.log(obj3);



//// array and object update //////

// const arr = [1 , 2, 8 , 9, 6, 2]

// arr[1] = "updated",
// console.log(arr);



// const obj = {
//     name: "kashturi",
//     rollno: 56,
//     address: null
// }

// obj["name"] = "vanshika"
// obj.name = "sumit"
// // console.log(obj);


// delete obj.rollno /// property delete

// console.log(obj);


// // console.log(obj.address);

// console.log(obj.address?.street);


// let arr1 = [1, 2, 3, 4, 5, 6]

// arr1.splice(2,1)
// arr1.splice(2,2)
// arr1.splice(1,3)
//  arr1.splice(3,0,2)
//  arr1.splice(3,1,2)
// arr1.splice(3,0,"heelloo") // add
// arr1.splice(3,1,["replace"]) // replace



let arr1 = [1, 2, 3, 4, 5, 6]


// arr1.slice(1, 4)
// let trimArr = arr1.slice(1, 4)
// let trimArr = arr1.slice(2, 4)
// let trimArr = arr1.slice(0,4)

// console.log(trimArr);




// console.log(arr1.indexOf(1));
// console.log(arr1.indexOf(2));
// console.log(arr1.indexOf(3));
// console.log(arr1.indexOf(4));
// console.log(arr1.indexOf(5));
// console.log(arr1.indexOf(6));




// console.log(arr1.indexOf(7));
// console.log(arr1.indexOf(56));
// console.log(arr1.indexOf(7626));
// console.log(arr1.indexOf(3513));










// let arr1 = [1, 2, 3, 4, 5, 6]


// let res = arr1.find((value)  =>{
//     return value === "3"
// })

// let res = arr1.find((value)  =>{
//     return value === 3
// })

// let res = arr1.find((value)  =>{
//     if (value === 3) {
//         return value
//     }
// })

// console.log(res);



// let resIndex = arr1.findIndex((value)  =>{
//     return value === 3
// })
// console.log(resIndex);

// let resIndex = arr1.findIndex((value)  =>{
//     if (value === 3) {
//         return value
//     }
// })
// console.log(resIndex);



// let arr3 = [1, 2, [3, 4, [5, 9, 8]]]



// console.log(arr3.flat(1));
// console.log(arr3.flat(2));
// console.log(arr3.flat(Infinity));



/// mutability /////

// let arr4 = [35, 458, 533, 65, 65, 598, 87]

// let arrCopy = arr4;
// let arrCopy2 = [...arr4];  /// spread operator


// arrCopy2.pop()

// console.log("arr4", arr4);
// // console.log("arrCopy", arrCopy);
// console.log("arrCopy2", arrCopy2);