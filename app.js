//Buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => {
  playRound("rock", computerPlay());
});
paperButton.addEventListener("click", () => {
  playRound("paper", computerPlay());
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors", computerPlay());
});

//HTML Elements
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultsPhraseElement = document.getElementById("results-phrase");

//Computer Choices
const gameArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return gameArray[~~(Math.random() * gameArray.length)];
}

function computerPlay() {
  return getComputerChoice();
}

//Playing a game
function playRound(playerSelect, computerSelect) {
  computerSelect = computerPlay().toLowerCase();
  playerSelect = playerSelect.toLowerCase();
  if (computerSelect === playerSelect) {
    resultsPhraseElement.textContent = "No one likes a tie!";
  } else if (
    (computerSelect == "rock" && playerSelect == "scissors") ||
    (computerSelect == "scissors" && playerSelect == "paper") ||
    (computerSelect == "paper" && playerSelect == "rock")
  ) {
    computerScore++;
    resultsPhraseElement.textContent = "Computer wins! And you lose :(";
  } else if (
    (computerSelect == "rock" && playerSelect == "paper") ||
    (computerSelect == "scissors" && playerSelect == "rock") ||
    (computerSelect == "paper" && playerSelect == "scissors")
  ) {
    playerScore++;
    resultsPhraseElement.textContent = "You win! :) And the computer loses";
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;

  if (playerScore >= 5 || computerScore >= 5) {
    let winner = playerScore > computerScore ? "Player" : "Computer";
    resultsPhraseElement.textContent = `The winner is: ${winner}`;

    playerScore = 0;
    computerScore = 0;
  }
}

let computerScore = 0;
let playerScore = 0;
let computerSelect;
let playerSelect;
