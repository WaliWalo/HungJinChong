getProducts = async () => {
  const url = "https://striveschool-api.herokuapp.com/api/product/";
  const header =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzU3MjRiY2RlMTAwMTc2MTZhODgiLCJpYXQiOjE2MDUwOTk0NzksImV4cCI6MTYwNjMwOTA3OX0.i0zGdN0uflyPVQUp85NtplJivQFLB8qmDUeGYmurw1Y";
  try {
    let response = await fetch(url, {
      headers: {
        Authorization: header,
      },
    });

    let products = await response.json();
    console.log(products);
    return products;
  } catch (error) {
    alert(error);
  }
};

window.onload = async () => {
  loadProducts();
};
const row = document.querySelector("div.row");
getCardsString = (products) => {
  let cardsString = "";
  if (products.length > 0) {
    cardsString = products.reverse().reduce(
      (accumulator, currentProduct) =>
        accumulator +
        `<div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img src="images/${currentProduct.imageUrl.slice(12)}" />
                    <div class="card-body" style="height: 200px; overflow-y: auto">
                    <p class="card-text">
                    <div>
                    <div><strong>Name:</strong> ${currentProduct.name}</div>
                    <div><strong>Brand:</strong> ${currentProduct.brand}</div>
                    <div>${currentProduct.description}</div>
                    <div><strong>Price:</strong> £ ${currentProduct.price}</div>
                    </div>
                    
                    </p>
                    <div
                        class="d-flex justify-content-between align-items-center"
                    >
                        <div class="btn-group">
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                        >
                            View
                        </button>
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                        >
                            Edit
                        </button>
                        </div>
                        <small class="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
            </div>`,
      ""
    );
    row.innerHTML = cardsString;
  } else {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "No Products";
  }
};

loadProducts = async () => {
  const products = await getProducts();
  getCardsString(products);
};
const input = document.querySelector("#search");
searchProduct = async () => {
  clearTable();
  const products = await getProducts();
  let result = products.filter((product) =>
    product.name.toLowerCase().includes(input.value.toLowerCase())
  );
  getCardsString(result);
};

clearTable = () => {
  row.innerHTML = "";
};
