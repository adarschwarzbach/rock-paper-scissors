// GAMEPLAY

// Initalize overall score
let playerScore = 0;
let computerScore = 0;

// Generate the computers move
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


// Output winner of a given round of RPS - redundant due to rpsWinner function
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = capitalizeFirstLetter(playerSelection);
    const result = rpsWinner(playerSelection, computerSelection);
    if(result==null){
        return null;
    }
    else if(result == true){
        return true;
    }
    else{
        return false;
    }
}


// Helper for playRound, determines winner of RPS round 
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


// Helper - capitalize the first letter of a string
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// UI

// Initalize variables needed to make UI interactive 

// select play buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors =  document.getElementById('scissors');

// select container contents
let roundResult = document.getElementById('roundResult');
let resultInfo = document.getElementById('resultInfo');
let playerImage = document.getElementById('playerImage');
let computerImage = document.getElementById('computerImage');

// select score spans and initalize game score
let pScore = document.getElementById('playerScore');
let  cScore = document.getElementById('computerScore');
pScore.textContent=0;
cScore.textContent=0;

// select modal
let modal = document.getElementById('modal');
let description = document.getElementById('description');
const replay = document.getElementById('replay');



// Add on-click attributes for each RPS move and call helpers to update game/UI
rock.addEventListener('click', function (e) {
    const computerSelection = computerPlay();
    resultInfo.style.opacity = "100%"
    const result = playRound('Rock', computerSelection);
    updateGame(result, 'Rock', computerSelection);

  });

paper.addEventListener('click', function (e) {
    const computerSelection = computerPlay();
    resultInfo.style.opacity = "100%"
    const result = playRound('Paper', computerSelection);
    updateGame(result, 'Paper', computerSelection);
});

scissors.addEventListener('click', function (e) {
    const computerSelection = computerPlay();
    resultInfo.style.opacity = "100%"
    const result = playRound('Scissors', computerSelection);
    updateGame(result, 'Scissors', computerSelection);
});



// Wrapper function to cleanly call other helpers
function  updateGame(result, playerSelection, computerSelection){
    updateImages(playerSelection, computerSelection);
    updateResult(result, playerSelection, computerSelection);
    endGame(playerScore,computerScore);
}

// Helper - update header to show results of round, update game score
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
        resultInfo.style.opacity = "0%"
    }
}

// Helper to change selection for each gameplay round
function updateImages(playerSelection, computerSelection){
    switch(playerSelection){
        case 'Rock':
            playerImage.src='images/rock.png';
            playerImage.style.borderRadius = "10%";
            break;
        case 'Paper':
            playerImage.src='images/paper.png';
            playerImage.style.borderRadius = "10%";
            break;
        case 'Scissors':
            playerImage.src='images/scissors.png';
            playerImage.style.borderRadius = "10%";
            break;
    }
    switch(computerSelection){
        case 'Rock':
            computerImage.src='images/rock.png';
            computerImage.style.borderRadius = "10%";
            break;
        case 'Paper':
            computerImage.src='images/paper.png';
            computerImage.style.borderRadius = "10%";
            break;
        case 'Scissors':
            computerImage.src='images/scissors.png';
            computerImage.style.borderRadius = "10%";
            break;
    }
}

// Check if game is over, call modal to screen
function endGame(playerScore, computerScore){
    if(playerScore ==5){
        modal.style.display = "block";
        description.textContent = `You have defeated the computer!\n Final score: ${playerScore} - ${computerScore}`;
    }
    if(computerScore == 5){
        modal.style.display = "block";
        description.textContent = `You have been defeated.\n Final score: ${computerScore} - ${playerScore}`
    }
}


//  If user selects to play again, reset UI and game variables
replay.addEventListener('click', function (e) {
    modal.style.display = "none";
    playerScore=0;
    computerScore=0;
    playerImage.src='images/playerLoad.gif';
    computerImage.src='images/villianLoad.gif';
    playerImage.style.borderRadius = "50%";
    computerImage.style.borderRadius = "50%";
    pScore.textContent=0;
    cScore.textContent=0;
    roundResult.textContent = "Select Your Attack";
    resultInfo.textContent = "The first player to score 5 points wins";
  });
