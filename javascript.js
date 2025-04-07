function getComputerChoice() {
    randomNum = Math.random() * 3;
    let choice = "";
    if(randomNum < 1) { 
        choice += "Rock"; 
    }
    else if(randomNum > 2) { 
        choice += "Paper"; 
    }
    else { 
        choice += "Scissors"; 
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;
const results = document.querySelector("#results");
function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        results.textContent = "Draw! You chose the same choice as the computer";
        console.log("Draw! You chose the same choice as the computer");
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        results.textContent = "You win! Rock beats scissors";
        console.log("You win! Rock beats scissors");
        humanScore++
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        results.textContent = "You win! Paper beats rock!";
        console.log("You win! Paper beats rock!");
        humanScore++
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        results.textContent = "You win! Scissors beats paper";
        console.log("You win! Scissors beats paper");
        humanScore++;
    }
    else {
        results.textContent = "You lose! " + computerChoice + " beats " + humanChoice.toLowerCase();
        console.log("You lose! " + computerChoice + " beats " + humanChoice.toLowerCase());
        computerScore++
    }
    updateScore();
}

function updateScore() {
    score.textContent = "Score --- Computer: " + computerScore + ", You: " + humanScore;
}

const score = document.querySelector("#score");

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {playRound("Rock", getComputerChoice());});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {playRound("Scissors", getComputerChoice());});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {playRound("Paper", getComputerChoice());});







