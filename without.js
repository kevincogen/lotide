
// without function

const without = function(source, itemsToRemove) {
  let itemsRemoved = [];

  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        break; // if source[i] finds a matche in itemsToRemove - this index will not be pushed to new array. Nested Loop Stops.
      } else if (x === itemsToRemove.length - 1) {
        itemsRemoved.push(source[i]); //if nested loop iterates over entire length of itemsToRemove it means no matches were found. Push Index.
      }
    }
  }
  return itemsRemoved;
};

console.log(without([1,2,3,4,5], [1,3,4])); // expected output [2,5]