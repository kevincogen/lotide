// tail function returns all items of the array that occur after the first instance,
// but not including the first instance.

const tail = function(array) {
  let tailArray = [];

  for (let index of array) {
    if (index !== array[0]) {
      tailArray.push(index);
    }
  } return tailArray;
};

module.exports = tail;
