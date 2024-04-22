const LinkedList = require('./LinkedList');

//1. Linkedlist initializtion
const seasons = new LinkedList();//Head null
seasons.printList();//<head> <tail>

//2. Adding to head
seasons.addToHead("summer");
seasons.addToHead("spring");
seasons.printList();//<head> spring summer <tail>

//3. Adding to tail
seasons.addToTail("fall");
seasons.addToTail("winter");
seasons.printList();//<head> spring summer fall winter <tail>

//4. Remove head element
seasons.removeHead();
seasons.printList();//<head> summer fall winter <tail>
