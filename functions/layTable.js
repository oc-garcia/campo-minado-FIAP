const layTable = (grid, mineQuantity) => {
  let booleanField = [];
  let mineField = [];

  // table setup
  for (let i = 0; i < grid; i++) {
    let innerBooleanField = [];
    let innerMineField = [];

    for (let j = 0; j < grid; j++) {
      innerBooleanField.push(false);
      innerMineField.push("-");
    }

    booleanField.push(innerBooleanField);
    mineField.push(innerMineField);
  }

  let randomIndexA;
  let randomIndexB;
  let counter = 0;

  while (counter < mineQuantity) {
    randomIndexA = Math.floor(Math.random() * grid);
    randomIndexB = Math.floor(Math.random() * grid);

    if (!booleanField[randomIndexA][randomIndexB]) {
      booleanField[randomIndexA][randomIndexB] = true;
      counter++;
    }
  }
  return { booleanField, mineField };
};

module.exports = layTable;
