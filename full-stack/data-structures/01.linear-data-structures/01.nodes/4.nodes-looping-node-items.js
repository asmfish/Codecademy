class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  getNextNode() {
    return this.next;
  }
}

const strawberryNode = new Node('Berry Tasty');
const vanillaNode = new Node('Vanilla');
const coconutNode = new Node('Coconuts for Coconut');

/**
 * Now let’s put these ice cream nodes in order. vanilla goes first, followed by strawberry. Finally, coconut goes after strawberry.
 */
vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;

while(currentNode !== null){
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}

/*
Vanilla
Berry Tasty
Coconuts for Coconut
*/

module.exports = Node;
