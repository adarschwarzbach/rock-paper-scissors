

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


function game(){
    console.log("Time to play Rock Paper Scissors. The game is best of 5");
    let computerScore = 0;
    let playerScore = 0;
    let round = 1;
    while(round<=5){
        console.log(`Round ${round}`);
        let playerSelection =  window.prompt("Enter your selection: ");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        if(result==true){
            ++round;
            ++playerScore
        }
        if(result==false){
            ++round;
            ++computerScore
        }
    }
    if(playerScore==3){
        console.log("The computer wins the series 3-2!")
    }
    else{
        console.log("You win the series 3-2!")
    }
}

console.log(game())

// const playerSelection = window.prompt("Enter your selection: ")
// console.log(playerSelection)
// const computerSelection = computerPlay()
// console.log(computerSelection)
// console.log(rpsWinner("Paper", "Rock"))
// console.log(createRndInteger(1,3))
