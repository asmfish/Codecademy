const BinaryTree = require('./BinaryTree');

// create a BinaryTree here
/*const bt = new BinaryTree(100);

// insert values to the BinaryTree here
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);*/
//13, 0, 2, 16, 9, 19
const bt = new BinaryTree(13);
bt.insert(0);
bt.insert(2);
bt.insert(16);
bt.insert(9);
bt.insert(19);

console.log(bt);
/*
						100
				50		 			125
			25		75			null	null

*/

//Example 2
/*
const BinaryTree = require('./BinaryTree');
const randomize = () => Math.floor(Math.random() * 40);
const bt = new BinaryTree(15);
let numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(randomize());
  bt.insert(numbers[i]);
}

console.log(`Inserted [ ${numbers} ] to binary tree`);

console.log('Depth First Traversal');
bt.depthFirstTraversal()
*/