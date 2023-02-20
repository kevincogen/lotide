//eqArrays function
const eqArrays = require('../eqArrays');

// Assert Arrays Equal Function
const assertArraysEqual = require('../assertArraysEqual');

// Console Test
assertArraysEqual([1,2,3,4],[1,2,3,4]); // Pass
assertArraysEqual([1,2,3,4],[1,2,3]); // Fail
assertArraysEqual([1,2,"3",4],[1,2,3,4]); // Fail
assertArraysEqual(["one","two","three"],["one","two","three"]); //pass