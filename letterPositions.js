const letterPositions = function(sentence) {
  const results = {};
  //typical (c) for loop is better here, since we need to access index value as well as identify value at index :)
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  };
  delete results[" "];
  return results;
};

module.exports = letterPositions;
