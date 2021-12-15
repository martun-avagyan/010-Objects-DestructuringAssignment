"use strict";

const elementsOperator = function (operator, ...elements) {
  switch (operator) {
    case "*":
      let multiply = elements[0];
      for (let i = 1; i < elements.length; i++) {
        multiply *= elements[i];
      }
      return multiply;
      break;
      case (co)

    default:
      break;
  }
};

console.log(elementsOperator("*", 1, 2, 3));
