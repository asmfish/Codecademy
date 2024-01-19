const Calculate = {
    factorial(inputValue){
      if (inputValue === 0 || inputValue === 1) { 
          return 1; 
      } else { 
          return inputValue * this.factorial(inputValue - 1); 
      } 
    }
  }
  
  module.exports = Calculate;
  
  
  