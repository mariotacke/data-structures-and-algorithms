class Node {
  constructor (value, rank) {
    this.value = value;
    this.rank = rank;
  }
}

class MaxBinaryHeap {
  #heap = [];

  constructor (heapArray = []) {
    if (Array.isArray(heapArray)) {
      this.#heap = heapArray.map((entry) => {
        if (Array.isArray(entry)) {
          return new Node(entry[0], entry[1]);
        } else if (Number.isInteger(entry)) {
          return new Node(entry, entry);
        }
      });

      this.#heapify();
    }
  }

  static from (object) {
    return new MaxBinaryHeap(object);
  }

  #heapify () {
    let lastInternalNodeIndex = Math.floor((this.#heap.length - 2) / 2);
    let index = lastInternalNodeIndex;

    while (index >= 0) {
      this.#pushDown(index);

      index--;
    }
  }

  #bubbleUp (index) {
    let currentIndex = index;

    while (this.#hasParent(currentIndex)) {
      const parentIndex = this.#getParentIndex(currentIndex);

      if (this.#getRank(currentIndex) > this.#getRank(parentIndex)) {
        this.#swap(currentIndex, parentIndex);

        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  #pushDown (index) {
    let currentIndex = index;

    while (this.#hasLeftChild(currentIndex)) {
      let largestChildIndex = this.#getLeftChildIndex(currentIndex);

      if (this.#hasRightChild(currentIndex) && this.#getRightChildRank(currentIndex) > this.#getLeftChildRank(currentIndex)) {
        largestChildIndex = this.#getRightChildIndex(currentIndex);
      }

      if (this.#getRank(largestChildIndex) > this.#getRank(currentIndex)) {
        this.#swap(currentIndex, largestChildIndex);
      }

      currentIndex = largestChildIndex;
    }
  }

  #getParentIndex (index) {
    return Math.floor((index - 1) / 2);
  }

  #getLeftChildIndex (index) {
    return index * 2 + 1;
  }

  #getRightChildIndex (index) {
    return index * 2 + 2;
  }

  #getParentRank (index) {
    return this.#getRank(this.#getParentIndex(index));
  }

  #getLeftChildRank (index) {
    return this.#getRank(this.#getLeftChildIndex(index));
  }

  #getRightChildRank (index) {
    return this.#getRank(this.#getRightChildIndex(index));
  }

  #getRank (index) {
    return this.#heap[index].rank;
  }

  #hasParent (index) {
    return this.#getParentIndex(index) >= 0;
  }

  #hasLeftChild (index) {
    return this.#getLeftChildIndex(index) < this.#heap.length;
  }

  #hasRightChild (index) {
    return this.#getRightChildIndex(index) < this.#heap.length;
  }

  #swap (indexA, indexB) {
    const node = this.#heap[indexA];

    this.#heap[indexA] = this.#heap[indexB];
    this.#heap[indexB] = node;
  }

  peek () {
    if (!this.#heap.length) {
      return null;
    }

    return this.#heap[0].value;
  }

  push (value, rank) {
    const node = new Node(value, rank);

    this.#heap.push(node);
    
    this.#bubbleUp(this.#heap.length - 1);
  }

  pop () {
    if (!this.#heap.length) {
      return null;
    }

    this.#swap(0, this.#heap.length - 1);

    const node = this.#heap.pop();

    this.#pushDown(0);

    return node.value;
  }
}

module.exports = MaxBinaryHeap;