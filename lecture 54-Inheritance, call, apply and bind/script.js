class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() { console.log("login"); }
    logout() { console.log("logout"); }
    static sendEmail() { }
}

class Customer extends User {
    cart = []
    constructor(name, email, password) {
        super(name, email)
        this.password = password;
        // this.name= name;
        // this.email= email;
    }

    buyProduct() { console.log("buyProduct"); }
    addToCart(items) { this.cart.push(items) }
    showCartItems() { console.log(this.cart); }

    // login(){}
    // logout(){}
}

class Seller extends User {
    //    constructor(name, email){
    //         // this.name= name;
    //         // this.email= email;
    //     }


    addProduct() { console.log("addProduct"); }
    // login(){}
    // logout(){}
}

class Admin extends User {
    //   constructor(name, email){
    //     // this.name= name;
    //     // this.email= email;
    // }


    hideProduct() { console.log("hideProduct"); }
    // login(){}
    // logout(){}
}


const c1 = new Customer("hasib", "hasib@example.com", "656562546")
// const s1 = new Seller("nishant", "nishant@example.com")
// const a1 = new Admin("Ayman", "Ayman@example.com")
console.log(c1);
// console.log(s1);
// console.log(a1);
// // c1.logout()
// c1.addToCart("mackbook")
// c1.showCartItems()

class PremiumCustomer extends Customer {
    constructor(name, email, password) {
        super(name, email, password)
    }
}

const pc1 = new PremiumCustomer("fgjkdk", "dfkjg", "kjdfk")
console.log(pc1);