/**
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */
function itemCounts(array) {
  let counts = 0;
  let wordArray = '';
  for(let i = 0; i < array.length; i++){
    wordArray = array[i];
    for(let j = 0; j < wordArray.length; j++){
      if(wordArray[i] === 'a'){
        counts++;
      }
    }

  }

  // Your code here.
  // Run 'npm test' to see what tests need to pass.
  // See README.md for a written description.
  return counts;
}


let test;
test = itemCounts['aaaaa', 'aaaaa', 'abababab']
console.log(test);
module.exports = itemCounts;
