class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }
  
    hash(key) {
      let hashCode = 0;
      for (let i = 0; i < key.length; i++) {
        /**
         * cat -> 11 and tac - 17 (eventhough they have the same letters, so adding hashcode 2 times solves the problem.)
         * Without this the hashCode would have been always 6 for cat and tac
         */
        hashCode += hashCode + key.charCodeAt(i);
      }
      return hashCode % this.hashmap.length;
    }
  
    assign(key, value) {
      const arrayIndex = this.hash(key);
      this.hashmap[arrayIndex] = value;
    }
  
    retrieve(key){
      const arrayIndex = this.hash(key);
      return this.hashmap[arrayIndex];
    }
    
  }
  
  module.exports = HashMap;
  
  const glossary = new HashMap(3);
  glossary.assign('semordnilap', 'Words that form different words when reversed');
  
  console.log(glossary.retrieve('semordnilap'));
  