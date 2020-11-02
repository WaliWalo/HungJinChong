const { resetWarningCache, string } = require("prop-types");

/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
console.log("\nExercise 1");
const ex1 = function (str) {
  let split = str.toLowerCase().split("");
  let char = {};
  for (let i = 0; i < split.length; i++) {
    if (!char[split[i]]) {
      char[split[i]] = 1;
    } else {
      char[split[i]]++;
    }
  }

  let max = 0;
  let maxChar = "";
  for (let i in char) {
    console.log(i, char[i]);
    if (char[i] > max) {
      max = char[i];
      maxChar = i;
    }
  }
  return "Most common used Character is " + maxChar;
};
console.log(ex1("apple 1231111"));
/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
console.log("\nExercise 2");
const ex2 = function (str1, str2) {
  str1 = str1.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
  str2 = str2.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
  let split1 = str1.toLowerCase().split("");
  let split2 = str2.toLowerCase().split("");
  split1.sort();
  split2.sort();
  let result = true;
  for (let i = 0; i < split1.length; i++) {
    if (split1[i] !== split2[i]) {
      result = false;
    }
  }
  return result;
};
console.log(ex2("rail safety", "fairy tales"));
/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/
console.log("\nExercise 2");
const ex3 = function (str, arr) {
  str = str
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
  sortedStr = str.split("").sort();
  let strings = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, "")
      .toLowerCase();
    strings.push(arr[i].split("").sort());
  }
  let result = true;
  let texts = "";
  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (sortedStr[j] !== strings[i][j]) {
        result = false;
      } else {
        result = true;
      }
    }
    texts = texts + `${arr[i]} and ${str} is an anagram: ${result}` + "\n";
  }
  return texts;
};
console.log(ex3("listen", ["enlist", "google", "inlets", "banana"]));

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
    split.length must be even
 */
console.log("\nExercise 4");
const ex4 = function (str) {
  let split = str.split("");
  let result = false;
  if (split.length % 2 !== 0) {
    result = false;
  }
  let part1;
  let part2;
  for (let i = 0; i < split.length / 2; i++) {
    part1 = part1 + split[i];
  }
  for (let i = split.length - 1; i >= split.length / 2; i--) {
    part2 = part2 + split[i];
  }
  if (part1 === part2) {
    result = true;
  }
  return `${str} is a palindrom: ${result}`;
};
console.log(ex4("aabbaa"));

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
console.log("\nExercise 5");
const ex5 = function (x) {
  x = x.toString().replace("0", "");
  let split = x.toString().split("");
  let xtra = "";
  if (Number.isInteger(parseInt(split[0])) === false) {
    xtra = split[0];
    split = split.slice(1);
  }
  let result = "";
  for (let i = split.length - 1; i >= 0; i--) {
    result = result + split[i];
  }
  return xtra + result;
};
console.log(ex5(-90));

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */
console.log("\nExercise 6");
const ex6 = function (n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < i + 1; k++) {
      result += "#";
    }
    for (let j = 0; j < n - 1 - i; j++) {
      result += "-";
    }
    result += "\n";
  }
  return result;
};
console.log(ex6(5));
/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
