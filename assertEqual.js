// if actual is equal to expected: assertion is passed
// if actual !equal to expected: assertion is failed
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🟥😅 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅😎 Assertion Passed: ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;