
// Computer choice function

const myArray = ['rock', 'paper', 'scissors']; 
function getComputerChoice(){
    return myArray[(Math.random() * myArray.length) | 0];
}

//let ans = getComputerChoice();
//console.log(ans);

// single game function

function playRound(playerSelection, computerSelection) {
  return `You win! ${playerSelection.toLowerCase()} beat ${computerSelection}`;  
}
   
//const playerSelection = 'rock'
const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

// Five game function

function game() {
  function playRound(playerSelection, computerSelection) {
    return`You win! ${playerSelection.toLowerCase()} beat ${computerSelection}`; 
  }
}

const playerSelection = prompt('pick one:');
playRound(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);
//console.log(final);








