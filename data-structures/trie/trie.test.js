const assert = require('assert');

const Trie = require('./trie');

describe('Trie', () => {
  it('should insert words into trie', () => {
    const trie = new Trie();

    trie.insert('ant');
    trie.insert('and');
    trie.insert('anthem');
    trie.insert('anti');
    trie.insert('antidote');
    trie.insert('antonym');

    assert.strictEqual(trie.size, 6);
  });

  it('should return k-terms matching prefix in alphabetical order', () => {
    const trie = new Trie();

    trie.insert('ant');
    trie.insert('and');
    trie.insert('anthem');
    trie.insert('anti');
    trie.insert('antidote');
    trie.insert('antonym');

    assert.deepStrictEqual(trie.startsWith('an', 3), ['and', 'ant', 'anthem']);
    assert.deepStrictEqual(trie.startsWith('ant', 3), ['ant', 'anthem', 'anti']);
    assert.deepStrictEqual(trie.startsWith('anti', 3), ['anti', 'antidote']);
    assert.deepStrictEqual(trie.startsWith('antid', 3), ['antidote']);
    assert.deepStrictEqual(trie.startsWith('antidote', 3), ['antidote']);
    assert.deepStrictEqual(trie.startsWith('nothing', 3), []);
  });
});