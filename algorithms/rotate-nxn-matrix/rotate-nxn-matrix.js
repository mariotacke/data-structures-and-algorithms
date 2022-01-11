function rotateClockwise (matrix) {
  const N = matrix.length;

  for (let y = 0; y < N / 2; y++) {
    for (let x = y; x <= N - 1 - x; x++) {
      const topLeft = matrix[y][x];

      matrix[y][x] = matrix[N - 1 - x][y];
      matrix[N - 1 - x][y] = matrix[N - 1 - y][N - 1 - x];
      matrix[N - 1 - y][N - 1 - x] = matrix[x][N - 1 - y];
      matrix[x][N - 1 - y] = topLeft;
    }
  }

  return matrix;
}


function rotateCounterClockwise (matrix) {
  const N = matrix.length;

  for (let y = 0; y < N / 2; y++) {
    for (let x = y; x <= N - 1 - x; x++) {
      const topLeft = matrix[y][x];

      matrix[y][x] = matrix[x][N - 1 - y];
      matrix[x][N - 1 - y] = matrix[N - 1 - y][N - 1 - x];
      matrix[N - 1 - y][N - 1 - x] = matrix[N - 1 - x][y];
      matrix[N - 1 - x][y] = topLeft;
    }
  }

  return matrix;
}

module.exports = {
  rotateClockwise,
  rotateCounterClockwise,
};