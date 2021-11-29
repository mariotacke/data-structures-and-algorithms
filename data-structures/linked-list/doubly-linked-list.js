class Node {
  constructor (value) {
    this.value = value;
    this._previous = null;
    this._next = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.first = null;
    this.last = null;
    this.count = 0;
  }

  addLast (value) {
    const newNode = new Node(value);

    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const lastNode = this.last;

      lastNode._next = newNode;
      newNode._previous = lastNode;
      this.last = newNode;
    }

    this.count++;
  }

  removeLast () {
    if (!this.first) {
      throw new Error('The linked list is empty.');
    }

    let lastNode = this.last;

    if (!lastNode._previous) {
      this.first = null;
      this.last = null;
    } else {
      const previousNode = lastNode._previous;

      previousNode._next = null;
      this.last = previousNode;
    }

    this.count--;

    return lastNode;
  }

  addFirst (value) {
    const firstNode = this.first;
    const newNode = new Node(value);

    newNode._next = firstNode;
    this.first = newNode;
    this.count++;
  }

  removeFirst () {
    if (!this.first) {
      throw new Error('The linked list is empty.');
    }

    const firstNode = this.first;

    if (!firstNode._next) {
      this.first = null;
      this.last = null;
    } else {
      const nextNode = this.first._next;

      nextNode._previous = null;
      this.first = nextNode;
    }

    this.count--;

    return firstNode;
  }
}

module.exports = DoublyLinkedList;