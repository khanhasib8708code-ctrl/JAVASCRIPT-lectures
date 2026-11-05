

const form = document.querySelector("#form")
const forbtnm = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const Password = document.querySelector("#Password")
const PasswordHint = document.querySelector("#Password-Hint")
const Email = document.querySelector("#Email")
// const errorMessage = document.querySelector(".error-message")


const LIMIT = 500
charCount.textContent = `${LIMIT} characters remaining`

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage
}
function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = ""
}

function validUsername(username) {
    console.log(username.parentElement.querySelector(".error-message"));
    if (username.value.trim().length === 0) {
        showError(username, "Please Enter your name")
        // errorMessage.textContent = "Please Enter your name"
        return false
    }
    if (username.value.trim().length < 3) {
        showError(username, "username must be atleast 3 character")
        // errorMessage.textContent = "username must be atleast 3 character"
        return false
    }

    clearError(username)
    return true
}


function validPassword(Password) {
    console.log(Password.parentElement.querySelector(".error-message"));
    if (Password.value.trim().length === 0) {
        showError(Password, "Please Enter your Password")
        // errorMessage.textContent = "Please Enter your name"
        return false
    }
    if (Password.value.trim().length < 8) {
        showError(Password, "Password must be atleast 8 character")
        // errorMessage.textContent = "username must be atleast 3 character"
        return false
    }

    clearError(Password)
    return true
}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isUsernameValid = validUsername(username)
    const isPasswordValid = validPassword(Password)

    if (isUsernameValid && isPasswordValid) {
        document.querySelector("h1").classList.remove("hidden");
    } else {
        document.querySelector("h1").classList.add("hidden");
    }


    // if (username.value.trim().length === 0) {
    //     console.log("Enter your name");
    //     errorMessage.textContent = "Please Enter your name"
    //     return
    // }

    // console.log({ username: username.value, Email: Email.value, Password: Password.value });
})







// username.addEventListener("input", (e) => {
//     console.log(username.value);
// })

// bio.addEventListener("input", (e) => {
//     let remaining = LIMIT - bio.value.length;
//     charCount.textContent = `${remaining} characters remaining`
// })


// username.addEventListener("change", (e) => {
//     console.log("change event", username.value);
// })

// username.addEventListener("input", (e) => {
//     console.log("input event", username.value);
// })

// checkbox.addEventListener("input", (e) => {
//     console.log(checkbox.checked);
// })

// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.checked);
// })


// country.addEventListener("change", (e) => {
//     console.log(country.value);
// })


// country.addEventListener("input", (e) => {
//     console.log(country.value);
// })


// username.addEventListener("focus", (e) => {
//     console.log("focus");
// })


// username.addEventListener("blur", (e) => {
//     console.log("blur");
// })


// Password.addEventListener("focus", (e) => {
//     PasswordHint.classList.remove("hidden");
// })


// Password.addEventListener("blur", (e) => {
//     PasswordHint.classList.add("hidden");
// })
