const assert = require('assert');

const { isWinnerRegex, isWinner } = require('./amazon-fresh-promo');

describe('Amazon Fresh Promo', () => {
  it('should check for winner Example #1 (regular expression)', () => {
    const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
    const shoppingCart = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana'];

    assert.strictEqual(isWinnerRegex(codeList, shoppingCart), true);
  });

  it('should check for winner Example #2 (regular expression)', () => {
    const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
    const shoppingCart = ['banana', 'orange', 'banana', 'apple', 'apple'];

    assert.strictEqual(isWinnerRegex(codeList, shoppingCart), false);
  });

  it('should check for winner Example #3 (regular expression)', () => {
    const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
    const shoppingCart = ['apple', 'banana', 'apple', 'banana', 'orange', 'banana'];

    assert.strictEqual(isWinnerRegex(codeList, shoppingCart), false);
  });

  it('should check for winner Example #4 (regular expression)', () => {
    const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
    const shoppingCart = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana'];

    assert.strictEqual(isWinnerRegex(codeList, shoppingCart), true);
  });

  it('should check for winner Example #5 (regular expression)', () => {
    const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
    const shoppingCart = ['apple', 'apple', 'orange', 'orange', 'banana', 'apple', 'banana', 'banana'];

    assert.strictEqual(isWinnerRegex(codeList, shoppingCart), true);
  });

  it('should check for winner Example #1 (two pointers)', () => {
    const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
    const shoppingCart = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana'];

    assert.strictEqual(isWinner(codeList, shoppingCart), true);
  });

  it('should check for winner Example #2 (two pointers)', () => {
    const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
    const shoppingCart = ['banana', 'orange', 'banana', 'apple', 'apple'];

    assert.strictEqual(isWinner(codeList, shoppingCart), false);
  });

  it('should check for winner Example #3 (two pointers)', () => {
    const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
    const shoppingCart = ['apple', 'banana', 'apple', 'banana', 'orange', 'banana'];

    assert.strictEqual(isWinner(codeList, shoppingCart), false);
  });

  it('should check for winner Example #4 (two pointers)', () => {
    const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
    const shoppingCart = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana'];

    assert.strictEqual(isWinner(codeList, shoppingCart), true);
  });

  it('should check for winner Example #5 (two pointers)', () => {
    const codeList = [['apple', 'apple'], ['banana', 'anything', 'banana']];
    const shoppingCart = ['apple', 'apple', 'orange', 'orange', 'banana', 'apple', 'banana', 'banana'];

    assert.strictEqual(isWinner(codeList, shoppingCart), true);
  });
});