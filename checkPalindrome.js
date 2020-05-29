// Given the string check if it is a palindrome.

function checkPalindrome(inputString) {
  let reversedWord = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedWord += inputString[i];
  }
  if (reversedWord === inputString) {
    return true;
  } else {
    return false;
  }
}
