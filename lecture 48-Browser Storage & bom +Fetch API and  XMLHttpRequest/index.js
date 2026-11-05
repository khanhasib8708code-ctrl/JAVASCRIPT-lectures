// // let storage = localStorage.setItem("num", "1")

// localStorage.setItem("num1", "1")
// localStorage.setItem("num2", "2")
// localStorage.setItem("num3", "3")


// // let result = localStorage.getItem("num")
// // let result = localStorage.getItem("nishant")  // ye null dega kyuki nishant key nahi hai localStorage me
// // console.log(result);

// let result2 = localStorage.key(0)
// console.log(result2);

// // localStorage.removeItem("num")


// document.querySelector("#clear-local-Storage").addEventListener("click", () => {
//     localStorage.clear()
// })


// document.querySelector("#Add-session-items").addEventListener("click", ()=>{
// sessionStorage.setItem("session" , "item")
// })


// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     let data = xhttp.responseText;
//     console.log(data);
// };
// xhttp.open("GET", "https://api.github.com/users/khanhasib8708code-ctrl", true);
// xhttp.send();

// fetch("https://api.github.com/users/khanhasib8708code-ctrl").
//     then(data => data.json()).
//     then(data => console.log(data))


// async function getUser(username = "khanhasib8708code-ctrl") {
//     const response = await fetch(`https://api.github.com/users/${username}`)
//     const data = await response.json()
//     console.log(data);
// }

// getUser()






async function getUser(username = "khanhasib8708code-ctrl") {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    return data;
}


document.querySelector("#github-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    let username = document.querySelector("#github-username").value

    const data = await getUser(username)

    document.querySelector("#show-profile").innerHTML = `
         <img  src=${data.avatar_url} alt="">
        <h2>${data.name}</h2>
        <i>username : ${data.login}</i>
        <p>bio:${data.bio}</p>
        <p>followers:${data.followers}</p>
        <p>follwing :${data.following}</p>
        <p>public repos :${data.public_repos}</p>`
})

function updateStatus() {
    document.querySelector("#live-status").textContent = navigator.onLine ? "Online" : "Offline"

}

window.addEventListener("online", updateStatus)
window.addEventListener("offline", updateStatus)
