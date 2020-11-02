const button = document.querySelector('button')
const output = document.querySelector(".welcomeMessage");
const nameInput = document.querySelector('input')
button.addEventListener("click",
    outputMessage = () => {
        output.innerHTML = ` <h1> Welcome to this site ${nameInput.value}</h1>`
        button.innerText = "Thank you"
    })
