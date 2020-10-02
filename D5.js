/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

const { object } = require("prop-types");

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/
console.log("\nEx.A");
const test = "this is a string";
console.log(test);

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/
console.log("\nEx.B");
let sum = 10 + 20;
console.log(`Sum of 10 + 20 is ${sum}`);

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/
console.log("\nEx.C");
let random = Math.floor(Math.random() * Math.floor(20));
console.log(random);

/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
console.log("\nEx.D");
let Me = {
  name: "Hung Jin",
  surname: "Chong",
  age: 24,
};
console.log(Me);

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/
console.log("\nEx.E");
delete Me.age;
console.log(Me);

/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/
console.log("\nEx.F");
Me.skills = ["Javascript", "Java", "Python"];
console.log(Me.skills);

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/
console.log("\nEx G");
Me.skills.pop();
console.log(Me.skills);

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/
console.log("\nEx1");
let dice = () => Math.floor(Math.random() * 6) + 1;
console.log(dice());

/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/
console.log("\nEx.2");
let whoIsBigger = (no1, no2) =>
  no1 > no2 ? console.log(`no1 is bigger`) : console.log(`no2 is bigger`);
whoIsBigger(1, 2);

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/
console.log("\nEx.3");
let splitMe = (string) => string.split(" ");
console.log(splitMe("This is food"));

/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter,
    otherwise should remove the last one
*/
console.log("\nEx.4");
let deleteOne = (string, boolean) =>
  boolean ? string.slice(1) : string.substring(0, string.length - 1);
console.log(deleteOne("delete", false));

/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
console.log("\nEx.6");
//function for checking if char is number
let isNumber = (char) => char >= "0" && char <= "9";
let onlyLetters = (string) => {
  //loop each char and check if its a number
  let complete = "";
  for (let i = 0; i < string.length; i++) {
    //if its not a number add the char
    if (isNumber(string[i]) === false) {
      complete = complete + string[i];
    }
  }
  return complete;
};
console.log(onlyLetters("i love 123 123sjdf123kl"));

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/
console.log("\nEx. 6");
//no space, no special chars, must contain @xxx.com
//function to check space
let hasSpace = (char) => char === " ";
//function to check special chars except @ with regex
let hasSpecial = (char) => char.match(/[^\w@\.]/);
let isThisAnEmail = (string) => {
  //loop through the string char by char
  let aCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (hasSpace(string.charAt(i))) {
      return false;
    } else if (hasSpecial(string.charAt(i)) !== null) {
      return false;
    } else if (string.charAt(i) === "@") {
      aCount++; //checks if it has more than one @ symbol
    }
  }
  if (string.slice(-4) === ".com" && aCount === 1) {
    return true;
  } else {
    return false;
  }
};
console.log(isThisAnEmail("abc@bc.com"));

/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
console.log("\nEx.7");
//attempt for switch case
let whatDayIsIt = (day) => {
  day = new Date().getDay();
  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return day;
};
console.log(whatDayIsIt());

/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
console.log("\nEx.8");
let diceValue = {
  sum: 0,
  values: [],
};
let rollTheDices = (number) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    let roll = dice();
    diceValue.values.push(roll);
    diceValue.sum = diceValue.sum + roll;
  }
  return diceValue;
};
console.log(rollTheDices(3));

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/
console.log("\nEx.9");
let howManyDays = (date) => {
  let present = new Date();
  let since = new Date();
  since = Math.abs(present - date);
  //the substraction returns days in miliseconds, so divide it by multiplying the number of seconds, minute, day, and milisecond
  days = Math.abs(since) / (60 * 60 * 24 * 1000);
  return Math.floor(days);
};
let d = new Date("2020-10-30");
console.log(howManyDays(d));

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/
console.log("\nEx.10");
let isTodayMyBday = (date) => {
  let bday = new Date("1996-06-08");
  return date.getDate() === 8 && date.getMonth() === 5;
};
let date = new Date("2020-06-08");
console.log(isTodayMyBday(date));

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/

/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
