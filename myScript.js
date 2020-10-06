// <!-- Starting from D6's exercise, use your Smartphone Shop Website and implement the following exercises-->

//const { func } = require("prop-types");

/*EXERCISE 1 
     Create a new welcome alert message when the page successfully loads
    */
window.alert("Hello! Welcome to my SmartPhone");
/* EXERCISE 2
      Write a function to change the Title of the page in something else 
      (execute the function in browser console)
  */
const changeTitle = function () {
  document.querySelector("h1").innerText = "THIS IS A SCAM";
  let titleTag = document.createElement("TITLE");
  document.head.appendChild(titleTag);
  document.querySelector("TITLE").innerText = "New Title";
};
/* EXERCISE 3a
      Write a function to add a class to the page's h1 title in "red-color" 
      (execute the function when title is hovered by mouse).
  */
const addClassToTitle = function () {
  document.querySelector("h1").classList.add("red-color");
};
/* EXERCISE 3b
      Write a function to remove "red-color" class from previous h1 
      (execute the function when the mouse leaves the title).
  */
const removeClassFromTitle = function () {
  document.querySelector("h1").classList.remove("red-color");
};
/* EXERCISE 4
      Add the following html snippet to your page:
          <h2 id="listTitle">Todo List</h2>
          <ul id="firstList">
              <li><p>1st</p></li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <ul id="secondList">
              <li>1st</li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <div>
              <p>This text is just for the exercise</p>
          </div>
  Write a function to change the text of only the p which are child of a div 
  (execute the function by assigning it to a button's click event)
  */
const changePContent = function () {
  document.querySelector("div > p").innerHTML = "CHANGED TEXT!!!!";
};
/* EXERCISE 5
      Write a function to change the list title 
      (you can use previous day's textarea as input
       or create a new text input field to grab the content)
  */
const changeListTitle = function () {
  document.querySelector("#listTitle").innerHTML = document.querySelector(
    "textarea"
  ).value;
};
/* EXERCISE 6
       Write a function to add a new item ONLY to the second list 
       (create an input field + add button)
  */
const addToTheSecond = function () {
  let newText = document.querySelector("#inputList").value;
  let newNode = document.createTextNode(newText);
  let li = document.createElement("li");
  li.appendChild(newNode);
  document.querySelector("#secondList").appendChild(li);
};
/* EXERCISE 7
      Write a function to make the first UL disappear (button)
  */
const firstUlDisappear = function () {
  document.querySelector("#firstList").remove();
};
/* EXERCISE 8
      Write a function to make the background of every UL green (button)
  */
const paintItGreen = function () {
  const uls = document.querySelectorAll("ul");
  uls.forEach((ul) => {
    ul.style.backgroundColor = "green";
  });
};

/* EXERCISE 9
      Add a "magnifier function" to the table.
      When the user mouse goes on a table cell (not the image one) 
      the font size must increase.
      HINT use mouseenter / mouseleave events
  */
const makeThemMagnifiable = function () {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", function () {
      cell.style.fontSize = "xx-large";
    });
    cell.addEventListener("mouseleave", function () {
      cell.style.fontSize = "medium";
    });
  });
};

/* EXERCISE 10
      Add a button to toggle all the product images (toggle => if visible, hide, if not visible, show)
  */
const toggleShowImages = function () {
  const btns = document.querySelectorAll(".toggleBtn");
  const imgs = document.querySelectorAll("img");

  for (let i = 0; i < btns.length; i++) {
    btns[i];
    btns[i].addEventListener("click", function () {
      if (imgs[i].style.visibility === "hidden") {
        imgs[i].style.visibility = "visible";
      } else {
        imgs[i].style.visibility = "hidden";
      }
    });
  }
};

//##### EXTRA

/* EXERCISE 11
      Make the heading of the page change color radomly every time the user clicks on it
      */
const makeItClickable = function () {
  document.querySelector("h1").style.color =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
};

/*EXERCISE 12
    Refactor your HTML code with HTML5 semantic tags such as header, section, footer, etc
*/
