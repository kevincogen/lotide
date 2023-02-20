//Assert eq for testing
const assertEqual = require('../assertEqual');
//find keys by value
const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

//Testing
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire")); //Drama


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //true
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama"); //false
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy"); //false
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), undefined); //false
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); //true
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //true
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); //true