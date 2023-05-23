function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  create a function with the palindrome 
  look up what it meas, base on that create it 
  make sure that return what we need 
*/

/*
 first, I have to look up what it is, once I knew what it was 
   it click in my head that I have to create a function that it would read 
   the words in reverse but it will remain the same. that is why i came up the 
   slipt() reverse() and join(), basically what split does is split the word in 
   to an array, then the reverse is to reverse the order and the join is 
   just to put it back into a single string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
