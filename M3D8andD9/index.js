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
                    <div><strong>Price:</strong> £ ${currentProduct.price}</div>
                    </div>
                    
                    </p>
                    <div
                        class="d-flex justify-content-between align-items-center"
                    >
                        <div class="btn-group">
                        <a href="details.html?id=${currentProduct._id}">
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                        >
                            View
                        </button>
                        </a>
                        </div>
                        <small class="text-muted">${
                          currentProduct.updatedAt.split("T")[0]
                        }</small>
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
