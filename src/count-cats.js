const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let catsCount = 0;

  for (let i = 0; i < backyard.length; i++) {
    for (j = 0; j < backyard[i].length; j++) {
      if (backyard[i][j] === '^^') {
        catsCount++;
      }
    }
  }
  return catsCount;
};
