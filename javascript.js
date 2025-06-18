

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase()
    
    if ((humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'scissor' && computerChoice == 'rock') ||
        (humanChoice == 'paper' && computerChoice == 'scissor')) {
        console.log(`${computerChoice} beats ${humanChoice}`)
        computerScore++

    } else if ((humanChoice == 'rock' && computerChoice == 'scissor') ||
     (humanChoice == 'paper' && computerChoice == 'rock') ||
     (humanChoice == 'scissor' && computerChoice == 'paper')) {
        console.log(`${humanChoice} beats ${computerChoice}`)
        humanScore++
    }
    else if (humanChoice == computerChoice) {
        console.log("Tie! No score!")
    }

    else {
        console.log("Wrong Input")
    }
}


function playGame() {
    
    for (i=0; i<5; i++) {
        const humanSelection = getHumanChoice()
        console.log(humanSelection)

        const computerSelection = getComputerChoice()
        console.log(computerSelection)

        playRound(humanSelection,computerSelection)
    }
    if (humanScore > computerScore) {
        console.log("You win the game")
        console.log("Your score:", humanScore)
        console.log("Computer score:", computerScore)
    } else if (humanScore < computerScore) {
        console.log("You lose the game")
        console.log("Your score:", humanScore)
        console.log("Computer score:", computerScore)
    } else {
        console.log("Tie!")
        console.log("Your score:", humanScore)
        console.log("Computer score:", computerScore)
    }
}
playGame()