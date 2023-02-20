const assertArraysEqual = require('../assertArraysEqual');

//Middle Function
const middle = require('../middle');

//Testing Console Log
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2,3]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [4, 5]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));