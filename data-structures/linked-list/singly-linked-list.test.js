const assert = require('assert');

const SinglyLinkedList = require('./singly-linked-list');

describe('Singly Linked List', () => {
  it('should ADD LAST element', () => {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.addLast(1);
    singlyLinkedList.addLast(2);
    singlyLinkedList.addLast(3);

    assert.strictEqual(singlyLinkedList.count, 3);
    assert.strictEqual(singlyLinkedList.first.value, 1);
  });

  it('should REMOVE LAST element', () => {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.addLast(1);
    singlyLinkedList.addLast(2);
    singlyLinkedList.addLast(3);

    const lastElement = singlyLinkedList.removeLast();

    assert.strictEqual(singlyLinkedList.count, 2);
    assert.strictEqual(singlyLinkedList.first.value, 1);
    assert.strictEqual(lastElement.value, 3);
  });

  it('should ADD FIRST element', () => {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.addFirst(1);
    singlyLinkedList.addFirst(2);
    singlyLinkedList.addFirst(3);

    assert.strictEqual(singlyLinkedList.count, 3);
    assert.strictEqual(singlyLinkedList.first.value, 3);
  });

  it('should REMOVE FIRST element', () => {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.addLast(1);
    singlyLinkedList.addLast(2);
    singlyLinkedList.addLast(3);

    const firstElement = singlyLinkedList.removeFirst();

    assert.strictEqual(singlyLinkedList.count, 2);
    assert.strictEqual(singlyLinkedList.first.value, 2);
    assert.strictEqual(firstElement.value, 1);
  });
});
