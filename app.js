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

//Computer Choices
const gameArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return gameArray[~~(Math.random() * gameArray.length)];
}

function computerPlay() {
  return getComputerChoice();
}

//Playing a round
function playRound(playerSelect, computerSelect) {
  computerSelect = computerPlay().toLowerCase();
  playerSelect = playerSelect.toLowerCase();
  if (computerSelect === playerSelect) {
    alert("No one likes a tie");
  } else if (
    (computerSelect == "rock" && playerSelect == "scissors") ||
    (computerSelect == "scissors" && playerSelect == "paper") ||
    (computerSelect == "paper" && playerSelect == "rock")
  ) {
    alert("Computer wins! You lose");
  } else if (
    (computerSelect == "rock" && playerSelect == "paper") ||
    (computerSelect == "scissors" && playerSelect == "rock") ||
    (computerSelect == "paper" && playerSelect == "scissors")
  ) {
    alert("You win! Computer loses");
  }
}

//Playing a game
function playGame() {
  computerScore = 0;
  playerScore = 0;
  for (let i = 0; i < 5; i++) {
    onUserInput();
  }
}

let computerSelect = getComputerChoice();
let playerSelect;
let computerScore;
let playerScore;

playGame();
