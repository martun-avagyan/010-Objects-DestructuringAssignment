"use strict";

const cityFacts = function (obj) {
  const { name, population, continent = "who knows what" } = obj;

  const strToReturn = `${name} has a population of ${population} and 
  is situated in ${continent}. ❤❤❤`;
  console.log(strToReturn);
  return strToReturn;
};

cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe",
}); // ➞ "Paris has a population of 2,140,526 and is situated in Europe"
cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia",
}); // ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
cityFacts({
  name: "Yerevan",
  population: 1500000,
});
