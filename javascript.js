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

console.log(getComputerChoice());