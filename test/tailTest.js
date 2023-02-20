// tail function returns all items of the array that occur after the first instance,
// but not including the first instance.

const tail = require('../tail')

//Mocha and Chai Tests
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns[7,'hey',3,4,5] for [45,7,'hey',3,4,5] ", () => {
    assert.deepEqual(tail([45,7,'hey',3,4,5]), [7,'hey',3,4,5]);
  });
});
it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
  assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
});
it("asserts length return is 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
  const result = tail(["Hello", "Lighthouse","Labs"]);
  assert.strictEqual(result.length, 2);
});