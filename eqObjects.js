// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//eqArrays declare
const eqArrays = require('./eqArrays');

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
module.exports = eqObjects;
