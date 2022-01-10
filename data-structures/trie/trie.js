class TrieNode {
  constructor (key, parent = null) {
    this.key = key;
    this.isEndOfWord = false;
    this.children = new Map();
    this.parent = parent;
  }

  addChild (key) {
    if (!this.children.has(key)) {
      const childNode = new TrieNode(key, this);

      this.children.set(key, childNode);

      return childNode;
    } else {
      return this.children.get(key);
    }
  }

  get word () {
    const characters = [];

    let node = this;

    while (node.parent) {
      characters.push(node.key);
      node = node.parent;
    }

    return characters.reverse().join('');
  }
}

class Trie {
  #root = new TrieNode('');
  #size = 0;

  insert (word) {
    let i = 0;
    let node = this.#root;

    while (i < word.length) {
      const childNode = node.addChild(word[i]);

      node = childNode;
      i++;
    }

    node.isEndOfWord = true;

    this.#size++;
  }

  #searchNode (query) {
    let i = 0;
    let node = this.#root;

    while (i < query.length) {
      if (node.children.has(query[i])) {
        node = node.children.get(query[i]);
      } else {
        return null;
      }

      i++;
    }

    return node;
  }

  /**
   * @param {string} prefix The prefix to search for
   * @param {number} k The number of results to return
   * @returns Returns the first k results in alphabetical order
   */
  startsWith (prefix, k = Infinity) {
    const words = [];
    const subTrie = this.#searchNode(prefix);

    if (!subTrie) {
      return words;
    }

    const searchStack = [subTrie];

    while (searchStack.length && words.length < k) {
      const node = searchStack.pop();

      if (node.isEndOfWord) {
        words.push(node.word);
      }

      [...node.children.keys()]
        .sort((a, b) => b.localeCompare(a))
        .forEach((key) => {
          searchStack.push(node.children.get(key));
        });
    }

    return words;
  }

  get size() {
    return this.#size;
  }
}

module.exports = Trie;