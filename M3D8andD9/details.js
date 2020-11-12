let urlParam = new URLSearchParams(window.location.search);
let id = urlParam.get("id");
getProductDetails = async () => {
  try {
    let response = await fetch(url + id, {
      headers: { Authorization: header },
    });
    let product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};

displayProductDetails = async () => {
  const img = document.querySelector("img");
  const title = document.querySelector(".card-title");
  const brand = document.querySelector("#brand");
  const desc = document.querySelector("#desc");
  const price = document.querySelector("#price");
  let product = await getProductDetails();
  console.log(product.imageUrl.slice(12));
  img.src = `images/${product.imageUrl.slice(12)}`;
  title.innerHTML = product.name;
  brand.innerHTML = `<strong>Brand:</strong> ${product.brand}`;
  desc.innerHTML = `<strong>Description:</strong> ${product.description}`;
  price.innerHTML = `<strong>Price:</strong> £${product.price}`;
};

window.onload = async () => {
  displayProductDetails();
};
