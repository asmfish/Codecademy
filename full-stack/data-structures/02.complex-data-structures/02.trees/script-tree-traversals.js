const TreeNode = require('./TreeNode');
const tree = new TreeNode(1);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree.addChildToTree(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree.children[i].addChildToTree(randomize());
  }
}

// add third-level children
/*for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      tree.children[i].children[j].addChildToTree(randomize());
    }
  }
}*/

console.log(tree);

// pretty-print the tree
tree.print();

console.log("Depth first traversal");

//depth first traversal - traverses the tree with top-down approach for each child
tree.traverseByDepthFirst();

console.log("Breadth first traversal");

//breadth first traversal -traverses the tree level by level
tree.traverseByBreadthFirst()

