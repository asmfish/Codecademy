//Imports
const assert = require('assert');
const Rooster = require('../index');

describe('rooster', () =>{
  describe('.announceDawn', () =>{
    it('returns a rooster call', () =>{
      //Setup
      const expected = 'moo!';

      //Exercise
      const actual = Rooster.announceDawn();

      //Verify
      assert.equal(expected, actual);
    })
  });

  describe('.timeAtDawn', () =>{
    it('returns its argument as a string', () =>{
      //Setup
      const hour = '9';

      //Exercise
      const actual = Rooster.timeAtDawn(9);

      //Verify
      assert.strictEqual(hour, actual);
    });

    it('throws an error if passed a number less than 0', () =>{
      //Setup
      const hour = -1;

      //Verify
      assert.throws(() =>{Rooster.timeAtDawn(hour)}, RangeError);
    });

    it('throws an error if passed a number greater than 23', () =>{
      //Setup
      const hour = 24;

      //Verify
      assert.throws(() =>{Rooster.timeAtDawn(hour)}, RangeError);
    })
  });
})