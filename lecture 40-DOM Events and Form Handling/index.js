



// let div = document.querySelector("#reveal-gift");
// let h1 = document.querySelector("#gift")


// btn.addEventListener('dblclick',()=>{
//     console.log("hellooo hello miccc checcck");
// });

// function revealGift() {
//     console.log("iphone 10000 pro max");
// }


// function revealGift() {
//     h1.classList.toggle("hidden")
//     // h1.classList.remove("hidden")
//     // h1.classList.add("visible")
// }





// let div = document.querySelector("#reveal-gift");
// let h1 = document.querySelector("#gift")


// function revealGift(event) {
//     // console.log(event);
//     // console.log(event.type);
//     console.log("target", event.target);
//     console.log("currentTarget", event.currentTarget);
//     h1.classList.toggle("hidden")
//     // h1.classList.add("visible")
// }

// div.addEventListener('click', revealGift);



// let btn = document.querySelector("#btn")
// btn.addEventListener('click', (e)=>{
//     console.log(e);
//     console.log(e.key);
//     console.log(e.clientX);
//     console.log(e.clientY);
// })





// let btn = document.querySelector("#btn")
// function fun1(e){
//     console.log(e);
// }
// // btn.addEventListener('click',fun1)
// // btn.removeEventListener('click',fun1)

// btn.addEventListener('click',fun1,{once:true})






// let btn = document.querySelector("#btn")
// let counter = 0
// function fun1(e) {
//     if (counter <3) {
//         console.log(e);
//         counter++
//     } else {
//         btn.removeEventListener('click', fun1)
//     }
// }

// btn.addEventListener('click', fun1)






// let outter = document.querySelector("#outter");
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")
// let body = document.querySelector("body")

// body.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("body");
// })

// outter.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Outter");
// }, { capture: false })

// inner.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Inner");
// })

// btn2.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log("Btn2");
// })











let products = [
    {
        id: "1",
        name: "Iphone 16",
        price: 159999,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        id: "2",
        name: "SAMSUNG S24 ultra",
        price: 299999,
        imgUrl: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        id: "3",
        name: "REDMI 15",
        price: 20999,
        imgUrl: "https://m.media-amazon.com/images/I/71v4+LA3M6L._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        id: "4",
        name: "VIVO X300 FE",
        price: 99999,
        imgUrl: "https://m.media-amazon.com/images/I/71dONrOR2hL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        id: "5",
        name: "LAVA BOLD N4 LITE",
        price: 10999,
        imgUrl: "https://m.media-amazon.com/images/I/61WigEFZpKL._AC_UY327_FMwebp_QL65_.jpg"
    },
]




let ProductList = document.querySelector("#product-list")

products.forEach((product) => {

    const card = document.createElement("div")
    card.classList.add("singleProduct")

    card.dataset.productId = product.id

    const dltbtn = document.createElement("button")

    const addToCartbtn = document.createElement("button")

    dltbtn.textContent = "Remove product"

    addToCartbtn.textContent = "Add to Cart"

    // dltbtn.addEventListener(
    //     "click", (e) => {
    //         e.stopPropagation()
    //         card.remove()
    //     }
    // )

    card.innerHTML = `<div>
        <img src="${product.imgUrl}" alt="">
    </div>

    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>

    </div>`

    card.append(dltbtn)
    card.append(addToCartbtn)

    ProductList.append(card)
})


ProductList.addEventListener("click", (e) => {
    e.stopPropagation();

    const dltbtn = e.target;

    // console.log(dltbtn.parentElement);
    // console.log(dltbtn.tagName);

    // if (e.target.tagName === "BUTTON") {
    //     e.target.parentElement.remove();
    // }
    // console.log(dltbtn.parentElement.dataset.productId);

    if (dltbtn.textContent === "Remove product" && dltbtn.tagName === "BUTTON") {
        // dltbtn.parentElement.remove();
        dltbtn.closest(".singleProduct").remove()
    }
    //    console.log( dltbtn.closest(".singleProduct"));

})