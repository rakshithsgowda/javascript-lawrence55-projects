const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", function () {
    const cost = document.querySelector('input');
    tipValue = (cost.value * 0.15).toFixed(2);
    output.innerHTML = `Good tip value ${tipValue}`;
})