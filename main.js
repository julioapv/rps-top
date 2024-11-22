const optionsContainer = document.querySelector(".options_container")
const resultsContainer = document.querySelector(".results-container")
const resultsText = document.createElement("p");

const rockBtn = document.querySelector(".option_button_rock")
const paperBtn = document.querySelector(".option_button_paper")
const scissorsBtn = document.querySelector(".option_button_scissors")
const optionBtns = document.querySelectorAll(".option_button")

let computerScore = 0;
let humanScore = 0;
let currentRound = 0;
const maxRounds = 5;

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

function finalScore(humanScore, computerScore) {
    if (humanScore > computerScore) {
        resultsText.innerText = "You win!"
    } else if (computerScore > humanScore) {
        resultsText.innerText = "You lose!"
    } else {
        resultsText.innerText = "It's a tie!"
    }
}

function playGame(humanChoice) {
    
    if (currentRound <= maxRounds) {
        console.log("round" + currentRound);
    }
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice);
    currentRound++;
    
    if (currentRound === maxRounds) {
        console.log("The game is over!");
        console.log("Total score");
        console.log("You: " + humanScore + " Computer: " + computerScore)
        finalScore(humanScore, computerScore)
        resultsContainer.append(resultsText, humanScore, computerScore)
        return;
    }

}

optionBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.innerText.toLowerCase();
        playGame(humanChoice)
    });
})



