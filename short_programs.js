// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

//Factorialize a number
function factorialize(num) {
  var newNum = 1;
  for (i=1; i<=num; i++) {
    newNum *= i;
  }
  return newNum;
}

factorialize(5);

//Palindrome check (excluding all non-alphanumeric characters)

function palindrome(str) {
  var re = /\W+|\_+/g;
  var cleanString = str.replace(re, '').toLowerCase();
  if (cleanString == cleanString.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");

