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