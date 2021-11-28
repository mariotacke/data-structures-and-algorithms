const assert = require('assert');

const MaxBinaryHeap = require('./max-binary-heap');

describe('Max Binary Heap', () => {
  it('should PUSH elements onto the heap', () => {
    const maxBinaryHeap = new MaxBinaryHeap();

    assert.strictEqual(maxBinaryHeap.peek(), null);
    maxBinaryHeap.push(3, 30);
    assert.strictEqual(maxBinaryHeap.peek(), 3);
    maxBinaryHeap.push(2, 20);
    assert.strictEqual(maxBinaryHeap.peek(), 3);
    maxBinaryHeap.push(5, 50);
    assert.strictEqual(maxBinaryHeap.peek(), 5);
    maxBinaryHeap.push(4, 40);
    assert.strictEqual(maxBinaryHeap.peek(), 5);
    maxBinaryHeap.push(1, 10);
    assert.strictEqual(maxBinaryHeap.peek(), 5);
  });

  it('should POP largest element from the heap', () => {
    const maxBinaryHeap = new MaxBinaryHeap();

    maxBinaryHeap.push(3, 30);
    maxBinaryHeap.push(2, 20);
    maxBinaryHeap.push(5, 50);
    maxBinaryHeap.push(4, 40);
    maxBinaryHeap.push(1, 10);

    assert.strictEqual(maxBinaryHeap.peek(), 5);

    assert.strictEqual(maxBinaryHeap.pop(), 5);
    assert.strictEqual(maxBinaryHeap.pop(), 4);
    assert.strictEqual(maxBinaryHeap.pop(), 3);
    assert.strictEqual(maxBinaryHeap.pop(), 2);
    assert.strictEqual(maxBinaryHeap.pop(), 1);
    assert.strictEqual(maxBinaryHeap.pop(), null);
  });
});
