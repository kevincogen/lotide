// flatten function will take in an array containing elements including nested arrays of elements,
//return a "flattened" version of the array.
const flatten = require('../flatten')
//eqArrays function
const eqArrays = require('../eqArrays');
// Assert Arrays Equal Function
const assertArraysEqual = require('../assertArraysEqual');
//console Test
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]));