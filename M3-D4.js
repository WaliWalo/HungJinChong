// let books = [];
// const getApi = () => {
//   fetch("https://striveschool-api.herokuapp.com/books")
//     .then((response) => response.json())
//     .then((body) => {
//       books = body;
//       return books;
//     })
//     .catch((e) => console.log(e));
// };

async function getApi() {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/books"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
let allBooks = [];
async function loadData() {
  const books = await getApi();
  let row = document.querySelector("div.album div.row");
  let cards = "";
  books.forEach((book) => {
    allBooks.push(book);
    cards += `<div class="col-md-4" id=${book.asin}>
      <div class="card mb-4 shadow-sm">
        <img src="${book.img}" />
        <div class="card-body">
          <p class="card-text">
            ${book.title}
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              ><a 
              href="M3-D4Detail.html?${book.asin}">
                View
                </a>
              </button>
              <button
              onclick = "skip(this)"
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Skip
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Add to Cart
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>`;
  });
  row.innerHTML = cards;
  btnClickEvent();
}

const btnClickEvent = () => {
  let btn = document.querySelectorAll(
    "div.card.mb-4.shadow-sm button:last-of-type"
  );
  btn.forEach((element) => {
    element.addEventListener("click", addToCart);
  });
};

const cart = [];
const addToCart = function () {
  let selected = this.parentElement.parentElement.parentElement.parentElement;
  selected.classList.add("bg-success");
  cart.push(selected.parentElement.id);
  let selectedBook = allBooks.filter(
    (book) => book.asin === selected.parentElement.id
  );
  let list = document.querySelector(".list-group");
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = selectedBook[0].title;
  let delBtn = document.createElement("button");
  delBtn.classList.add("btn");
  delBtn.classList.add("btn-dark");
  delBtn.innerHTML = "Remove";
  delBtn.setAttribute("onclick", "removeCart(this)");
  li.appendChild(delBtn);
  list.appendChild(li);
  //console.log(selectedBook[0].title);
};

const skip = function (skipBtn) {
  let selected =
    skipBtn.parentElement.parentElement.parentElement.parentElement
      .parentElement;
  selected.remove();
};

const search = () => {
  let input = document.querySelector("input").value;
  let cardTitles = document.querySelectorAll("p.card-text");
  for (let i = 0; i < cardTitles.length; i++) {
    if (cardTitles[i].innerText.includes(input)) {
      cardTitles[i].parentElement.parentElement.parentElement.style.display =
        "block";
    } else {
      cardTitles[i].parentElement.parentElement.parentElement.style.display =
        "none";
    }
  }
  //const inp = cardTitles.filter((card) => card.innerText.length < 6);
  //console.log(inp);
};

const removeCart = (cart) => {
  cart.parentElement.remove();
};

const clearCart = () => {
  let cart = document.querySelectorAll("#cart li");
  cart.forEach((element) => {
    element.remove();
  });
};

window.onload = () => {
  loadData();
};
