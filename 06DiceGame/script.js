const button = document.querySelector("button")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const output = document.querySelector("#output")
const gameareaheader = document.querySelector(".gameAreaHeader")
const roll = (num) => {
    let rNumber = Math.ceil(Math.random() * num);
    let n = 9855 + rNumber;
    let char = `&#${n};`;
    return ` ${char}`;

}
button.addEventListener("click", (() => {
    console.log("works");
    let rolls = [roll(6), roll(6)]
    let temp;
    if (rolls[0] === rolls[1]) {
        temp = "Its a draw";
    } else if (rolls[0] > rolls[1]) {
        temp = "player 1 wins";
    } else {
        temp = "player 2 wins";
    }
    player1.innerHTML = rolls[0];
    player2.innerHTML = rolls[1];

    output.innerHTML = temp
    console.log(temp)
    console.log(rolls)
    gameareaheader.hidden = true
}))
