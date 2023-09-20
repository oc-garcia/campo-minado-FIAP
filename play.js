const ask = require("./functions/ask");
const layTable = require("./functions/layTable");

// starting questions
let grid = ask("How many lines and columns?");
let mineQuantity = ask("How many mines in game?");

let { booleanField, mineField } = layTable(grid, mineQuantity);

console.log("=== MINE FIELD ===");
console.table(booleanField);
console.table(mineField);

module.exports = { grid, mineQuantity };
