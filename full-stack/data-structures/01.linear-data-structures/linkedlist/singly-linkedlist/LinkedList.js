const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    //Make the new node as head
    this.head = newHead;

    //if the current node is not null or empty then add it to the new head.
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data){
    let tail = this.head;
    if(!tail){
      //If tail is null means that list is empty so we need to create new head node with the data.
      this.head = new Node(data)
    }
    else{
      //Iterate through the list until we find the end so we can add tail to the end.
      while(tail.getNextNode() !== null){
        tail = tail.getNextNode();
      }

      //Set the tail's next node
      tail.setNextNode(new Node(data));
    }
  }
  
  removeHead(){
    const removedHead = this.head;

    //If removeHead is empty that means list empty, nothing to remove
    if(!removedHead){
      return;
    }

    //Set list's head to the removedHead's next node.
    this.head = removedHead.getNextNode();

    return removedHead.data;
  }
  
  //Output format: <head> Sunday Monday Tuesday Wednesday Thursday Friday Saturday <tail>
  printList(){
	let currentNode = this.head;
	let output = '<head> ';

	while(currentNode !== null){
	  output += currentNode.data + ' ';
	  currentNode = currentNode.getNextNode();
	}

	output += '<tail>';
	console.log(output);
  }

}

module.exports = LinkedList;