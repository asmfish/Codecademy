const { quicksort } = require('./quicksort');

let numbers = [];
let max = 5;
for (let i = max; i > 0; i--) {
  numbers.push(i);
}

console.log('Before :', numbers);
const sorted = quicksort(numbers, 0, 3);
console.log('After :', sorted);