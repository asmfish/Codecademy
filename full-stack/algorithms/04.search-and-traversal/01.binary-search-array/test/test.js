console.log = () => {};
const { expect } = require('chai');
const myModule = require('../index')

describe('', () => {
  it('The function should return `5` if the `target` is equal to the first `indexToCheck` value, 28. There is something wrong with your first `if` condition.', () => {
    
    const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
    const target = 28;
    const expectedResult = 5;

    const actualResult = myModule.binarySearch(searchable, target);

    expect(actualResult).to.equal(expectedResult);
  });
  
  it('The function should return `null` if the `target` is not in the array.', () => {
    const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
    const target = 27;

    const actualResult = myModule.binarySearch(searchable, target);

    expect(actualResult).to.be.null;
  });
  
  it('The function does not find the correct index of a value in the bottom half of the `searchable` array. Check that your `else if` condition is `(target > checking)`. Inside this condition, set `left = indexToCheck + 1`. Inself the `else` block, set `right = indexToCheck`.', () => {
    const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
    const target = 2;
    const expectedResult = 1;

    const actualResult = myModule.binarySearch(searchable, target);

    expect(actualResult).to.equal(expectedResult);
  });
});
