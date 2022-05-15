

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
        return "Tie! Play again";
    }
    else if(result == true){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
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


const playerSelection = window.prompt("Enter your selection: ")
console.log(playerSelection)
const computerSelection = computerPlay()
console.log(computerSelection)
console.log(rpsWinner(playerSelection, computerSelection))
console.log(playRound(playerSelection, computerSelection))