class Node {
  constructor (value) {
    this.value = value;
    this._next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.first = null;
    this.count = 0;
  }

  addLast (value) {
    const newNode = new Node(value);

    let currentNode = this.first;

    if (!currentNode) {
      this.first = newNode;
    } else {
      while (currentNode._next) {
        currentNode = currentNode._next;
      }

      currentNode._next = newNode;
    }

    this.count++;
  }

  removeLast () {
    if (!this.first) {
      throw new Error('The linked list is empty.');
    }

    let currentNode = this.first;

    while (currentNode._next && currentNode._next._next) {
      currentNode = currentNode._next;
    }

    const removedNode = currentNode._next;

    currentNode._next = null;

    this.count--;

    return removedNode;
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

    const removedNode = this.first;

    this.first = this.first._next;

    this.count--;

    return removedNode;
  }
}

module.exports = SinglyLinkedList;