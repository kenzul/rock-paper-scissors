const deck = ["rock", "paper", "scissors", "rock", "paper"];

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

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    while (humanScore < 5 && computerScore < 5) {
        const result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result);
        if (result.includes("Human")) {
            humanScore++;
            continue;
        }
        if (result.includes("Computer")) {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log("Human wins this match!");
    } else {
        console.log("Computer wins this match!");
    }
}

playGame();