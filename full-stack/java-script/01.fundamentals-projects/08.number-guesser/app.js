let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num) => {
  return num >= 0 ? num : -1 * num;
}

const compareGuesses = (userGuess, pcGuess, target) => {
  if(userGuess < 0 || userGuess > 9){
    window.alert('The number is out of range!');
    return;
  }
  if(userGuess === pcGuess || (getAbsoluteDistance(userGuess - target) < getAbsoluteDistance(pcGuess - target))){
    return true;
  }
  else {
    return false;
  }
}

const updateScore = (player) =>{
  if(player === 'human'){
    humanScore ++;
  }
  else{
    computerScore++; 
  }
}

const advanceRound = () =>{
  currentRoundNumber++;
}


/*let userGuess = 8;
let target = generateTarget();
let pcGuess = Math.floor(Math.random() * 10);

console.log(userGuess + ':' + pcGuess + ':' + target);

if(compareGuesses(userGuess, pcGuess, target)){
  updateScore('human')
  console.log('Human Won!')
}
else{
  updateScore('computer')
  console.log('PC won!');
}
console.log('humanScore:' + humanScore + ' PcSoce:' + computerScore);

console.log('Round:' + currentRoundNumber);
advanceRound();*/





