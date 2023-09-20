const prompt = require("prompt-sync")();

const ask = (question) => {
  let answer = prompt(question);
  return answer;
};

module.exports = ask;
