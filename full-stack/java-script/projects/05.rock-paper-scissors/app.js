console.log('Hi!');

//Function to get user choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('Error: Invalid choice!');
  }
}

//console.log(getUserChoice('scissors'));

//Function to get computer choice
const getComputerChoice = () => {
  const pcRandomNumber = Math.floor(Math.random() * 3);
  let pcChoice = '';
  if(pcRandomNumber === 0){
    pcChoice = 'rock';
  }
  else if(pcRandomNumber === 1){
    pcChoice = 'paper';
  }
  else{
    pcChoice = 'scissors';
  }

  return pcChoice;
}

//console.log(getComputerChoice());

//Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  let gameResult = '';
  if(userChoice === 'bomb'){
    return 'User won!';
  }

  if(userChoice === computerChoice){
    return 'The game result was a tie.';
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      gameResult = 'Computer won!';
    }
    else{
      gameResult = 'User won!';
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
       gameResult = 'Computer won!';
    }
    else{
      gameResult = 'User won!';
    }
  }

  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      gameResult = 'Computer won!';
    }
    else{
      gameResult = 'User won!';
    }
  }

  return gameResult;
}

//userChoice, computerChoice
//console.log(determineWinner('rock','scissors'));

//Function to play the game
function playGame() {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();

  console.log(`User choice: ${userChoice}\nComputer Choice: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

//Start game
playGame();



