const msg = document.querySelector('.message')
const scoreonscreen = document.querySelector('.scorescreen')
const buttons = document.querySelectorAll('button')
// console.log(buttons)
const score = [0, 0]

const countfunction = (e) => {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.ceil(Math.random() * 3);
    if (computerSelection === 1) {
        computerSelection = "Rock"
    } else if (computerSelection === 2) {
        computerSelection = "Paper"
    } else if (computerSelection === 3) {
        computerSelection = "Scissor"
    }
    let result = checkWinner(playerSelection, computerSelection);
    // console.log(playerSelection)
    // console.log(computerSelection)
    console.log(result)
    if (result === "Player") {
        // result += "wins!"
        score[0]++;
    } else if (result === "Computer") {
        // result += "wins!"
        score[1]++
    }
    scoreonscreen.innerHTML = `player ${score[0]} : computer ${score[1]}`

}
function checkWinner(pl, co) {
    if (pl === co) {
        return "Draw";
    }
    if (pl === "Rock") {
        if (co === "Paper") {
            return "Computer"
        } else {
            return "Player"
        }
    }
    if (pl === "Paper") {
        if (co === "Scissor") {
            return "Computer"
        } else {
            return "Player"
        }
    }
    if (pl === "Scissor") {
        if (co === "Rock") {
            return "Computer"
        } else {
            return "Player"
        }
    }
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', countfunction)
}
