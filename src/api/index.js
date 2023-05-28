import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/";

export async function getData(params) {
  const { data } = await axios.get(`${BASE_URL}${params}`);
  return data;
}

// export async function getData(params) {
//   return axios
//     .get(`${BASE_URL}${params}`)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       throw new Error(error.message);
//     });
// }

// export function getData(params) {
//   return fetch(`${BASE_URL}${params}`).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// }
