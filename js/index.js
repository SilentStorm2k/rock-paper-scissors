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
    const validChoices = ["rock", "paper", "scissors"];
    if (!validChoices.includes(playerSelection)) {
        console.warn(`${playerSelection} is not a valid option`)
        return
    }
    let result = simulatePlay(playerSelection, getComputerChoice());
    while (result == "replay round") {
        console.log("TIE: replay round");
        playerSelection = prompt("Enter choice (Rock/paper/scissors):", "rock");
        result = simulatePlay(playerSelection, getComputerChoice());
    }
    return result;
}

function simulatePlay (player, computer) {
    if (player == computer) 
        return "replay round"
    else if (computer == "paper" && player == "rock") 
        result = "You Lose!" + computer + " beats " + player 
    else if (computer == "scissors" && player == "paper") 
        result = "You Lose!" + computer + " beats " + player
    else if (computer == "rock" && player == "scissors") 
        result = "You Lose!" + computer + " beats " + player
    else
        result = "You Win!" + player + " beats " + computer
    return result;
}