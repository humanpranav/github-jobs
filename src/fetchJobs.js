import axios from "axios";
import data from "./response.json";
// const BASE_URL =
//   "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

// export const retrieveData = async () => {
//   let response = await axios.get("https://jobs.github.com/positions.json");

//   console.log(response);

//   return response.data;
// };
export const retrieveData = async () => {
  // let response = await axios.get("response.json");

  console.log(data);

  return data;
};
