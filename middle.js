
//Middle Function
const middle = function(inputArray) {
  let middleArray = [];

  if (inputArray.length < 3) {
    // less than 3: return empty array
    middleArray = [];
  } else if (inputArray.length > 2 && inputArray.length % 2 === 0) {
    // even: divide by array length -1 and output round down math.floor and rounding up math.ceil to get
    // the two middle elements
    middleArray.push(inputArray[Math.floor(((inputArray.length - 1) / 2))]);
    middleArray.push(inputArray[Math.ceil(((inputArray.length - 1) / 2))]);
    
  } else if (inputArray.length > 2 && inputArray.length % 2 !== 0) {
    //odd: divide by array length -1 by 2 for middle element
    middleArray.push(inputArray[((inputArray.length - 1) / 2)]);
  }
  return middleArray;
};
//Testing Console Log
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2,3]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [4, 5]