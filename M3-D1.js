/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const { resetWarningCache, array } = require("prop-types");

console.log("Exercise 1");
const ex1 = function (x, y) {
  let sum = x + y;
  if (x === y) {
    sum = sum * 3;
  }
  return sum;
};
console.log(ex1(3, 4));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
console.log("\nExercise 2");
const ex2 = function (x, y) {
  let sum = x + y;
  if (x === 50 || y === 50 || sum === 50) {
    return true;
  } else {
    return false;
  }
};
console.log(ex2(30, 20));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
console.log("\nExercise 3");
const ex3 = function (str, pos) {
  str = str.substring(0, pos - 1) + str.substring(pos);
  return str;
};
console.log(ex3("string", 3));
/*

4)
 Create a function to find the largest of three given integers.
*/
console.log("\nExercise 4");
const ex4 = function (x, y, z) {
  return Math.max(x, y, z);
};
console.log(ex4(1, 5, 3));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
console.log("\nExercise 5");
const ex5 = function (x, y) {
  let result = "";
  if ((x >= 40 && x <= 60) || (x >= 70 && x <= 100)) {
    result = "x is in range of 40-60 or 70-100";
  } else {
    result = "x is NOT in range of 40-60 or 70-100";
  }
  if ((y >= 40 && y <= 60) || (y >= 70 && y <= 100)) {
    result += " AND y is in range of 40-60 or 70-100";
  } else {
    result += " AND y is NOT in range of 40-60 or 70-100";
  }
  return result;
};
console.log(ex5(3, 70));
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
console.log("\nExercise 6");
const ex6 = function (str, x) {
  let copies = [];
  for (let i = 0; i < Math.abs(x); i++) {
    copies.push(str);
  }
  return copies;
};
console.log(ex6("three", -3));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
console.log("\nExercise 7");
const ex7 = function (str) {
  if (str.substring(0, 3) === "Los" || str.substring(0, 3) === "New") {
    return str;
  } else {
    return "";
  }
};
console.log(ex7("New Angeles"));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
console.log("\nExercise 7");
const ex8 = function (arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};
console.log(ex8([1, 2, 4]));
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
console.log("\nExercise 9");
const ex9 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      return true;
    }
  }
  return false;
};
console.log(ex9([31, 13]));
/*

10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

*/
console.log("\nExercise 10");
const ex10 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 1 || arr[i] !== 3) {
      return true;
    }
  }
  return false;
};
console.log(ex10([31, 13]));
/*
11)

Create a function to find the longest string from a given array of strings.
*/
console.log("\nExercise 11");
const ex11 = function (arr) {
  let max = [];
  let result = "";
  arr.forEach((element) => {
    max.push(element.length);
    if (Math.max(...max) === element.length) {
      result = element;
    }
  });
  return result;
};
console.log(ex11(["a", "ab", "abcd", "abc"]));
/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

*/
console.log("\nExercise 12");
const ex12 = function (angle) {
  if (angle > 0 && angle < 90) {
    return "Acute Angle";
  } else if (angle === 90) {
    return "Right Angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse Angle";
  } else if (angle === 180) {
    return "Straight Angle";
  }
};
console.log(ex12(90));
/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/
console.log("\nExercise 13");
const ex13 = function (arr) {
  let result;
  arr.forEach((element) => {
    if (Math.max(...arr) === element) {
      result = arr.indexOf(Math.max(...arr));
    }
  });
  return result;
};
console.log(ex13([1, 3, 91, 56, 31, 9]));
/*
14)

Create a function to get the largest even number from an array of integers.
*/
console.log("\nExercise 14");
const ex14 = function (arr) {
  let even = [];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      even.push(element);
    }
  });
  return Math.max(...even);
};
console.log(ex14([1, 2, 3, 4, 5, 6, 7, 18, 9, 10]));
/*
16)

Create a function to check from two given integers, whether one is positive and 
another one is negative.
*/
console.log("\nExercise 16");
const ex16 = function (x, y) {
  let result = "";
  let arr = [x, y];
  arr.forEach((element) => {
    if (Math.sign(element) === 1) {
      result += `${element} is positive \n`;
    } else if (Math.sign(element) === -1) {
      result += `${element} is negative \n`;
    } else if (Math.sign(element) === 0) {
      result += `${element} is zero \n`;
    }
  });
  return result;
};
console.log(ex16(0, -3));
/*
17)

Create a function to create new string with first 3 characters are in lower case 
and the others in upper case. 
If the string length is less than 3 convert all the characters in upper case. 
*/
console.log("\nExercise 17");
const ex17 = function (str) {
  let result = "";
  let split = str.split("");
  let count = 0;
  for (let i = 0; i < split.length; i++) {
    if (str.split(" ").join("").length < 4) {
      split[i] = split[i].toUpperCase();
    } else if (split[i] !== " " && count !== 3) {
      split[i] = split[i].toLowerCase();
      count++;
    } else {
      split[i] = split[i].toUpperCase();
    }
  }
  result = split.join("");
  return result;
};
console.log(ex17("A Bc"));
/*
18)

Create a function to calculate the sum of the two given integers, 
If the sum is in the range 50..80 return 65 other wise return 80.
*/
console.log("\nExercise 18");
const ex18 = function (x, y) {
  let sum = x + y;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
};
console.log(ex18(30, 10));
/*
19)

Create a function to convert a number to a string, the contents of which depend 
on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, 
just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
console.log("\nExercise 19");
const ex19 = function (x) {
  let factors = [];
  let result = "";
  for (let i = 1; i <= Math.floor(Math.sqrt(x)); i++) {
    if (x % i === 0) {
      factors.push(i);
      if (x / i !== i) {
        factors.push(x / i);
      }
    }
  }
  factors.forEach((factor) => {
    if (factor === 3) {
      result = result + "Diego";
    } else if (factor === 5) {
      result = result + "Riccardo";
    } else if (factor === 7) {
      result = result + "Stefano";
    }
  });
  if (result === "") {
    result = x;
  }
  return result;
};
console.log(ex19(30));
/*
20)
Create a function that given a phrase returns its acronym, 
like British Broadcasting Corporation returns BBC

*/
console.log("\nExercise 20");
const ex20 = function (str) {
  let split = str.split(" ");
  let result = "";
  split.forEach((element) => {
    if (element.slice(0, 1).toUpperCase() === element.slice(0, 1))
      result = result + element.slice(0, 1);
  });
  return result;
};
console.log(ex20("British Broadcasting of Corporation"));
