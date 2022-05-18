//GAME

// Generate the computers move

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const generate = createRndInteger(1,3)
    if(generate==1){
        return "Rock"
    }
    else if(generate==2){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

// Helper function to create random int [min,max]
function createRndInteger(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}


//output winner of a given round of RPS 
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = capitalizeFirstLetter(playerSelection);
    const result = rpsWinner(playerSelection, computerSelection);
    if(result==null){
        console.log("Tie! Shoot again.");
        return null;
    }
    else if(result == true){
        console.log(`You win the round! ${playerSelection} beats ${computerSelection}.`);
        return true;
    }
    else{
        console.log(`You lose the round! ${computerSelection} beats ${playerSelection}.`)
        return false;
    }
}


//helper function for playRound, determines winner of RPS round
function rpsWinner(playerSelection, computerSelection){
    const r = "Rock";
    const p = "Paper";
    const s = "Scissors";
    if(playerSelection==computerSelection){
        return null;
    }
    else if( playerSelection== r && computerSelection== s || playerSelection==p && computerSelection==r || playerSelection==s && computerSelection==p){
        return true;
    }
    else{
        return false;
    }
}


//Helper to capitalize the first letter of a string
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Plays a best of 5 game based on player input
// function game(){
//     console.log("Time to play Rock Paper Scissors. The game is best of 5");
//     let computerScore = 0;
//     let playerScore = 0;
//     let round = 1;
//     while(round<=5){
//         console.log(`Round ${round}`);
//         let playerSelection =  window.prompt("Enter your selection: ");
//         const computerSelection = computerPlay();
//         const result = playRound(playerSelection, computerSelection);
//         if(result==true){
//             ++round;
//             ++playerScore
//         }
//         if(result==false){
//             ++round;
//             ++computerScore
//         }
//     }
//     if(playerScore==3){
//         console.log("The computer wins the series 3-2!")
//     }
//     else{
//         console.log("You win the series 3-2!")
//     }
// }

// console.log(game())

// const playerSelection = window.prompt("Enter your selection: ")
// console.log(playerSelection)
// const computerSelection = computerPlay()
// console.log(computerSelection)
// console.log(rpsWinner("Paper", "Rock"))
// console.log(createRndInteger(1,3))





//UI

// select play buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors =  document.getElementById('scissors');

// select container contents
let roundResult = document.getElementById('roundResult');
let resultInfo = document.getElementById('resultInfo');
let playerImage = document.getElementById('playerImage');
let computerImage = document.getElementById('computerImage');





// select score spans
let pScore = document.getElementById('playerScore');
let  cScore = document.getElementById('computerScore');

pScore.textContent=0
cScore.textContent=0

console.log(playerScore)

rock.addEventListener('click', function (e) {
    const computerSelection = computerPlay();
    console.log(computerSelection);
    const result = playRound('Rock', computerSelection);
    updateDisplay(result, 'Rock', computerSelection);

  });

paper.addEventListener('click', function (e) {
    const computerSelection = computerPlay();
    console.log(computerSelection);
    const result = playRound('Paper', computerSelection);
    updateDisplay(result, 'Paper', computerSelection);
});

scissors.addEventListener('click', function (e) {
    const computerSelection = computerPlay();
    console.log(computerSelection);
    const result = playRound('Scissors', computerSelection);
    updateDisplay(result, 'Scissors', computerSelection);
});

function updateDisplay(result, playerSelection, computerSelection){
    updateImages(playerSelection, computerSelection);
    updateResult(result, playerSelection, computerSelection);
}

function updateScore(result){
    if(result){
        ++playerScore;
        pScore.textContent=0;
        
    }
    else if(result==false){
        ++computerScore;
        cScore.textContent= 0;
    }
    else{

    }
}

function updateResult(result, playerSelection, computerSelection){
    if(result){
        roundResult.textContent = "You won!";
        resultInfo.textContent = `${playerSelection} beats ${computerSelection}`;

        ++playerScore;
        pScore.textContent=playerScore;

    }
    else if(result==false){
        roundResult.textContent = "You lost";
        resultInfo.textContent = `${computerSelection} beats ${playerSelection}`;

        ++computerScore;
        cScore.textContent= computerScore;
    }
    else{
        roundResult.textContent = "Tie. Shoot again.";
        resultInfo.textContent = '';
    }
}

function updateImages(playerSelection, computerSelection){
    switch(playerSelection){
        case 'Rock':
            playerImage.src='images/rock.png';
            break;
        case 'Paper':
            playerImage.src='images/paper.png';
            break;
        case 'Scissors':
            playerImage.src='images/scissors.png';
            break;
    }
    console.log(computerSelection);
    switch(computerSelection){
        case 'Rock':
            computerImage.src='images/rock.png';
            break;
        case 'Paper':
            computerImage.src='images/paper.png';
            break;
        case 'Scissors':
            computerImage.src='images/scissors.png';
            break;
    }
}





function endGame(){
    if(Math.max(playerScore,computerScore)=5){

    }
}




