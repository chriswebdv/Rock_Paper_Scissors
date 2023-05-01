
// Computer choice function

const myArray = ['rock', 'paper', 'scissors']; 
function getComputerChoice(){
    return myArray[(Math.random() * myArray.length) | 0];
}

//let ans = getComputerChoice();
//console.log(ans);

// single game function

function playRound(playerSelection, computerSelection) {
  str = `Your win! ${playerSelection.toLowerCase()} now ${computerSelection}`
  return str;
}
   
//let playerSelection = 'rock'
const computerSelection = getComputerChoice();

//playRound(playerSelection, computerSelection);

// Five game function

function game() {
  fiveg = playRound(playerSelection,  computerSelection);
  return fiveg;
}
let playerSelection = prompt('pick one:');
const final = game();
console.log(final);
console.log(final);
console.log(final);
console.log(final);
console.log(final);


