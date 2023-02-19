const assertEqual = require('../assertEqual');

// tail function returns all items of the array that occur after the first instance,
// but not including the first instance.

const tail = function(array) {
  let tailArray = [];

  for (let index of array) {
    if (index !== array[0]) {
      tailArray.push(index);
    }
  } return tailArray;
};

//Test Cases

//Prints new array sans head
console.log(tail([45,7,"hey",3,4,5]));

//verifies if new array items are equal to our expected inputs
const result = tail(["Hello", "Lighthouse","Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//array with only 1 element should yield empty array for its tail
console.log(tail([2]));

//empty array should yield an empty array for its tail
console.log(tail([]));