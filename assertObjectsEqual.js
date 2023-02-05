//eqArray declare
const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  } return true; //if we complete the loop, none are false. No need for Truth Array, lol.
};


//eqObjects
const eqObjects = function(object1, object2) {
  let objKeysOne = Object.keys(object1);
  let objKeysTwo = Object.keys(object2); //converts to array of keys

  if (objKeysOne.length !== objKeysTwo.length) {
    return false; //not equal length
  }
  for (let key of objKeysOne) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true; //If we complete the loop, none are false.
};

//FUNCTION IMPLEMENTATION: Assert Objects Equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // utility inspect
  if (eqObjects(actual, expected) === true) {
    console.log(`✅😎 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(actual, expected) === false) {
    console.log(`🟥😅 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//Testing: Primitive Values
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject); // => false

//Testing: Arrays as Values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
