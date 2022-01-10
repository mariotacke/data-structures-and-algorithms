const assert = require('assert');

const BinarySearchTree = require('./binary-search-tree');

describe('Binary Search Tree', () => {
  it('should insert elements into the tree', () => {
    const binarySearchTree = new BinarySearchTree();
    const elements = [8, 3, 10, 1, 6, 14, 4, 7, 13];

    for (const element of elements) {
      binarySearchTree.insert(element);
    }

    assert.strictEqual(binarySearchTree.size, 9);
  });

  it('should return array in-order', () => {
    const binarySearchTree = new BinarySearchTree();
    const elements = [8, 3, 10, 1, 6, 14, 4, 7, 13];

    for (const element of elements) {
      binarySearchTree.insert(element);
    }

    assert.strictEqual(binarySearchTree.size, 9);
    assert.deepStrictEqual(binarySearchTree.toArray(), [1, 3, 4, 6, 7, 8, 10, 13, 14]);
  });
});