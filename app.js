//Computer Choices
const gameArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return gameArray[~~(Math.random() * gameArray.length)];
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

let computerSelect = getComputerChoice();
let playerSelect;
let computerScore;
let playerScore;
