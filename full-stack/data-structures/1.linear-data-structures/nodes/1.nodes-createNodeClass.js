class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  //Method to set next node
  setNextNode(node){
    this.next = node;
  }
}

const firstNode = new Node('I am an instance of a Node!');
const secondNode = new Node("I am second node!");
firstNode.setNextNode(secondNode);

console.log(firstNode);

/*
Node {
  data: 'I am an instance of a Node!',
  next: Node { data: 'I am second node!', next: null } }
*/

module.exports = Node;
