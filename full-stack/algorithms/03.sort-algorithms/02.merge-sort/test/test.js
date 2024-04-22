console.log = () => {};
const { expect } = require('chai');
const myModule = require('../index')

describe('', () => {
  it('The `mergeSort()` function should return the `inputArray` sorted.', () => {
 		const inputArray = [3, 34, 8, 2, 90, 54];
    const expectedReturn = [2, 3, 8, 34, 54, 90];

    const actualReturn = myModule.mergeSort(inputArray);

    expect(actualReturn).to.deep.equal(expectedReturn);
  });
});
