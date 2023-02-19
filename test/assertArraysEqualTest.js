//eqArrays function
const eqArrays = require('../eqArrays');

// Assert Arrays Equal Function

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅😎 Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else if (eqArrays(arrayOne, arrayTwo) === false) {
    console.log(`🟥😅 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

// Console Test
assertArraysEqual([1,2,3,4],[1,2,3,4]); // Pass
assertArraysEqual([1,2,3,4],[1,2,3]); // Fail
assertArraysEqual([1,2,"3",4],[1,2,3,4]); // Fail
assertArraysEqual(["one","two","three"],["one","two","three"]); //pass