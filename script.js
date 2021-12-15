"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

restaurant.myObj = { anotherObj: [1, { yetAnotherObj: "string" }] };
const { categories: a } = restaurant;
console.log(restaurant);
console.log(a);

const { yetAnotherObj: stringValue } = restaurant;

console.log(stringValue);
