"use strict";

const mapping = function (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].toLowerCase()] = arr[i].toUpperCase();
  }
  console.log(obj);
  return obj;
};

mapping(["p", "s"]);
mapping(["a", "b", "c"]);
mapping(["a", "v", "y", "z"]);
