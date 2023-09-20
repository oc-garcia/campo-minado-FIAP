const countAdjacentMines = (row, col, booleanField) => {
  const numRows = booleanField.length;
  const numCols = booleanField[0].length;
  let count = 0;

  const adjacentCells = [
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ];

  for (const cell of adjacentCells) {
    const newRow = Number(row) + Number(cell.x);
    const newCol = Number(col) + cell.y;

    if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
      if (booleanField[newRow] != undefined) {
        if (booleanField[newRow][newCol] != undefined) {
          if (booleanField[newRow][newCol]) {
            count++;
          }
        }
      }
    }
  }
  return count;
};

module.exports = countAdjacentMines;
