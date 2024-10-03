const api = 'https://stephen-king-api.onrender.com/api/shorts';
let shorts = [];

async function getShorts() {
  const response = await fetch(api);
  const responseJson = await response.json();
  console.log("responseJSON", responseJson);

  if (!response.ok) {
      throw new Error(response.status);
  }

  return responseJson;
}


console.log("short Stories", shorts);
export default { getShorts };