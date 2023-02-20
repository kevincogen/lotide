const countOnly = function(allItems, itemsToCount) {
  const results = {} //object to return
  for (const item of allItems) {
    console.log(item); // for testing
    // first condition checks if item is present in itemsToCount
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;