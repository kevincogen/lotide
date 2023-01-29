// Assert Equal function copy
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🟥😅 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅😎 Assertion Passed: ${actual} === ${expected}`);
  }
};

//eqArrays function

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    let truthArray = [];
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] === arrayTwo[i]) {
        truthArray.push("true");
      } else {
        return false;
      }
      if (truthArray.length === arrayOne.length) {
        return true;
      }
    }
  } else return false;
};



assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), true); // => should FAIL
assertEqual(eqArrays(["Hey", "This", "Should", "Pass", "Kevin"], ["Hey", "This", "Should", "Pass", "Kevin"]), true); // => should pass
assertEqual(eqArrays(["Hey", "This", "Should ", "Pass", "Kevin"], ["Hey", "This", "Should", "Pass", "Kevin"]), true); // => should fail