console.log = () => {};
const { expect } = require('chai');
const BinaryTree = require('../BinaryTree');

describe('', function () {
  it('', function() {

    const btree = new BinaryTree(100);
  	const funcString = btree.insert.toString();

    expect(funcString, 'Did you add an `if` statement inside the `else` block to test if the right child node exists?').to.match(/this.right/);
   
    // test that btree.right is not null
    btree.insert(150);    
    // test that btree.right.value is valid
    if (btree.right) {
      expect(btree.right.value, 'Did you call `.insert()` on `this.right`?').to.equal(150);
      expect(btree.right.depth, 'Did you call `.insert()` on `this.right`?').to.equal(2);      
    } else {
	    expect(btree.right, 'Did you instantiate a `BinaryTree` class with arguments `value` and `this.depth+1` and assign it to `this.right` if right child node does not exist?').to.not.equal(null);
    }
    
    btree.insert(175);
    
    // test that btree.right.right.value is valid   
		if (btree.right) {
      if (btree.right.right) {
    	expect(btree.right.right.value, 'Did you call `.insert()` for `this.right` when right child node exist?').to.equal(175);
      } else {
        expect(btree.right.right,'Did you call `.insert()` for `this.right` when right child node exist?').to.not.equal(null);
      }
    }

  });
});
