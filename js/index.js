function getComputerChoice () {
    let choice = Math.floor(Math.random()*3) + 1;
    let ret;
    switch (choice) {
        case 1:
            ret = "rock"
            break;
        case 2:
            ret = "paper"
            break;
        case 3:
            ret = "scissors"
            break;
    }
    return ret;
}

function playRound (playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    if (computerSelection == playerSelection) {}
        // replay round
    let playerChoice
    switch (playerSelection) {
        case "rock":        playerChoice = 1; break;
        case "paper":       playerChoice = 2; break;
        case "scissors":    playerChoice = 3; break;
        default:            playerChoice = 0;
    }
    
}