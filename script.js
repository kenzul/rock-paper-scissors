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
    if (humanLower === computerLower) {
        return "No one wins! It is a draw!";
    } else if (deck.indexOf(humanChoice) < deck.indexOf(computerChoice)) {
        return declareWinner(1, computerChoice, humanChoice);
    } else {
        return declareWinner(0, humanChoice, computerChoice);
    }
}

const declareWinner = (side, winnerChoice, loserChoice,) => {
    return `${side === 0 ? "Human" : "Computer"} wins! ${winnerChoice} defeats ${loserChoice}`;
}
