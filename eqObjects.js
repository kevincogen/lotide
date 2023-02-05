// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// Attempt 1: This flattens each Object to an array, and compares eqArray. 
// This does not allow for object properties to be listed in a different order. 
/*
const eqObjects = function(object1, object2) {
  //turn into arrays
  let objArrOne = Object.entries(object1)
  let objArrTwo = Object.entries(object2)
  
  if (objArrOne.length === objArrTwo.length) {
    let truthArray = [];
    for (let i = 0; i < objArrOne.length; i++) {
      if (objArrOne[i] === objArrTwo[i]) {
        truthArray.push("true");
      } else {
        return false; //Do i need this?
      }
      if (truthArray.length === objArrOne.length) {
        return true;
      }
    }
  } else return false;
}; 
*/

//eqArray
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

//Attempt 2
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objKeysOne = Object.keys(object1)
  let objKeysTwo = Object.keys(object2) //converts to array of keys

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

//Testing: Primitive Values 
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

//Testing: Arrays as Values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false

