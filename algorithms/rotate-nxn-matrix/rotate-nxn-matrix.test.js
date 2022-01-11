const assert = require('assert');

const {
  rotateClockwise,
  rotateCounterClockwise,
} = require('./rotate-nxn-matrix');

describe('Rotate NxN Matrix (in-place)', () => {
  it('should rotate 3x3 matrix clockwise', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    rotateClockwise(matrix);

    assert.deepStrictEqual(matrix, [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it('should rotate 3x3 matrix counter clockwise', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    rotateCounterClockwise(matrix);

    assert.deepStrictEqual(matrix, [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ]);
  });
});