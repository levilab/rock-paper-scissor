// variables for storing scores

let playerScore = 0;
let computerScore = 0;

// creating a function which decides the selection of computer

function computerPlay() {
  let pickOne = ["rock", "paper", "scissors"];
  let randomOne = pickOne[Math.floor(Math.random() * pickOne.length)];
  return randomOne;
}

// declaring global variables so that i can use these out of functions

let playerSelection;
let computerSelection;

// creating a function that plays a round, recording the score and returning winner of the round.

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It is a tie! You both picked ${playerSelection}.`
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper beats rock!";
    } else if (computerSelection === "scissors") {
      playerScore++;
      return "You win! Rock beats scissors!";
    } 
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You win! Paper beats rock!";
    } else if (computerSelection === "scissors") {
      computerScore++;
      return "You lose! Scissors beats paper!";
    } 
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You lose! Rock beats scissors!";
    } else if (computerSelection === "paper") {
      playerScore++;
      return "You win! Scissors beats paper!";
    } 
  }
}

// button elements that come html

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playAgain = document.querySelector('#playAgain')



// creating a function that make the game playable five times without refreshing the game
// resets the scores after 5 rounds
playAgain.disabled = true;

function playGame (pick) {
  computerSelection = computerPlay();
  
  resultRound.textContent = playRound(pick, computerSelection);

  humanScore.textContent = "Human  " + playerScore;
  robotScore.textContent = "Computer " + computerScore;

  if (playerScore == 5) {
    resultGame.textContent = "Victory is yours!";
    resultRound.textContent = ''
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    playAgain.disabled = false;
    rockBtn.className = "optionsAfterGame";
    paperBtn.className = "optionsAfterGame";
    scissorsBtn.className = "optionsAfterGame";
    playAgain.className = "optionsAgain"
  } else if (computerScore == 5) {
    resultGame.textContent = "You lost to a computer, noob!";
    resultRound.textContent = ''
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    playAgain.disabled = false;
    rockBtn.className = "optionsAfterGame";
    paperBtn.className = "optionsAfterGame";
    scissorsBtn.className = "optionsAfterGame";
    playAgain.className = "optionsAgain"
  }
}




// restart button

playAgain.addEventListener('click', function() {

  playerScore = 0;
  computerScore = 0;
  resultGame.textContent = ''
  resultRound.textContent = ''
  humanScore.textContent = "Human " + playerScore;
  robotScore.textContent = "Computer " + computerScore;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  playAgain.disabled = true;
  rockBtn.className = "options";
  paperBtn.className = "options";
  scissorsBtn.className = "options";
  playAgain.className = "optionsAfterGame"


})


// functioning the buttons

rockBtn.addEventListener("click", function () {
playGame("rock"); 
});


paperBtn.addEventListener("click", function () {
  playGame("paper");
});


scissorsBtn.addEventListener("click", function () {
  playGame("scissors");
});




let mySound = new Audio('click.wav');

scissorsBtn.addEventListener("click", function () {
  mySound.play();
});

rockBtn.addEventListener("click", function () {
  mySound.play();
});

paperBtn.addEventListener("click", function () {
  
  mySound.play();
  
});
