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

//Find length of longest word in a string
function findLongestWord(str) {
  var individualStrings = str.split(' ');
  individualStrings.sort(function(a, b) {
    return b.length - a.length;
  });
  return individualStrings[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//Capitalize the first letter of each word
function titleCase(str) {
  var words = str.toLowerCase().split(' ');
  var capitalizedWords = [];
  for (i=0; i<words.length; i++) {
    capitalizedWords.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return capitalizedWords.join(' ');
}

titleCase("I'm a little tea pot");

//Extract highest num in array of arrays
function largestOfFour(arr) {
  var arrayOfLargestNums = [];
  for (i=0; i<arr.length; i++) {
    arr[i].sort(function(a, b) {
      return b - a;
    });
    arrayOfLargestNums.push(arr[i][0]);  
  }
  return arrayOfLargestNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Check if end of string matches a given input
function end(str, target) {
  var targetLength = target.length;
  var stringEnding = str.substr(str.length - targetLength, targetLength);
  if (stringEnding === target) {
    return true;
  } else {
    return false;
  }
}

end("Bastian", "n");

//Repeat Strings
function repeat(str, num) {
  if (num >=0) {
    var newString = '';
    for (i=0; i < num; i++) {
      newString += str;
    }
    return newString;
  } else {
    return '';
  }
}

repeat("abc", 3);

//Truncate a string to a given length
function truncate(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3) + "...";
  } else if (num <= 3) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);

//Create an array of arrays given an array and an array size
function chunk(arr, size) {
  var newArray = [];
  for (i=0; i<arr.length; i+=size) {
    newArray.push(arr.slice(i, i+size));
  }
  return newArray;
}

chunk(["a", "b", "c", "d"], 2);

//Remove the elements from the front of an array
function slasher(arr, howMany) {
  return arr.slice(howMany, arr.length);
}

slasher([1, 2, 3], 2);

//Check if all letters in second item of an array are in the first item of the array
function mutation(arr) {
  for (i=0; i<arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) == -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);

//Eliminate items from an array that do not evaluate to true
function bouncer(arr) {
  var newArr = [];
  for (i=0; i<arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    } 
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);

//Remove given items from an array 
function destroyer(arr) {
  var destroyerArgs = arguments;
  function filterCallback(val) {
    for (i=1; i<destroyerArgs.length; i++) {
      if (val === destroyerArgs[i]) {
        return false;
      }
    }
    return true;
  }
  return arr.filter(filterCallback);
} 

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Find index of number added to array
function where(arr, num) {
  arr.push(num);
  function compare(a, b) {
    return a - b;
  }
  arr.sort(compare);
  return arr.indexOf(num);
}

where([40, 60], 50);

//Given two arrays, return items that are in one but not both of the arrays.

function diff(arr1, arr2) {
  var newArr = [];
  for (i=0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for (i=0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

