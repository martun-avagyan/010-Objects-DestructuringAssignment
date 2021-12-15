# 010 Objects Destructuring Assignment

- ### [02. Get name, country and job using destructuring](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/02NameCountryJobDestructuring.js)

```js
let person = { name: "Sarah", country: "Armenia", job: "Developer" };
console.log(name); // "Sarah"
console.log(country); // "Nigeria"
console.log(job); // "Developer"
```

- ### [03. Concatenate the two arrays](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/03ConcatenateArrays.js)

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

- ### [04. How to take arguments in sum function?](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/04ArgumentsInSum.js)

```js
function sum() {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```

- ### [05. How to pass arguments in sum function?](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/05ArgumentsInSum.js)

```js
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```

- ### [06. Swapping Values using the Destructuring Assignment](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/06SwappingValuesDestructuring.js)

```js
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```

- ### [07. Get name, country and job using destructuring](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/07NameCountryJob.js)

```js
let person = { name: "Sarah", country: "Armenia", job: "Developer" };
console.log(name); // "Sarah"
console.log(country); // "Armenia"
console.log(job); // "Developer"
```

- ### [08. Task](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/08Task.js)

```js
let person = { name: "Sarah", country: "Nigeria", job: "Developer" };
let name, country, job;
const { name, country, job } = person;
console.log(name);
```

- ### [09. Upvotes and Downvotes](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/09UpvotesAndDownvotes.js)

```js
getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0
```

- ### [10. 50, 30, 20](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/10FiftyThirtyTwenty.js)
  The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on
  needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
  Given the after-tax income as ati, what you are supposed to do is to make a function that will return an
  object that shows how much a person needs to spend on needs, wants, and savings.

```js
fiftyThirtyTwenty(10000); // ➞ { "Needs": 5000, "Wants": 3000, "Savings":
2000 }
fiftyThirtyTwenty(50000); // ➞ { "Needs": 25000, "Wants": 15000,
"Savings": 10000 }
fiftyThirtyTwenty(13450); // ➞ { "Needs": 6725, "Wants": 4035, "Savings":
2690 }
```

- ### [11. Create a one-liner function](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/11OneLiner.js)
  Create a function that takes an object as an argument and returns a string with facts about the city. The city
  facts will need to be extracted from the object's three properties:
  The string should have the following format: X has a population of Y and is situated in Z (where X is the city
  name, Y is the population and Z is the continent the city is situated in).

```js
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
```

- ### [12. Create a function that takes infinite count of elements, operator and prints their sum. If there's no operator, then default should be +](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/12ElementsOperator.js)

```js
printSum("*", 1, 2, 3); // 9
printSum(1, 2, 3, 4, 5); // 15
printSum("-", 1, 2, 3, 6, 7); // -17
printSum("**", 2, 3, 2); // 64
```

- ### [13. Write object.keys, object.values and object.entries methods using for..in](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/13KeysValuesEntries.js)

- ### [15. Lowercase and Uppercase](https://github.com/martun-avagyan/010ObjectsDestructuringAssignment/blob/main/15MApping.js)
  Write a function that creates an object with each (key, value) pair being the (lower case, upper case)
  versions of a letter, respectively.

```js
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
```
