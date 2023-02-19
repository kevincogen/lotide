const assertEqual = require('../assertEqual');

//Function head returns the first item in the array
const head = function(array) {
  return array[0]
}

//Test cases

//returns 'three'
console.log(head(['three', 2, 3, '5']))

//asserts equal using only the head of the array 

//returns Assertion Passed
console.log(assertEqual(head([5,6,7]), 5))

//returns Assertion Passed
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"))