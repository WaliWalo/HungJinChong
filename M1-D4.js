/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

const { number } = require("prop-types");

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

console.log("\nExercise 1");
let area = (l1, l2) => l1 * l2;
let l1 = 2;
let l2 = 3;
console.log(
  `Area of rectangle with sides ${l1}cm and ${l2}cm is ${area(l1, l2)}cm`
);

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
console.log("\nExercise 2");
let crazySum = (no1, no2) => (no1 === no2 ? (no1 + no2) * 3 : false);
no1 = 2;
no2 = 3;
console.log(`Function crazySum returns ${crazySum(no1, no2)}`);

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
console.log("\nExercise 3");
let crazyDiff = (x) => (x > 19 ? (x - 19) * 3 : 19 - x);
x = 22;
console.log(crazyDiff(x));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

console.log("\nExercise 4");
//let boundary = (N) => ((20 < N <= 100) || N === 400 ? true : false);
let boundary = (N) => ((20 < N && N <= 100) || N === 400 ? true : false);
N = 20;
console.log(boundary(N));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string,
 if the given string begins with "Strive" then return the original string.
*/

console.log("\nExercise 5");
let strivify = (S) => (S.slice(0, 6) !== "Strive" ? `Strive ${S}` : S);
S = "Please";
console.log(strivify(S));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

console.log("\nExercise 6");
let check3and7 = (posN) => {
  let posNumber = Math.abs(posN);
  if (posNumber % 3 === 0 && posNumber % 7 === 0) {
    return "multiple of 3 and 7";
  } else if (posNumber % 7 === 0) {
    return "multiple of 7";
  } else if (posNumber % 3 === 0) {
    return "multiple of 3";
  } else {
    return "Error 404";
  }
};
posN = 3;
console.log(check3and7(posN));

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

console.log("\nExercise 7");
let reverseString = (s) => {
  let r = "";
  for (let i = s.length; i >= 0; i--) {
    let temp = s.charAt(i);
    r = r + temp;
  }
  return console.log(r);
};
s = "Strive";
reverseString(s);

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

console.log("\nExercise 8");
let upperFirst = (word) => {
  //counter for chars that are not letters
  let x = 0;
  //loop for the whole sentence/word
  for (let i = 0; i < word.length; i++) {
    //check if its a number
    if (!(word.charAt(i) >= "0" && word.charAt(i) <= "9")) {
      return (
        //add the numbers then the uppercase letter + the rest
        word.substring(0, x) + word.charAt(i).toUpperCase() + word.slice(i + 1)
      );
    } else x++;
  }
};
let word = "asd asd";
console.log(upperFirst(word));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

console.log("\nExercise 9");
let cutString = (string) => string.substring(1, string.length - 1);
string = "this is food";
console.log(cutString(string));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

console.log("\nExercise 10");
let giveMeRandom = (n) => {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = parseInt(Math.random() * 10);
  }
  return array;
};
let random = 10;
console.log(`Here is ${random} random number: ${giveMeRandom(random)}`);

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
