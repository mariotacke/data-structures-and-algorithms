class Node {
  constructor (value, rank) {
    this.value = value;
    this.rank = rank;
  }
}

class MaxBinaryHeap {
  constructor() {
    this._heap = [];
  }

  _getParentIndex (index) {
    return Math.floor((index - 1) / 2);
  }

  _getLeftChildIndex (index) {
    return index * 2 + 1;
  }

  _getRightChildIndex (index) {
    return index * 2 + 2;
  }

  _getLeftChildRank (index) {
    return this._getRank(this._getLeftChildIndex(index));
  }

  _getRightChildRank (index) {
    return this._getRank(this._getRightChildIndex(index));
  }

  _getRank (index) {
    return this._heap[index].rank;
  }

  _hasParent (index) {
    return this._getParentIndex(index) >= 0;
  }

  _hasLeftChild (index) {
    return this._getLeftChildIndex(index) < this._heap.length;
  }

  _hasRightChild (index) {
    return this._getRightChildIndex(index) < this._heap.length;
  }

  _swap (indexA, indexB) {
    const node = this._heap[indexA];

    this._heap[indexA] = this._heap[indexB];
    this._heap[indexB] = node;
  }

  peek () {
    if (!this._heap.length) {
      return null;
    }

    return this._heap[0].value;
  }

  push (value, rank) {
    const node = new Node(value, rank);

    this._heap.push(node);

    let currentIndex = this._heap.length - 1;

    while (this._hasParent(currentIndex)) {
      const parentIndex = this._getParentIndex(currentIndex);

      if (this._getRank(currentIndex) > this._getRank(parentIndex)) {
        this._swap(parentIndex, currentIndex);

        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  pop () {
    if (!this._heap.length) {
      return null;
    }

    this._swap(0, this._heap.length - 1);

    const node = this._heap.pop();

    let currentIndex = 0;

    while (this._hasLeftChild(currentIndex)) {
      let smallestChildIndex = this._getLeftChildIndex(currentIndex);

      if (this._hasRightChild(currentIndex) && this._getRightChildRank(currentIndex) > this._getLeftChildRank(currentIndex)) {
        smallestChildIndex = this._getRightChildIndex(currentIndex);
      }

      if (this._getRank(smallestChildIndex) > this._getRank(currentIndex)) {
        this._swap(smallestChildIndex, currentIndex);

        currentIndex = smallestChildIndex;
      }
    }

    return node.value;
  }
}

module.exports = MaxBinaryHeap;