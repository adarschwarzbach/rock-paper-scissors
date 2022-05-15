


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

let playerSelection = window.prompt("Enter your selection: ");


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    playerSelection = capitalizeFirstLetter(playerSelection);
    const result = rpsWinner(playerSelection, computerSelection);
    if(result==null){
        return "Tie! Play again";
    }
    else if(result == true){
        return "You win ";
    }
}

function rpsWinner(playerSelection, computerSelection){
    const r = "rock";
    const p = "paper";
    const s = "scissors";
    if(playerSelection==computerSelection){
        return null;
    }
    else if( (playerSelection== r && computerSelection== s) || (playerSelection==p && computerSelection==r) || (playerSelection==s && computerSelection==p)){
        return true;
    }
    else{
        return false;
    }
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("dog"))