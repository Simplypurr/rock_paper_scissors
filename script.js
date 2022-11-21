const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerTurn = document.getElementById('player-img');
const computerTurn = document.getElementById('computer-img');

const imageSrc = {
    rock: './assets/rock.svg',
    paper: './assets/paper.svg',
    scissors: './assets/scissors.svg'
}



function getComputerChoice() {
    const selectionWords = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return selectionWords[randomChoice].toLowerCase();
}


[rockBtn, paperBtn, scissorsBtn].forEach(item => {
    item.addEventListener('click', e => {
        playerTurn.classList.remove('show-img-player');
        computerTurn.classList.remove('show-img-comp');
        let playerSelection = e.target.id;
        let computerSelection = getComputerChoice()
        setTimeout(() => {
            playRound(playerSelection, computerSelection)
        }, 500);

    })
})


function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;

    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    playerTurn.src = imageSrc[playerSelection];
    computerTurn.src = imageSrc[computerSelection];
    playerTurn.classList.add('show-img-player');
    computerTurn.classList.add('show-img-comp');


    if (playerChoice === computerChoice) {
        return `It's a draw, play more!`;
    }

    if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore++
        return `You lose, ${computerChoice} beats ${playerChoice}!`;
    } else {
        playerScore++
        return `You win, ${playerChoice} beats ${computerChoice}!`;
    }
}





