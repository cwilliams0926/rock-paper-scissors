function getComputerChoice() {
    randomNum = Math.random() * 100;
    let choice = "";
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
    const choice = window.prompt("Enter Rock, Paper, or Scissors");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if(humanChoice.toLowerCase() == computerChoice.toLowerCase()) {
            console.log("Draw! You chose the same choice as the computer");
        }
        else if(humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore++
        }
        else if(humanChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++
        }
        else if(humanChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper") {
            console.log("You win! Scissors beats paper");
            humanScore++;
        }
        else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice.toLowerCase());
            computerScore++
        }
    }
    console.log("The score is Computer: " + computerScore + " to Human: " + humanScore);
}

playGame();
