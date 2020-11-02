const coinArray = ["Heads", "Tails"]
let score = [0, 0]

const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
// console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", tosscoin);
}

function tosscoin(e) {
    let ourSelection = e.target.innerText
    let computerToss = Math.floor(Math.random() * 2)
    let computerSelection = (coinArray[computerToss]);
    ourSelection === computerSelection ? (score[0]++) : (score[1]++);
    message.innerHTML = (`player selected <h1> ${ourSelection}</h1> and the computer selected <h1> ${computerSelection} </h1> <h2>player: ${score[0]}  <br> computer: ${score[1]}</h2> <br> 
    total plays:${score[0] + score[1]} `)

}