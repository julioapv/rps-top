const optionsContainer = document.querySelector(".options_container")
const resultsContainer = document.querySelector(".results-container")
const resultsText = document.createElement("p");
const roundText = document.querySelector(".round-counter")
const roundWinner = document.querySelector(".round-winner")
const humanScoreDisplay = document.querySelector(".human-score")
const computerScoreDisplay = document.querySelector(".computer-score")

const rockBtn = document.querySelector(".option-button-rock")
const paperBtn = document.querySelector(".option-button-paper")
const scissorsBtn = document.querySelector(".option-button-scissors")
const optionBtns = document.querySelectorAll(".option-button")
const resetGameBtn = document.querySelector(".reset-button")

let computerScore = 0;
let humanScore = 0;
let currentRound = 1;
const maxRounds = 6;


function disableAllButtons() {
    optionBtns.forEach(button => button.disabled = true)
}

function enableAllButtons() {
    optionBtns.forEach(button => button.disabled = false)
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;

    resultsText.innerText = "-"
    humanScoreDisplay.innerText = `Your score: ${humanScore}`
    computerScoreDisplay.innerText = `Computer score: ${computerScore}`
    roundText.innerText = `Current round: ${currentRound}`
    resultsText.innerText = ""
    enableAllButtons()
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1
    if (computerChoice === 1) {
        computerChoice = "rock"
    } else if (computerChoice === 2) {
        computerChoice = "paper"
    } else if (computerChoice === 3) {
        computerChoice = "scissors"
    }
    return computerChoice
}

function getHumanChoice() {
    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].addEventListener("click", function () {
        let humanChoice = optionBtns[i].innerText.toLowerCase()
        return humanChoice
    });
    }
}

function playRound(humanChoice, computerChoice) {    
    const humanWin = 
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    
    const computerWin = 
        (computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") || 
        (computerChoice === "scissors" && humanChoice === "paper")
    
    const humanComputerTie = 
            (humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")
    
    const errorMessage = "Sorry we couldn't calculate your game due to technical issues, please try again"
    
    if (humanWin) {
        humanScore ++
        humanScoreDisplay.innerText = `Your score: ${humanScore}`
        roundWinner.innerText = "You win"
    } else if (computerWin) {
        computerScore ++
        computerScoreDisplay.innerText = `Computer score: ${computerScore}`
        roundWinner.innerText = "You lose"
    } else if (humanComputerTie) {
        roundWinner.innerText = "It's a tie"
    } else {
        alert(errorMessage)
        console.error(errorMessage)
    }
}

function finalScore(humanScore, computerScore) {
    if (humanScore > computerScore) {
        resultsText.innerText = "You win! Well done!"
    } else if (computerScore > humanScore) {
        resultsText.innerText = "You lose! Better luck next time"
    } else {
        resultsText.innerText = "It's a tie! Let's play another game"
    }
}

function playGame(humanChoice) {
    
    if (currentRound <= maxRounds) {
        roundText.innerText = `Current round: ${currentRound}`
    }
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice);
    currentRound++;
    
    if (currentRound === maxRounds) {
        finalScore(humanScore, computerScore)
        resultsContainer.append(resultsText)                
        disableAllButtons()
        return;
    }
}

optionBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.innerText.toLowerCase();
        playGame(humanChoice)
    });
})

resetGameBtn.addEventListener("click", () => resetGame())

