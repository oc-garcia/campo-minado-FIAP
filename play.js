const ask = require("./functions/ask");
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
console.table(booleanField);
console.table(mineField);

//round start
let roundColumn;
let roundRow;
let roundType;

const newRound = () => {
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
  console.log(booleanField[roundRow][roundColumn]);
  if (booleanField[roundRow][roundColumn] && roundType == "free") {
    mineField = [...mineField, (mineField[roundRow][roundColumn] = "x")];
    console.log(mineField);
    return console.log("Hit a mine, game over =/");
  }
  if (booleanField[roundRow][roundColumn] && roundType == "mine") {
    mineField = [...mineField, (mineField[roundRow][roundColumn] = "x")];
    console.log(mineField);
    newRound();
  }
  if (booleanField[roundRow][roundColumn] && roundType == "unflag") {
    mineField = [...mineField, (mineField[roundRow][roundColumn] = "-")];
    console.log(mineField);
    newRound();
  }
  console.log(mineField);
  newRound();
};
newRound();

module.exports = { grid, mineQuantity };
