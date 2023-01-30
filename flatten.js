// flatten function will take in an array containing elements including nested arrays of elements,
//return a "flattened" version of the array.
const flatten = function(inputArray) {
  let flatArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i]) !== true) {
      flatArray.push(inputArray[i]);
    } else if (Array.isArray(inputArray[i]) === true) {
      for (let y = 0; y < inputArray[i].length; y++) {
        flatArray.push(inputArray[i][y]);
      }
    }
  }
  return flatArray;
};
//console Test
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, ["what", "about", "strings"], [3, 4, 5, 1000000], 5, [6, 0, -123], -8]));