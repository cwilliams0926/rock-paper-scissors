function getComputerChoice() {
    randomNum = Math.random() * 100;
    choice = "";
    if(randomNum < 34) { 
        choice += "Rock"; 
    }
    else if(randomNum > 67) { 
        choice += "Paper"; 
    }
    else { 
        choice += "Scissors"; 
    }
    return choice;
}

function getHumanChoice() {
    choice = window.prompt("Enter Rock, Paper, or Scissors");
    return choice;
}

humanScore = 0;
computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
        console.log("Draw! You chose the same choice as the computer");
    }
    else if(humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
        console.log("You win! Rock beats scissors");
    }
    else if(humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
        console.log("You win! Paper beats rock!");
    }
    else if(humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
        console.log("You win! Scissors beats paper");
    }
    else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice.toLowerCase());
    }
}

playRound(humanSelection, computerSelection);
