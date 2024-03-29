const takeUntil = function(array, callback) {
  let returnArr = [];
  for (let item of array) {
    if (!callback(item)) {
      returnArr.push(item);
    } else break;
  } return returnArr;
};
module.exports = takeUntil;



// //Testing
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1); //[ 1, 2, 5, 7, 2 ]

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2); //[ 'I\'ve', 'been', 'to', 'Hollywood' ]