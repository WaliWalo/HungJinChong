const handleSubmit = (e) => {
  e.preventDefault(); // preventing the default browser event handling
  submitProduct();
};
let id = null;
const submitProduct = async () => {
  let spinner = document.querySelector("#loadingSpinner");
  spinner.classList.toggle("d-none"); // showing the spinner
  let product = {
    name: document.querySelector("#name").value,
    brand: document.querySelector("#brand").value,
    description: document.querySelector("#desc").value,
    imageUrl: document.querySelector("#image").value,
    price: parseFloat(document.querySelector("#price").value),
  };
  let urlParams = new URLSearchParams(window.location.search);
  id = urlParams.get("id");
  try {
    let response;
    if (id) {
      response = await fetch(url + id, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: header,
        }),
      });
    } else {
      response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(product),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: header,
        }),
      });
    }

    if (response.ok) {
      spinner.classList.toggle("d-none");
      // checking the ok property which stores the successful result of the operation
      alert(`Product ${id ? "updated" : "created"} successfully`);
      location.assign("index.html");
    } else {
      spinner.classList.toggle("d-none");
      alert("Something went wrong!");
    }
  } catch (error) {
    alert(error);
  }
};

const loadProductTab = async (sortProducts) => {
  let products = await getProducts();
  if (sortProducts) {
    products = sortProducts;
  }
  console.log(products);
  let productsString = "";
  let tBody = document.querySelector("tbody");
  tBody.innerHTML = "";
  if (products.length > 0) {
    productsString = products.reverse().reduce(
      (accumulator, currentProduct, currentIndex) =>
        accumulator +
        `<tr">
    <th scope="row">${currentIndex + 1}</th>
    <td>${currentProduct.name}</td>
    <td>${currentProduct.brand}</td>
    <td>£${currentProduct.price}</td>
    <td id = "${currentProduct._id}">
      <a onclick="removeProduct(this)"><i class="fas fa-window-close"></i></a>
      <a href="backoffice.html?id=${currentProduct._id}">
      <i class="fas fa-edit"></i>
      </a>
    </td>
  </tr>`,
      ""
    );
  }
  tBody.innerHTML = productsString;
};

removeProduct = async (btn) => {
  console.log(btn.parentElement.parentElement);
  try {
    let response = await fetch(url + btn.parentElement.id, {
      method: "DELETE",
      headers: {
        Authorization: header,
      },
    });
    if (response.ok) {
      btn.parentElement.parentElement.classList.add("fade-out");
      setTimeout(function () {
        btn.parentElement.parentElement.remove();
      }, 3000);
      // checking the ok property which stores the successful result of the operation
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
};

window.onload = async () => {
  let urlParams = new URLSearchParams(window.location.search);
  id = urlParams.get("id");
  console.log(id);
  if (id) {
    let response = await fetch(url + id, {
      headers: {
        Authorization: header,
      },
    }); // contacting the endpoint for a single event
    let product = await response.json(); // transforming the response body in an usable object, asyncronous operation!
    document.getElementById("name").value = product.name;
    document.getElementById("brand").value = product.brand;
    document.getElementById("desc").value = product.description;
    document.getElementById("price").value = product.price;
    document.getElementById("submitBtn").innerHTML = "Update Product";
  }
  loadProductTab();
};

let sorted = false;
sortName = async () => {
  const products = await getProducts();
  if (sorted == false) {
    products.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    sorted = true;
  } else if (sorted == true) {
    products.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    sorted = false;
  }
  loadProductTab(products);
};

let sortedBrand = false;
sortBrand = async () => {
  const products = await getProducts();
  if (sortedBrand == false) {
    products.sort(function (a, b) {
      var brandA = a.brand.toUpperCase(); // ignore upper and lowercase
      var brandB = b.brand.toUpperCase(); // ignore upper and lowercase
      if (brandA < brandB) {
        return -1;
      }
      if (brandA > brandB) {
        return 1;
      }

      // brands must be equal
      return 0;
    });
    sortedBrand = true;
  } else if (sortedBrand == true) {
    products.sort(function (a, b) {
      var brandA = a.brand.toUpperCase(); // ignore upper and lowercase
      var brandB = b.brand.toUpperCase(); // ignore upper and lowercase
      if (brandA > brandB) {
        return -1;
      }
      if (brandA < brandB) {
        return 1;
      }

      // brands must be equal
      return 0;
    });
    sortedBrand = false;
  }
  loadProductTab(products);
};

let sortedPrice = false;
sortPrice = async () => {
  const products = await getProducts();
  if (sortedPrice == false) {
    products.sort(function (a, b) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }

      // prices must be equal
      return 0;
    });
    sortedPrice = true;
  } else if (sortedPrice == true) {
    products.sort(function (a, b) {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }

      // prices must be equal
      return 0;
    });
    sortedPrice = false;
  }
  loadProductTab(products);
};
