
const LinkedList = require('./LinkedList.js')

const testList = new LinkedList();
const days = ['Monday', 'Tuesday', 'Wednseday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < days.length; i++) {
  testList.addToTail(days[i]);
}

testList.printList();
removeNodeByData(testList, 'Monday');
testList.printList();
  
function removeNodeByData(list, data) {
    let currentNode = list.head;
    let prevNode = null;
    let nextNode = null;
    //If data matches with head node then remove head
    if(currentNode.data === data){
      list.removeHead();
    }
    else{
      while(currentNode.getNextNode() !== null){
        prevNode = currentNode;
        currentNode = currentNode.getNextNode();
        nextNode = currentNode.getNextNode();

        if(currentNode.data === data){
          prevNode.setNextNode(nextNode);
          list.head = prevNode;
          return;
        }
      }
    }
  
}

  