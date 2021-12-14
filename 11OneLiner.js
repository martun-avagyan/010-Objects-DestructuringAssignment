"use strict";

const cityFacts = function (obj) {
  const strToReturn = `${obj.name} has a population of ${obj.population} and 
  is situated in ${obj.continent}. ❤❤❤`;
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
