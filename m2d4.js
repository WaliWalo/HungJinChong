const nameList = [];
const addName = function () {
  let namesTbl = document.querySelector("#names");
  let name = document.querySelector("#nameIn").value;
  if (name == "" || name == null || name == undefined) {
    window.alert("Name Empty!");
  } else {
    nameList.push(name);
    let text = document.createTextNode(name);
    let row = document.createElement("row");
    row.classList.add("d-block");
    row.setAttribute("id", name);
    row.appendChild(text);
    namesTbl.appendChild(row);
  }
};

const assign = function () {
  let input = document.querySelector("#inputGroupSelect04").selectedIndex;

  //create number of teams with people in it
  //first get number of people in a team
  //4 user, 2 team, 2 each
  //6 user, 2 team, 3 each
  //user/team, absolute value
  //TEAM  MUST BE LESS THAN NUMBER OF PEOPLE
  let loop = Math.ceil(nameList.length / input);
  for (let i = 0; i < input; i++) {
    //create card title
    let teamsCol = document.querySelector("#teams");
    let div = document.createElement("div");
    div.classList.add("card");
    teamsCol.appendChild(div);
    let card = document.createElement("div");
    card.classList.add("card-body");
    div.appendChild(card);
    let team = `Team ${i + 1}`;
    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    let cardTitle = document.createTextNode(team);
    h5.appendChild(cardTitle);
    card.appendChild(h5);
    //create card body
    for (let j = 0; j < loop; j++) {
      let index = Math.floor(Math.random() * nameList.length);
      let cardBody = document.createElement("p");
      cardBody.classList.add("card-text");
      cardBody.innerText = nameList[index];
      let user = document.querySelector(`#${nameList[index]}`);
      user.remove();
      cardBody.setAttribute("id", nameList[index]);
      cardBody.addEventListener("click", function () {
        let namesTbl = document.querySelector("#names");
        let name = nameList[index];
        let text = document.createTextNode(name);
        let row = document.createElement("row");
        row.classList.add("d-block");
        row.setAttribute("id", name);
        row.appendChild(text);
        namesTbl.appendChild(row);
      });
      card.appendChild(cardBody);
      nameList.splice(index, 1);
    }
  }
};

const refresh = function () {
  location.reload();
};
