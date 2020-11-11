const url = "https://striveschool-api.herokuapp.com/api/product/";
const header =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzU3MjRiY2RlMTAwMTc2MTZhODgiLCJpYXQiOjE2MDUwOTk0NzksImV4cCI6MTYwNjMwOTA3OX0.i0zGdN0uflyPVQUp85NtplJivQFLB8qmDUeGYmurw1Y";

const handleSubmit = (e) => {
  e.preventDefault(); // preventing the default browser event handling
  submitProduct();
};

const submitProduct = async () => {
  console.log(url);
  let product = {
    name: document.querySelector("#name").value,
    brand: document.querySelector("#brand").value,
    description: document.querySelector("#desc").value,
    imageUrl: document.querySelector("#image").value,
    price: parseFloat(document.querySelector("#price").value),
  };

  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: header,
      }),
    });
    if (response.ok) {
      // checking the ok property which stores the successful result of the operation
      alert("Product created successfully");
      location.assign("index.html");
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    alert(error);
  }
};
