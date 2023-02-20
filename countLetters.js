const countLetters = function(sentence) {

  let letterCount = {}; //object to return
  //for Loop goes through each character and adds value = 1 if char not present in object yet.
  //if char is present as a property, it adds 1 to the value. yay!
  for (let char of sentence) {
    if (letterCount[char]) {
      letterCount[char] += 1;
    } else {
      letterCount[char] = 1;
    }
  }
  delete letterCount[" "]; //this is not scaled to remove everything not alphanumeric, only removes spaces.
  return letterCount;
};

module.exports = countLetters;
