
const myArray = ['Rock', 'Paper', 'Scissors']; 
function getComputerChoice(myArray){
    return myArray[(Math.random() * myArray.length) | 0];
}
console.log(getComputerChoice(myArray));
