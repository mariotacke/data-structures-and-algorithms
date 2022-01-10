class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
    this.size = 0;
  }

  #insert (value, node = this.root) {
    if (!node) {
      return new Node(value);
    } else if (value <= node.value) {
      node.left = this.#insert(value, node.left);
    } else {
      node.right = this.#insert(value, node.right);
    }

    return node;
  }

  insert (value) {
    const node = this.#insert(value);

    if (!this.root) {
      this.root = node;
    }

    this.size++;
  }

  #traverseInOrder () {
    const elements = [];

    const inOrder = (node) => {
      if (node) {
        inOrder(node.left);
        elements.push(node.value);
        inOrder(node.right);
      }
    };

    inOrder(this.root);

    return elements;
  }

  toArray () {
    const orderedElements = this.#traverseInOrder();

    return orderedElements;
  }
}

module.exports = BinarySearchTree;