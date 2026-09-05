
// let h1 = document.getElementById("h1")

// let h1 = document.querySelector("h1")

// let h1 = document.querySelector(".h1")

// // let h1 = document.querySelector("#h1")


// // let h1 = document.querySelectorAll("#h1")
// // console.log(h1);


// let p = document.querySelector("#desc")

// // p.textContent = "<h2>hello friends</h2>"
// // p.innerHTML = "<h2>hello friends</h2>"  /// very very risky

// // console.log(p.textContent);
// // console.log(p.innerHTML);
// // console.log(p.innertext);

// p.setAttribute("style","background-color:pink;font-size:50px")


// let btn = document.querySelector("#btn")

// btn.setAttribute("disabled","true")
// btn.removeAttribute("disabled")
// btn.textContent="Remove"


// // let res = p.getAttribute("id")

// let res = p.getAttribute("style")

// p.removeAttribute("style")

// console.log(res);

// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")

// console.log(p.classList.contains("random"));

// p.style.backgroundColor="red"  // camelCase

// p.dataset.helloDostoGoodnight="Hii"

// console.log(p.dataset.helloDostoGoodnight="Hii");


// let products = [
//     {
//         name: "Iphone 20",
//         price: 159999,
//     },
//     {
//         name: "SAMSUNG S28 ultra",
//         price: 299999,
//     },
//     {
//         name: "MI 23",
//         price: 20999,
//     },
//     {
//         name: "VIVO X300",
//         price: 99999,
//     },
//     {
//         name: "LAVA 12",
//         price: 54654,
//     },
// ]


// let div = document.createElement("div")
// let div2 = document.createElement("div")

// // console.log(div);

// div.textContent = "Hello"
// div2.textContent = "Hello bro"

// let body = document.querySelector("body")

// // body.appendChild(div)
// // body.appendChild(div2)

// // body.append(div, div2)  //  insert in last of body 
// body.prepend(div, div2)    //  insert in start of body






let products = [
    {
        name: "Iphone 16",
        price: 159999,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        name: "SAMSUNG S24 ultra",
        price: 299999,
        imgUrl: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        name: "REDMI 15",
        price: 20999,
        imgUrl: "https://m.media-amazon.com/images/I/71v4+LA3M6L._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        name: "VIVO X300 FE",
        price: 99999,
        imgUrl: "https://m.media-amazon.com/images/I/71dONrOR2hL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        name: "LAVA BOLD N4 LITE",
        price: 10999,
        imgUrl: "https://m.media-amazon.com/images/I/61WigEFZpKL._AC_UY327_FMwebp_QL65_.jpg"
    },
]



// let ProductList = document.querySelector("#product-list")

// products.forEach((product) => {
//     const card = document.createElement("p")
//     card.textContent = `${product.name}- ${[product.price]}`
//     ProductList.append(card)
// })



let ProductList = document.querySelector("#product-list")

products.forEach((product) => {

    const card = document.createElement("div")
    card.classList.add("singleProduct")


    // const upperDiv = document.createElement("div")
    // const lowerDiv = document.createElement("div")

    // const img = document.createElement("img")

    // img.setAttribute("src", "https://m.media-amazon.com/images/I/61knPJtYRpL._AC_UY327_FMwebp_QL65_.jpg")


    // upperDiv.append(img)
    // card.append(upperDiv)

    // ProductList.append(card)


    card.innerHTML = `<div>
        <img src="${product.imgUrl}" alt="">
    </div>

    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>`



    ProductList.append(card)
})


let h2 = document.querySelector("h2")

let body = document.querySelector("body")

// body.removeChild(h2)  // you have to preform on parent


h2.remove()  // directly on the element you want to remove



let  clone = ProductList.cloneNode(true);


// body.append(clone)

const items = ProductList.children

// ProductList.insertBefore(h2,items[2])  // for precise position


// items[3].before(h2)
items[3].after(h2)