const deck = ["rock", "paper", "scissors", "rock", "paper"]

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
