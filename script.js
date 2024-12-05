const choices = ["Rock", "Paper", "Scissors"];

// Select DOM elements
const playerChoiceElement = document.getElementById("player-choice").querySelector("span");
const computerChoiceElement = document.getElementById("computer-choice").querySelector("span");
const roundWinnerElement = document.getElementById("round-winner").querySelector("span");

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const roundsPlayedElement = document.getElementById("rounds-played");
const finalResultElement = document.getElementById("final-result");

const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Generate computer choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a Tie!";
  }
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    return "You Win!";
  }
  computerScore++;
  return "Computer Wins!";
}

// Handle button click
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundsPlayed >= 5) {
      return; // Prevent further play after 5 rounds
    }

    const playerChoice = button.id.charAt(0).toUpperCase() + button.id.slice(1);
    const computerChoice = getComputerChoice();

    // Update round result
    const roundWinner = determineWinner(playerChoice, computerChoice);
    playerChoiceElement.textContent = playerChoice;
    computerChoiceElement.textContent = computerChoice;
    roundWinnerElement.textContent = roundWinner;

    // Update score and round count
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    roundsPlayed++;
    roundsPlayedElement.textContent = roundsPlayed;

    // Check if game is over
    if (roundsPlayed === 5) {
      declareFinalWinner();
    }
  });
});

// Declare the overall winner
function declareFinalWinner() {
  if (playerScore > computerScore) {
    finalResultElement.innerHTML = `<h2>You are the Overall Winner!</h2>`;
  } else if (computerScore > playerScore) {
    finalResultElement.innerHTML = `<h2>Computer is the Overall Winner!</h2>`;
  } else {
    finalResultElement.innerHTML = `<h2>It's a Tie Overall!</h2>`;
  }
}
