class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  //Method to set the next node for a node
  setNextNode(node) {
    //Check if the node is instance of Node class, becuase user could pass any value like string or integer
    if(node instanceof Node || node === null){
      this.next = node;
    }
    else{
      throw new Error("Next node must be type of class Node.\n Given type:" + typeof(node));
    }
  }
}

const firstNode = new Node('I am an instance of a Node!');
const secondNode = "I am next string node";
firstNode.setNextNode(secondNode);//Throws an error to the console

module.exports = Node;