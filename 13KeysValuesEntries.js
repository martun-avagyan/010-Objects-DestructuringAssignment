"use strict";

const obj = {
  names: ["John", "James", "Kevin", "Anthony"],
  religion: [{ Christian: ["Apostolic", "Catholic", "Protestant"] }, "Muslim"],
};

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

const keys = function (obj) {
  const arrToReturn = [];
  for (const item in obj) {
    arrToReturn.push(item);
  }
  return arrToReturn;
};
// console.log(keys(obj));

const values = function (obj) {
  const arrToReturn = [];
  let index = 0;
  let objNew;
  for (const item in obj) {
    ({ ...objNew } = obj);
    arrToReturn.push(objNew[item]);
  }
  return arrToReturn;
};
// console.log(values(obj));

const entries = function (obj) {
    
};
