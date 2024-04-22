const LinkedList = require('./LinkedList');
const Node = require('./Node');
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null)
      .map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);//check for keys 'cat' and 'tac', generates d/t hash
    }
    return hashCode % this.hashmap.length;
  }

  /**
    * Hashmap with collision management is an array of linked lists
    */
  assign(key, value) {
    //Get the index for the supplied key from the hash function
    const arrayIndex = this.hash(key);

    //Get the linked list at the above index
    const linkedList = this.hashmap[arrayIndex];

    //Check if linkedlist head is null, if null we need to add to the head and return.
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }

    /**
     * Collision Looping
     * If linkedlist.head is not null that means we have items stored at the arrayIndex
     * So to store the new key value we need to make sure that if the same key exists in the linked list or not.
     * 1. If the key exists then we overwrite the value of the current node
     * 2. If the key does not exist and we are at the last node(tail node), then we set the next node to a new node with data = {key, value}
     */
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.getNextNode()) {
        const newNode = new Node({ key, value });
        current.setNextNode(newNode);
        break;
      }
      current = current.getNextNode();
    }
  }

  /**
   * Collision retrieving
   * While retriving data based on key follow the following
   * 1. First get the hashed index value of the key and then find the linkedList at that index
   * 2. Loop through the linkedList and check if the supplied key and linkedlis's data key matches
   * 3. If the key matches then return the key from the current linkedlist
   * 4. Otherwise keep looping to the nextNode.
   * 5. If no match found return null
   * 
   */
  retrieve(key) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    let current = linkedList.head;

    while(current){
      if(current.data.key === key){
        return current.data.value;
      }

      current = current.getNextNode();
    }

    return null;
  }
}

module.exports = HashMap;

const currencies = new HashMap(2);
currencies.assign('canada', 'cad');
currencies.assign('china', 'cny');

/**
 * Now the collision is resolved using separate chaining method
 */
console.log(currencies.retrieve('canada'));//cad
console.log(currencies.retrieve('china'));//cny