const TreeNode = require('./TreeNode');
const tree = new TreeNode(1);

tree.addChildToTree(15);
const node = new TreeNode(30);
tree.addChildToTree(node);

console.log("Initial tree: ",tree);

tree.removeChildFromTree(15);
console.log("After removing 15 ", tree);

tree.removeChildFromTree(node);
console.log("After removing 30 ", tree);
