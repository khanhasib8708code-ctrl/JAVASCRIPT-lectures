
// Arithmettic operators

// let num1 = 2
// let num2 = 4
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num2 / num1);
// console.log(num2 % num1);
// console.log(num1 ** num2);

// // case sensitive
// // teeno variable diffrent hai

// let NAME = "saif"
// let name = "juhi"
// let Name = "karan"



// let num = 45

// num++;
// console.log(++num);  // 46 -> pre increment
// console.log(num++); // 46 
// console.log(num);  // 47 



// console.log(--num); // 44 -> pre decrement
// console.log(num--); // 44 
// console.log(num);    // 43

//let num = 2;
// num += 5;
// console.log(num);
// num -= 5;
// console.log(num);
// num *= 5;
// console.log(num);
// num /= 5;
// console.log(num);
// num %= 5;
// console.log(num);
// num **= 5;
// console.log(num);


// const num1 = 3;
// const num2 = 3;

// console.log(3 > 6);
// console.log(3 < 6);
// console.log(3 >= 6);
// console.log(3 <= 6);
// console.log(3 == 6);
// console.log(3 != 6);


// // loose equality

// console.log("5" == 5);

// // strict equality

// console.log("5" === 5);



//  logical operators

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


// const age = 18
// const hasid = true

// const canEnterClub = age >= 18 && hasid === true
// console.log( canEnterClub);


// console.log(!546546);
// console.log(!0);



// CONDITIONALS



// if (true) {
//     console.log("In true Block");
// } else {
//     console.log("In false Block");
// }

// if (false) {
//     console.log("In true Block");
// } else {
//     console.log("In false Block");
// }

// const isLoggedIn = false


// if (isLoggedIn) {
//     console.log("In true Block");
// } else {
//     console.log("In false Block");
// }

// const isLoggedIn = true


// if (isLoggedIn) {
//     console.log("You can like, comment");
// } else {
//     console.log("please First login");
// }

// const isLoggedIn = false

// if (isLoggedIn) {
//     console.log("You can like, comment");
// } else {
//     console.log("please First login");
// }

// let temp = 30

// if (temp >= 25) {
//     console.log("Ac chala do");
// } else {
//     console.log("Ac mat Chalao");
// }


// let temp = 24


// if (temp >= 25) {
//     console.log("Ac chala do");
// } else {
//   console.log("Ac mat Chalao");
// }


// let day = "fri";

// if (day === "mon") {
//     console.log("1st day of the week");
// } else if (day === "tue") {
//     console.log("2nd day of the week");
// }
// else if (day === "wed") {
//     console.log("3rd day of the week");
// }
// else if (day === "thu") {
//     console.log("4th day of the week");
// }
// else if (day === "fri") {
//     console.log("5th day of the week");
// }
// else if (day === "sat") {
//     console.log("6th day of the week");
// }
// else if (day === "sun") {
//     console.log("7th day of the week");
// } else {
//     console.log("Wrong day");
// }




// Nested if else


// const isLoggedIn = true;
// const isSubscribed = false;


// if (isLoggedIn) {
//     if (isSubscribed) {
//         console.log("you can access premium content");
//     } else {
//         console.log(" you dont have any pemium plan to access");
//     }
// } else {
//     console.log("please login");
// }



// SWITCH CASE

const day = "fri";

switch (day) {
    case "mon":
        console.log("1st day of the week");
        break;
    case "tue":
        console.log("2nd day of the week");
        break;
    case "wed":
        console.log("3rd day of the week");
        break;
    case "thu":
        console.log("4th day of the week");
        break;
    case "fri":
        console.log("5th day of the week");
        break;
    case "sat":
        console.log("6th day of the week");
        break;
    case "sun":
        console.log("7th day of the week");
        break;
    default:
        console.log("wrong day");
}
