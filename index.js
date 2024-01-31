function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length - 1;
  while (left <= right) {
    if (word[left] !== word[right]) {
      return false;
    };
    left ++;
    right --;
  };
  return true;
}

/* 
  Add your pseudocode here
  Initialize a start point of the string (left) and end point of the string (right).
  While left is less than or equal to right:
  If left and right are not equal: return false.
  If they are equal, move lift inwards one character and right inwards one character.
  If loop completes without returning false: return true
*/

/*
  Add written explanation of your solution here
  Checking left and right characters to see if they are equal. If equal, continue inwards towards the middle. If it does not return false at any point, the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));
}

module.exports = isPalindrome;
