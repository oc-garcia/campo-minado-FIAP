const ask = require("./functions/ask");
const countAdjacentMines = require("./functions/countAdjacentMines");
const layTable = require("./functions/layTable");

// starting questions
let grid;
let mineQuantity;

const validateInitialInput = () => {
  const validateGrid = () => {
    grid = ask("How many lines and columns?");
    if (isNaN(grid) || grid <= 0) {
      console.log("Invalid number or format");
      validateGrid();
    }
  };
  validateGrid();

  const validateMineQuantity = () => {
    mineQuantity = ask("How many mines in the game?");
    if (isNaN(mineQuantity) || mineQuantity <= 0) {
      console.log("Invalid number or format");
      validateMineQuantity();
    }
  };
  validateMineQuantity();
};
validateInitialInput();

let { booleanField, mineField } = layTable(grid, mineQuantity);

console.log("=== MINE FIELD ===");
//console.table(booleanField);
console.table(mineField);

//round start
let roundColumn;
let roundRow;
let roundType;

const newRound = () => {
  console.log("New round!");
  const validateRoundInput = () => {
    const validateRoundColumn = () => {
      roundColumn = ask("Choose a column?");
      if (isNaN(roundColumn) || roundColumn < 0 || roundColumn >= booleanField.length) {
        console.log("Invalid number or format");
        validateRoundColumn();
      }
    };
    validateRoundColumn();
    const validateRoundRow = () => {
      roundRow = ask("Choose a row?");
      if (isNaN(roundRow) || roundRow < 0 || roundRow >= booleanField.length) {
        console.log("Invalid number or format");
        validateRoundRow();
      }
    };
    validateRoundRow();
    const validateRoundType = () => {
      roundType = ask("Choose a type? (free, mine, unflag)");
      if (roundType != "free" && roundType != "mine" && roundType != "unflag") {
        console.log("Invalid format. (free, mine, unflag)");
        validateRoundType();
      }
    };
    validateRoundType();
  };
  validateRoundInput();

  const checkWinCondition = () => {
    for (let i = 0; i < mineField.length; i++) {
      for (let j = 0; j < mineField[i].length; j++) {
        if (mineField[i][j] === "-") {
          newRound();
        }
      }
    }
    console.log("Congratulations! You WON!");
  };

  if (booleanField[roundRow][roundColumn] && roundType == "free") {
    mineField[roundRow][roundColumn] = "x";
    console.table(mineField);
    return console.log("Hit a mine, game over =/");
  }
  if (booleanField[roundRow][roundColumn] && roundType == "mine") {
    mineField[roundRow][roundColumn] = "x";
    console.table(mineField);
    checkWinCondition();
  }
  if (booleanField[roundRow][roundColumn] && roundType == "unflag") {
    mineField[roundRow][roundColumn] = "-";
    console.table(mineField);
    checkWinCondition();
  }
  if (!booleanField[roundRow][roundColumn] && roundType == "free") {
    mineField[roundRow][roundColumn] = countAdjacentMines(roundRow, roundColumn, booleanField);
    console.table(mineField);
    checkWinCondition();
  }
  if (!booleanField[roundRow][roundColumn] && roundType == "mine") {
    mineField[roundRow][roundColumn] = "x";
    console.table(mineField);
    checkWinCondition();
  }
  if (!booleanField[roundRow][roundColumn] && roundType == "unflag") {
    mineField[roundRow][roundColumn] = "-";
    console.table(mineField);
    checkWinCondition();
  }

  if (checkWinCondition()) {
    return;
  }
};
newRound();

module.exports = { grid, mineQuantity };
