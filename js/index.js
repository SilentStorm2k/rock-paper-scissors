const userChoice = document.querySelector(".user-choice-container");
const reset = document.querySelector(".reset");
const computerChoiceContainer = document.querySelector(".computer-choice");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
const currentResult = document.querySelector(".result");
const currentRound = document.querySelector("h1");

let currentUserChoice = rock;
let playerWins = 0, computerWins = 0, roundCount = 1;
displayComputerChoice("q-mark")

reset.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    roundCount = 1;
    userChoice.addEventListener('click', startRound);
    displayComputerChoice("q-mark");
    currentRound.textContent = "Round 1";
    userScore.textContent = "0";
    computerScore.textContent = "0";
    currentResult.textContent = "";
});

userChoice.addEventListener('click', startRound);

function startRound(event) {
    if (event.target.nodeName !== "BUTTON")
            return;
    currentUserChoice = event.target.id;
    playRound(currentUserChoice);
}

function playRound (playerSelection) {
    roundCount++;
    let computerChoice = getComputerChoice();
    let result = simulatePlay(playerSelection, computerChoice);
    displayComputerChoice(computerChoice);
    if (result.substring(0, 7) == "You Win")
            playerWins++;
    if (result.substring(0, 7) == "You Los")
            computerWins++;
    updateScore(playerWins, computerWins, result, roundCount);
    if (playerWins >= 5 || computerWins >= 5) {
        let winner = playerWins >= 5 ? "You win the game!" : "You lose! Computer wins!";
        endGame(winner);
    }
    return result;
}

function updateScore (user, computer, result, roundCount) {
    userScore.textContent = user;
    computerScore.textContent = computer;
    currentResult.textContent = result;
    currentRound.textContent = "Round " + roundCount + ":";
}

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

function simulatePlay (player, computer) {
    if (player == computer) 
        return "TIE - Play again"
    else if (computer == "paper" && player == "rock") 
        result = "You Lose! " + computer + " beats " + player 
    else if (computer == "scissors" && player == "paper") 
        result = "You Lose! " + computer + " beats " + player
    else if (computer == "rock" && player == "scissors") 
        result = "You Lose! " + computer + " beats " + player
    else
        result = "You Win! " + player + " beats " + computer
    return result;
}

function displayComputerChoice(computerChoice) {
    clearComputerChoice();
    const compChoice = document.createElement('img');
    compChoice.src = "images/" + computerChoice + ".png";
    compChoice.style.width = "10rem";
    compChoice.style.height = "10rem";
    compChoice.style.border = "0.4rem solid #000000";
    if (computerChoice == 'q-mark')
        compChoice.style.backgroundColor = "white";
    computerChoiceContainer.appendChild(compChoice);
}

function clearComputerChoice() {
    while (computerChoiceContainer.firstChild) 
        computerChoiceContainer.removeChild(computerChoiceContainer.lastChild);
}

function endGame(winner) {
    userChoice.removeEventListener('click', startRound);
    currentRound.textContent = "Game Over"
    currentResult.textContent = winner;
    if (winner == "You win the game!") 
        userScore.style.color = "#F0EDCF";
    else 
        computerScore.style.color = "#F0EDCF";
}
