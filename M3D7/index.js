async function userSearch() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

window.onload = async function () {
  const data = await userSearch();
  console.log(data);
};

async function test() {
  const data = await userSearch();
  console.log(data);
}
