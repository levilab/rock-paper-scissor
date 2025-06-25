

// write function that randomly return rock, paper or scissors


function getComputerChoice() {
    let result = Math.random();

    if (result < 0.33) {
        return "rock"
    } else if (result < 0.66) {
        return "paper"
    } else {
        return "scissor"
    }
}

function getHumanChoice() {
    let choice = prompt("what's your choice?","");
    return choice
}
const rock = document.createElement("button");
rock.textContent = 'rock';

const paper = document.createElement("button");
paper.textContent = 'paper';

const scissor = document.createElement("button");
scissor.textContent = 'scissor';

const body = document.querySelector('body');
body.appendChild(rock)
body.appendChild(paper)
body.appendChild(scissor)

const container = document.createElement("div");
const result = document.createElement("p");
const displayHumanScore = document.createElement("p");
const displayCompScore = document.createElement("p");
const finalResult = document.createElement("p");
container.appendChild(result);
container.appendChild(displayHumanScore);
container.appendChild(displayCompScore);
container.appendChild(finalResult);
body.appendChild(container);


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        
    if ((humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'scissor' && computerChoice == 'rock') ||
        (humanChoice == 'paper' && computerChoice == 'scissor')) {
        result.textContent = `${computerChoice} beats ${humanChoice}`;
        computerScore++;
        displayCompScore.textContent = `Computer's Running Score: ${computerScore}`;
        displayHumanScore.textContent = `Human's Running Score: ${humanScore}`;

    } else if ((humanChoice == 'rock' && computerChoice == 'scissor') ||
     (humanChoice == 'paper' && computerChoice == 'rock') ||
     (humanChoice == 'scissor' && computerChoice == 'paper')) {
        result.textContent = `${humanChoice} beats ${computerChoice}`;
        humanScore++;
        displayCompScore.textContent = `Computer's Running Score: ${computerScore}`;
        displayHumanScore.textContent = `Human's Running Score: ${humanScore}`;

    }
    else {
        result.textContent ="Tie! No score!";
    }
}

function playGame(choice) {

    playRound(choice, getComputerChoice())

    if (humanScore === 5) {
        finalResult.textContent = "You win the game";
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;

    } else if (computerScore===5) {
        finalResult.textContent = "You lose the game";
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;


    }
}

rock.addEventListener('click', () => {
playGame('rock')})

paper.addEventListener('click', () => {
playGame('paper')})

scissor.addEventListener('click', () => {
playGame('scissor')})


// count down 10-0:
