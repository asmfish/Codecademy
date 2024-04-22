const Node = require('./Node');

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size);
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }

    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    console.log(arrayIndex)
    this.hashmap[arrayIndex] = value;
  }
  
  retrieve(key) {
    const arrayIndex = this.hash(key);
    return this.hashmap[arrayIndex];
  }
}

module.exports = HashMap;

const currencies = new HashMap(2);
currencies.assign('canada', 'cad');
currencies.assign('china', 'cny');

/**
 * Here collision occurs because the key generated for 'canada' and 'china' is the same,which is 1.
 * So this overwrites the previous data, that is why the result is 'cny'
 * 
 */
console.log(currencies.retrieve('canada'));//cny
console.log(currencies.retrieve('china'));//cny

