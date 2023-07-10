var playerScore = 0;
var computerScore = 0;

function playGame(userChoice) {
  var choices = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[randomIndex];

  var result = compareChoices(userChoice, computerChoice);

  var resultElement = document.getElementById("result");
  resultElement.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;

  updateScore(result);
}

function compareChoices(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

function updateScore(result) {
  var playerScoreElement = document.getElementById("player-score");
  var computerScoreElement = document.getElementById("computer-score");

  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;

  var playerScoreElement = document.getElementById("player-score");
  var computerScoreElement = document.getElementById("computer-score");

  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;

  var resultElement = document.getElementById("result");
  resultElement.textContent = "";
}
