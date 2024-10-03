const api = 'https://stephen-king-api.onrender.com/api/villains';
let villains = [];

async function getVillains() {
  const response = await fetch(api);
  const responseJson = await response.json();
  console.log("responseJSON", responseJson);

  if (!response.ok) {
      throw new Error(response.status);
  }

  return responseJson;
}


console.log("Villains", villains);
export default { getVillains };