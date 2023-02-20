//eqArray declare
const eqArrays = require('./eqArrays')

//eqObjects
const eqObjects = require('./eqObjects')

//FUNCTION IMPLEMENTATION: Assert Objects Equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // utility inspect
  if (eqObjects(actual, expected) === true) {
    console.log(`✅😎 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(actual, expected) === false) {
    console.log(`🟥😅 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
