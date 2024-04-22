/**
 * Task description
 * Simulate navigate back and foward in a web browser using stack.
 * 1. We use two stacks to store backPages and nextPages
 * 2. Enter new page
 * 3. Navigate backward or forward
 * 4. Quit the program
 */
const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();//npm i prompt-sync

// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();//stores history of visited pages
const nextPages = new Stack();//pages move here when user goes back to pages in backPages
let currentPage = 'https://www.w3schools.com/js/';//Default page

// ------------------------------
// Helper Functions
// ------------------------------
/**
 * Function to display the currentPage info
 * 1. Accepts the action NEW, BACK, NEXT, DEFAULT
 */
const showCurrentPage = (action) =>{
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log('Back page = ', backPages.peek());
  console.log('Next page = ', nextPages.peek());
}

/**
 * Function to handle when user opens new page
 * 1. Push currentPage to history - backPages
 * 2. Change currentPage to the new page
 * 3. Remove all entries from nextPages stack
 * 4. Display info about the new currentPage
 */
const newPage = (page) =>{
  backPages.push(currentPage);
  currentPage = page;
  while(!nextPages.isEmpty()){
    nextPages.pop();
  }

  showCurrentPage("NEW: ")
}

/**
 * To naviage backwards
 * 1. Push currentPage to nextPages stack
 * 2. Remove top item from backPages and set it as currentPage
 * 3. Display the new currentPage info
 */
const backPage = () =>{
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage("BACK: ");
}

/**
 * To manage forward navigation
 * 1. push currentPage to the backPages stack
 * 2. Remove top item from nextpages and set it as currentPage
 * 3. Display the currentPage info
 */
const nextPage = () =>{
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ")
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = '\nB|b for back page';
const nextInfo = '\nN|n for next page';
const quitInfo = '\nQ|q for quit';
const question = 'Where would you like to go today? '

let finish = false;//controls program termination
let showBack = false;//controls backward navigation
let showNext = false;//controls forward navigation

// ------------------------------
// User Interface Part 1
// ------------------------------
showCurrentPage('DEFAULT: ');
/**
 * The while loop simulates a UI 
 * 1. Display instructions for the user on how to do things
 * 2. Get user input 
 * 3. Process the input and make decisions
 */
while(!finish){
  let instructions = baseInfo;

  //If backPages has content then enable backward navigation, show 'B|b'
  if(backPages.peek() != null){
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;//Enable backward navigation
  }
  else{
    showBack = false;
  }

  //If nextPages has content then enable forward navigation, show 'N|n'
  if(nextPages.peek() != null){
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;//Enable forward navinagtion
  }
  else{
    showNext = false;
  }

  //Enable user to quit the program, show 'Q|q'
  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);
  
  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  const answer = prompt(question);
  const answerLowercase = answer.toLowerCase();

  //If the answer is other than n->next, b-.back and q->quit, i.e url
  if(["n", "b", "q"].indexOf(answerLowercase) === -1){
    newPage(answer);//Navigate to the new page entered
  }
  else if(showNext === true && answerLowercase === 'n'){
    nextPage();
  }
  else if(showBack === true && answerLowercase === 'b'){
    backPage();
  }
  else if(answerLowercase === 'b'){
    //Invalid entry backpages stack history empty
    console.log('can not navigate back. Stack is empty.');
  }
  else if(answerLowercase === 'n'){
    //Invalid entry nextPages stack history empty
    console.log('can not navigate next. Stack is empty.');
  }
  else if(answerLowercase === 'q'){
    //Terminate the program
    finish = true;
  }
}