console.log("Hello");
let computerScore = 0
let humanScore = 0

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1
    if (computerChoice === 1) {
        computerChoice = "rock"
    } else if (computerChoice === 2) {
        computerChoice = "paper"
    } else if (computerChoice === 3) {
        computerChoice = "scissors"
    }

    // console.log("computer " + computerChoice);
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = window.prompt("Write your choice, 'rock', 'paper' or 'scissors'").toLowerCase()
    return humanChoice
}

function playRound(humanChoice, computerChoice) {    
    const humanWin = (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")
    const computerWin = (computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")
    const humanComputerTie = (humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")
    const errorMessage = "Sorry we couldn't calculate your game due to technical issues, please try again"
    
    if (humanWin) {
        console.log("you win");
        humanScore ++
    } else if (computerWin) {
        console.log("you lose");
        computerScore ++
    } else if (humanComputerTie) {
        console.log("tie");
    } else {
        console.error(errorMessage)
    }
}

// const humanSelection = getHumanChoice()
// const computerSelection = getComputerChoice()

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log("Round: " + i);
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
    console.log("Total score");
    console.log("You: " + humanScore + " Computer: " + computerScore)
}

playGame()



