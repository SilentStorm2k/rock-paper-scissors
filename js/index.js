function getComputerChoice () {
    return Math.floor(Math.random()*3) + 1;
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