

let User1 = {
    name: "hasib",
    age: 12,
    // printName(){
    //     console.log(`Hii,I am ${this.name}`);
    // }
}


let User2 = {
    name: "nishant",
    age: 12,

}

let User3 = {
    name: "taushif",
    age: 12,

}

function printName(country, place) {
    console.log(`Hii,I am ${this.name},from ${country} ${place} `);
}

// User1.printName()
// User1.printName.call(User2)
// User1.printName.call(User3)

// printName.call(User1, "India", "Delhi")
// printName.call(User2, 'Australia', "Sydney")
// printName.call(User3, "Sri Lanka", "Columbia")

// printName.apply(User1, ["India", "Delhi"])
// printName.apply(User2, ['Australia', "Sydney"])
// printName.apply(User3, ["Sri Lanka", "Columbia"])


const newFun = printName.bind(User1, "India", "Delhi")
console.log(newFun);

newFun()