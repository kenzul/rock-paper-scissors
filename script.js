const deck = ["rock", "paper", "scissors", "rock", "paper"];

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return deck[randomNumber];
}

const getHumanChoice = () => {
    let choice = "";
    do {
        choice = prompt("rock, paper or scissors?");
    } while (!deck.includes(choice));
    return choice;
}

const playRound = (humanChoice, computerChoice) => {
    const humanLower = humanChoice.toLowerCase();
    const computerLower = computerChoice.toLowerCase();
    const humanIndex = deck.indexOf(humanLower);
    if (humanLower === computerLower) {
        return "No one wins! It is a draw!";
    } else if (deck[humanIndex + 1] === computerChoice) {
        return declareWinner(1, computerChoice, humanChoice);
    } else {
        return declareWinner(0, humanChoice, computerChoice);
    }
}

const declareWinner = (side, winnerChoice, loserChoice,) => {
    return `${side === 0 ? "Human" : "Computer"} wins! ${winnerChoice} defeats ${loserChoice}`;
}

const addChoicesEvents = () => {
    const choiceButtons = document.querySelectorAll("button.choice");
    for (const button of choiceButtons) {
        button.addEventListener("click", handleChoiceClick);
    }
}

const handleChoiceClick = (e) => {
    const choice = e.target.textContent.toLowerCase();
    const result = playRound(choice, getComputerChoice());
    updateGame(result);
    updateUI(result);
}

const declareGameWinner = () => {
    return `${humanScore === 5 ? "Human" : "Computer"} wins this whole match!!`;
}

const updateGame = (result) => {
    if (result.includes("Human")) {
        humanScore++;
    }
    if (result.includes("Computer")) {
        computerScore++;
    }
}

const updateUI = (result) => {
    appendLog(createLog(result));
    updateUIScores();
    if (humanScore === 5 || computerScore === 5) {
        disableChoiceButtons();
        appendLog(declareGameWinner());
    }
}

const updateUIScores = () => {
    const humanP = document.querySelector(".scores .human");
    const computerP = document.querySelector(".scores .computer");
    humanP.textContent = humanScore;
    computerP.textContent = computerScore;
}

const disableChoiceButtons = () => {
    const choiceButtons = document.querySelectorAll("button.choice");
    for (const button of choiceButtons) {
        button.disabled = true;
    }
}

const createLog = (text) => {
    const log = document.createElement("p");
    log.classList.add("log");
    log.textContent = text;
    return log;
}

const appendLog = (log) => {
    const display = document.querySelector(".display");
    display.append(log);
}

addChoicesEvents();