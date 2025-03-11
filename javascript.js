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

function playRound(humanChoice, computerChoice) {
    // Make humanChoice lowercase
    // Make computerChoice lowercase
    // if they are the same string, tie
    // if humanChoice is rock and computerChoice is scissors, win
    // if humanChoice is paper and computerChoice is rock, win
    // if humanChoice is scissors and computerChoice is paper, win
    // else, lose
}

playRound(humanSelection, computerSelection);
