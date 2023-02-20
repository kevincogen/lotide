const assertEqual = require('../assertEqual');

//eqArrays function
const eqArrays = require('../eqArrays');


// Testing with assertEqual function
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), true); // => should Pass
assertEqual(eqArrays(["Hey", "This", "Should", "Pass", "Kevin"], ["Hey", "This", "Should", "Pass", "Kevin"]), true); // => should pass
assertEqual(eqArrays(["Hey", "This", "Should ", "Pass", "Kevin"], ["Hey", "This", "Should", "Pass", "Kevin"]), true); // => should fail