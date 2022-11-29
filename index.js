function isPalindrome(word) {
  word = word.toLowerCase();
  let reverseWord = word.split('').reverse().join('');
  if (reverseWord === word) {
    return true;
  }
  return false;    
  }


/* 
  Add your pseudocode here
  -reverse the word
  -compare the reversed word with the initial one
  -if same 
  return true
  -if not
  return false
*/


/*
  Add written explanation of your solution here
  we need to reverse the word in order to check if the original word will be the same as the original one
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
