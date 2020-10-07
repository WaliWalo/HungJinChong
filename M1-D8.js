const addNewTask = function () {
  const ul = document.querySelector("#myTaskList");
  if (ul.innerHTML === "EMPTY") {
    ul.innerHTML = "";
  }

  const input = document.querySelector("#newTask").value;
  const li = document.createElement("li");
  const text = document.createTextNode(input);
  li.appendChild(text);
  ul.appendChild(li);
};

const removeLast = function () {
  const lists = document.querySelectorAll("li");
  if (lists.length === 0) {
    document.querySelector("#myTaskList").innerHTML = "EMPTY";
  } else {
    lists[lists.length - 1].remove();
  }
};

const removeFirst = function () {
  const lists = document.querySelectorAll("li");
  if (lists.length === 0) {
    document.querySelector("#myTaskList").innerHTML = "EMPTY";
  } else {
    lists[0].remove();
  }
};

const getTasksAsArray = function () {
  const lists = document.querySelectorAll("li");
  const array = [];
  lists.forEach((list) => {
    array.push(list.innerText);
  });

  console.log(array);
  return array;
};

const changeTaskBackgroundColor = function () {
  const color = document.querySelector("#colorPicker").value;
  const lists = document.querySelectorAll("li");
  lists.forEach((list) => {
    list.style.backgroundColor = color;
  });
};

//[1,2,3,4]
//sort array one element by one element
/*
loop this for n times
For each element{
    compare to element + 1
    if element is > element + 1
    temp = element
    element = element + 1
    element + 1 = temp
}
 */
const bubbleSort = function () {
  const lists = getTasksAsArray();
  let temp = "";
  //first for loop to loop through the number of string in the array
  for (let i = 0; i < lists.length; i++) {
    //lists.length-i-1 basically means dont loop the last element as it already is the biggest
    for (let j = 0; j < lists.length - i - 1; j++) {
      if (lists[j] > lists[j + 1]) {
        temp = lists[j];
        lists[j] = lists[j + 1];
        lists[j + 1] = temp;
        console.log(lists);
      }
    }
  }
  const lis = document.querySelectorAll("li");
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerText = lists[i];
  }
};
