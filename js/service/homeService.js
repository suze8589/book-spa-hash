const api = 'https://stephen-king-api.onrender.com/api/books';
let books = [];

async function getBooks() {
  const response = await fetch(api);
  const responseJson = await response.json();
  console.log("responseJSON", responseJson);

  if (!response.ok) {
      throw new Error(response.status);
  }

  return responseJson;
}


console.log("random book should appear", books);
export default { getBooks };