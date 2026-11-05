// function product (name,price){
//     console.log(this);
// }

// product()


// const random = () => {
//     console.log(this);
// }

// random()


// function outter() {

//     const random = () => {
//         console.log(this);
//     }

//     random()
// }

// outter()

// console.log(this);



// function product(name, price) {
//     this.name = name
//     this.price = price
// }

// const p1 = new product("iPhone 14 pro max", 8898475983)
// console.log(p1.name);

// const p2 = new product("samsung  s26 Ultra", 355486)

// console.log(p1);
// console.log(p2.name);

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
// console.log(u1);
// u1.printName()
// u2.printName()

u1.name = "name updated"
// console.log(u1);


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

acc1.get()
acc1.Withdraw(500)
acc1.get();
acc1.deposit(10000)
acc1.get()
acc1.Withdraw(1000)
acc1.get()
// acc1.calculateTax()  // TypeError: acc1.calculateTax is not a function
// BankAccount.calculateTax()

console.log(BankAccount.totalBankAccount);