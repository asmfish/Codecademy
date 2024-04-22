  //Iteration
  function findNodeByIteration(data) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  //Recursion
  function findNodeRecursively(data, currentNode = this.head) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.data === data) {
      return currentNode;
    } else {
      return this.findNodeRecursively(data, currentNode.next);
    }
  }