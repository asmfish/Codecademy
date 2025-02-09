const { quicksort, partition } = require('./quicksort');

const randomize = () => Math.floor(Math.random() * 40);

let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(randomize());
}

numbers = [ 5, 4, 3, 2, 1 ];

console.log('Before quicksort:', numbers);
const sorted = quicksort(numbers);
console.log('After  quicksort:', sorted);
