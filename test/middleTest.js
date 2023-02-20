const assertArraysEqual = require('../assertArraysEqual');

//Middle Function
const middle = require('../middle');

//Mocha and Chai Tests
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});
it("returns [3] for [1, 2 ,3, 4, 5]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
});
it("returns [2, 3] for [1, 2 ,3, 4]", () => {
  assert.deepEqual(middle([1, 2, 3, 4]), [2 ,3]); 
})
it("returns [4, 5] for [1, 2 ,3, 4, 5, 6, 7, 8]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); 
});
it("returns [3, 4] for [1, 2 ,3, 4, 5, 6]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
});



// //Testing Console Log
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2,3]
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [4, 5]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));