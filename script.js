
function getComputerChoice() {
    const selectionWords = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return selectionWords[randomChoice];
}



const playerSelection = prompt('Select word you want to battle this round?');
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';
    const playerTurn = playerSelection.toLowerCase();
    const computerTurn = computerSelection.toLowerCase();

    if (playerTurn === computerTurn) {
        return `It's a draw, play more!`;
    }

    if (playerTurn === rock && computerTurn === paper) {
        return 'You lose, paper beats rock!';
    } else if (playerTurn === rock && computerTurn === scissors) {
        return 'You win, rock beats scissors!';
    } else if (playerTurn === paper && computerTurn === rock) {
        return 'You win, paper beats rock';
    } else if (playerTurn === paper && computerTurn === scissors) {
        return 'You lose, scissors beats paper';
    } else if (playerTurn === scissors && computerTurn === rock) {
        return 'You lose, rock beats scissors';
    } else if (playerTurn === scissors && computerTurn === paper) {
        return 'You win, scissors beats paper'
    }

}

function game() {

    let computerCounter = 0;
    let playerCounter = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Select word you want to battle this round?');
        const computerSelection = getComputerChoice();
        const round = playRound(playerSelection, computerSelection);
        if (round.slice(0, 7) === 'You win') {
            playerCounter += 1
        } else {
            computerCounter += 1
        }
    }
    if (computerCounter === playerCounter) {
        return `It's a draw, play more!`;
    } else if (computerCounter > playerCounter) {
        return `Computer win with score ${computerCounter}:${playerCounter}`
    } else {
        return `You win with score ${playerCounter}:${computerCounter}`;
    }
}

// console.log(playRound(playerSelection, computerSelection))

console.log(game())