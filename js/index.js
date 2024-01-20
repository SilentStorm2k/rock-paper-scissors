function getComputerChoice () {
    let choice = Math.floor(Math.random()*3) + 1;
    let ret;
    switch (choice) {
        case 1: ret = "rock";       break;
        case 2: ret = "paper";      break;
        case 3: ret = "scissors";   break;
    }
    return ret;
}

function getUserChoice () {
    return prompt("Enter choice (Rock/paper/scissors):", "rock");
}

function playRound (playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];
    if (!validChoices.includes(playerSelection)) {
        console.warn(`${playerSelection} is not a valid option`)
        return
    }
    let result = simulatePlay(playerSelection, getComputerChoice());
    while (result == "TIE") {
        console.log(`${result}: replay round`);
        playerSelection = getUserChoice();
        result = simulatePlay(playerSelection, getComputerChoice());
    }
    return result;
}

function simulatePlay (player, computer) {
    if (player == computer) 
        return "TIE"
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

function game() {
    let playerWins = 0, computerWins = 0, roundCount = 1;
    let result;
    while (playerWins < 5 && computerWins < 5) {
        console.log(`Round ${roundCount++}: Tally: You -> ${playerWins}, Computer -> ${computerWins}`);
        result = playRound(getUserChoice());
        console.log(result)
        if (result.substring(0, 7) == "You Win")
            playerWins++;
        else
            computerWins++
    }
    let winner = playerWins == 5 ? "You win the game" : "You lose! Computer wins!";
    console.log(`${winner} -> Tally: You -> ${playerWins}, Computer -> ${computerWins}`);
}