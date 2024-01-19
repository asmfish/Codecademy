var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('5! returns 120', () =>{
      //Setup
      const inputValue = 5;
      const expectedResult = 120;

      //Exercise
      const actualResult = Calculate.factorial(inputValue);

      //Verify
      assert.equal(actualResult, expectedResult);
    });

    it('3! return 6', () =>{
      //Setup
      const inputValue = 3;
      const expectedResult = 6;

      //Exercise
      const actualResult = Calculate.factorial(inputValue);

      //Verify
      assert.equal(actualResult, expectedResult);
    });

    it('0! return 1', () =>{//Edge test
      //Setup
      const inputValue = 0;
      const expectedResult = 1;

      //Exercise
      const actualResult = Calculate.factorial(inputValue);

      //Verify
      assert.equal(actualResult, expectedResult);
    });

  });
});