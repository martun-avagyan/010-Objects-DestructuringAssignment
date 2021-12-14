"use Strict";

const fiftyThirtyTwenty = function (num) {
  const objToReturn = {
    Needs: num * 0.5,
    Wants: num * 0.3,
    Savings: num * 0.2,
  };
  console.log(objToReturn);
  return objToReturn;
};

fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings":2000 }
fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000,"Savings": 10000 }
fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":2690 }
