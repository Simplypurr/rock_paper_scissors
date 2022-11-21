const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerTurn = document.getElementById('player-img');
const computerTurn = document.getElementById('computer-img');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const roundDescription = document.querySelector('.round-description');
const newGameBtn = document.getElementById('new-game');

let playerScoreCounter = 0;
let computerScoreCounter = 0;

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




function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    playerTurn.src = imageSrc[playerSelection];
    computerTurn.src = imageSrc[computerSelection];
    playerTurn.classList.add('show-img-player');
    computerTurn.classList.add('show-img-comp');

    if (playerChoice === computerChoice) {
        return roundDescription.innerText = `It's a draw, play more!`;
    }

    if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
        computerScoreCounter++;
        roundDescription.innerText = `You lose this round, ${computerChoice} beats ${playerChoice}!`;
    } else {
        playerScoreCounter++;
        roundDescription.innerText = `You win this round, ${playerChoice} beats ${computerChoice}!`;
    }
    playerScore.innerText = playerScoreCounter;
    computerScore.innerText = computerScoreCounter;


}

const buttons = [rockBtn, paperBtn, scissorsBtn]


buttons.forEach(item => {
    item.addEventListener('click', e => {
        playerTurn.classList.remove('show-img-player');
        computerTurn.classList.remove('show-img-comp');
        let playerSelection = e.target.id;
        let computerSelection = getComputerChoice()

        setTimeout(() => {
            playRound(playerSelection, computerSelection)

            if (computerScoreCounter === 5) {
                roundDescription.innerText = 'Computer win! Tap to start new Game';
            } else if (playerScoreCounter === 5) {
                roundDescription.innerText = 'You WIN!!! Tap to start new Game!';
            }
            if (computerScoreCounter === 5 || playerScoreCounter === 5) {
                buttons.forEach(item => item.disabled = true)
                newGameBtn.style = 'display:block'
            }

        }, 500);


    })
})




newGameBtn.addEventListener('click', () => {
    playerTurn.classList.remove('show-img-player');
    computerTurn.classList.remove('show-img-comp');
    roundDescription.innerText = '';
    playerScoreCounter = 0;
    computerScoreCounter = 0;
    playerScore.innerText = playerScoreCounter;
    computerScore.innerText = computerScoreCounter;
    buttons.forEach(item => item.disabled = false)
    newGameBtn.style = 'display:none'
})

