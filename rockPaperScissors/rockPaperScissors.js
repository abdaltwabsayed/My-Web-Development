/* This the JS implementation for the Rock Paper Scissors game*/

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
let playerScore = 0;
let computerScore= 0;


function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (computerChoice === playerChoice) {
        result = "It's a tie!"
    }
    else {
        switch (playerChoice){
            case "rock":
                result = (computerChoice === "scissors")? "You won!": "You lost!";
                break;
            case "paper":
                result = (computerChoice === "rock")? "You won!": "You lost!";
                break;
            case "scissors":
                result = (computerChoice === "paper")? "You won!": "You lost!";
                break;
        }
            
    }
    resultDisplay.classList.remove("greenText", "redText");
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = `${result}`;
    if (result === "You won!") {
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = `${playerScore}`
    } 
    else if (result === "You lost!") {
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = `${computerScore}`
    }
}
