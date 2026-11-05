// let obj ={}

// console.log(obj);


// let user = {
//     age: "35",
//     name: "nishant"
// }

// // console.log(user);

Object.prototype.allInOne = function () {
    console.log("All in one hu mai ladle");
}

Array.prototype.printItems = function () {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
}


let arr = [1, 2, 4, 5, 4]

// console.log(arr.__proto__.__proto__===user.__proto__);

console.log(arr.__proto__);

arr.printItems()

let colors = ["red", "green", "orange"]

colors.printItems()

String.prototype.hasib=function(){
    console.log("ye maine banaya hai");
    return this.firstTwoCharaters
}

"jkajdhfkj".hasib()


String.prototype.firstTwoCharaters = function () {
    console.log(this[0] + this[1])
}

"hasibKhan".firstTwoCharaters()

"jhkfjsh".allInOne()
arr.allInOne()
user.allInOne()

function random(){

}

random.allInOne()
Number(1).allInOne()

let user = {
    name:"hasib",
    toString(){
        console.log("ye apna method hai");
    }
}
user.toString();



let common = {

    eat() {
        console.log("eat");
    }
}

let person = Object.create(common)

person.walk = function () {
    console.log("walk");
}

let student = Object.create(person)

student.study = function () {
    console.log("study");
}

console.log(person);
console.log(student);

console.log(student.hasOwnProperty("study"));
console.log(student.hasOwnProperty("eat"));


console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)));

Object.setPrototypeOf(person,{
    hello(){}
})


console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)));

console.log(student.__proto__);
console.log(student.__proto__.__proto__);



class User {
    Country = "india"
    constructor(name, Country) {
        this.name = name  // instance property
        this.Country = Country // instance property
    }

    printName() {                ///instance method
        console.log(this.name);
    }
}

const u1 = new User("Hasib", "India")
const u2 = new User("Nishant", "India")


console.log(u1);
console.log(u2);

u1.printName()
u2.printName()

console.log(u1.printName() === u2.printName());
console.log(u1 instanceof User);





class BankAccount {
    #balance   // this is private property
    static totalBankAccount = 0
    constructor(initialBalance) {
        this.#balance = initialBalance
        BankAccount.totalBankAccount++;
    }

    get() {
        console.log(this.#balance);
    }

    Withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Bete itne paise na hai tere pass");
            return;
        }
        this.#balance = this.#balance - amount
    }

    deposit(amount) {

        if (amount <= 0) {
            console.log("Bete pagal samjha hai kya , mujhe ate hai edge cases handle karna garib");
        }
        this.#balance = this.#balance + amount
    }

    static calculateTax() {
        console.log("calculate tax...");
    }
}


let acc1 = new BankAccount(500);
let acc2 = new BankAccount(500);
let acc3 = new BankAccount(500);
let acc4 = new BankAccount(500);


console.log(acc1 instanceof User); 
console.log(acc1 instanceof BankAccount);
console.log(Number(1) instanceof Object);   /// false
console.log(new Number(1) instanceof Object); /// true

