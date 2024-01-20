const { error, warn } = require("console");

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
    if (!validChoices.include(playerSelection)) {
        console.warn(`${playerSelection} is not a valid option`)
        return
    }
    let result = simulatePlay(playerSelection, getComputerChoice());
    while (result == "replay round") {
        console.log("TIE: replay round")
        playerSelection = prompt()
        result = simulatePlay(playerSelection, getComputerChoice());
    }
    return result;
}

function simulatePlay (player, computer) {
    if (player == computer) {
        return "replay round"
    }
    switch (player) {
        case "rock":   
            if (computer == "paper") 
                result = "You Lose!" + computer + " beats " + player 
            break;
        case "paper": 
            if (computer == "scissors") 
                result = "You Lose!" + computer + " beats " + player
            break;
        case "scissors":  
            if (computer == "rock") 
                result = "You Lose!" + computer + " beats " + player
            break;
        default:   
            result = "You Win!" + player + " beats " + computer
    }
    return result;
}