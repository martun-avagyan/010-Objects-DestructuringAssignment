"use strict";

const printSum = function (operator, ...elements) {
  switch (operator) {
    case "*":
      let multiply = elements[0];
      for (let i = 1; i < elements.length; i++) {
        multiply *= elements[i];
      }
      return multiply;
      break;
    case "-":
      let minus = elements[0];
      for (let i = 1; i < elements.length; i++) {
        minus -= elements[i];
      }
      return minus;
      break;
    case "**":
      let toPowerOf = elements[0];
      for (let i = 1; i < elements.length; i++) {
        toPowerOf = toPowerOf ** elements[i];
      }
      return toPowerOf;
      break;

    default:
      if (!isNaN(operator)) {
        let add = operator;
        for (let i = 0; i < elements.length; i++) {
          add += elements[i];
        }
        return add;
      }
      break;
  }
};

console.log(printSum("*", 1, 2, 3)); // 6
console.log(printSum(1, 2, 3, 4, 5)); // 15
console.log(printSum("-", 1, 2, 3, 6, 7)); // -17
console.log(printSum("**", 2, 3, 2)); // 64
