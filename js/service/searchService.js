const api = 'https://stephen-king-api.onrender.com/api/books';
let searchResults = [];

async function getSearchResults() {
  const response = await fetch(api);
  const responseJson = await response.json();
  console.log("responseJSON", responseJson);

  if (!response.ok) {
      throw new Error(response.status);
  }

  return responseJson;
}


console.log("response", searchResults);
export default { getSearchResults };