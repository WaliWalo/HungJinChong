const url = "https://striveschool-api.herokuapp.com/api/product/";
const header =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzU3MjRiY2RlMTAwMTc2MTZhODgiLCJpYXQiOjE2MDUwOTk0NzksImV4cCI6MTYwNjMwOTA3OX0.i0zGdN0uflyPVQUp85NtplJivQFLB8qmDUeGYmurw1Y";
getProducts = async () => {
  try {
    let response = await fetch(url, {
      headers: {
        Authorization: header,
      },
    });

    let products = await response.json();
    return products;
  } catch (error) {
    alert(error);
  }
};
