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
