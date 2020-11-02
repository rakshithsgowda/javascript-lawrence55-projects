const button = document.querySelector('button');
const output = document.querySelector(".output")

button.addEventListener("click", showOutput);

function showOutput() {
    const date = new Date();
    let cur = date.getHours();
    let message;
    if (cur > 17) {
        message = "its evening";
        output.style.backgroundColor = "black"
    } else if (cur > 12) {
        message = "its afternoon";
        output.style.backgroundColor = "blue"
    } else if (cur > 0) {
        message = "its morning";
        output.style.backgroundColor = "orange"
    } else {
        message = "Something is wrong"
        output.style.backgroundColor = "red"
    }
    output.innerHTML = `<h1> ${message}</h1>`
}

