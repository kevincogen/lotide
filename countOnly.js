// Assert Equal function copy
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🟥😅 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅😎 Assertion Passed: ${actual} === ${expected}`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {} //object to return

  for (const item of allItems) {

    console.log(item); // for testing

    // first condition checks if item is present in itemsToCount
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1
      } 
    }
  }
  console.log(results) // prints for testing
  return results;
};

//Testing Section
const firstNames = [
  "Karla",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);