import axios from "axios";

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

export const retrieveData = async () => {
  let response = await axios.get("https://jobs.github.com/positions.json");

  console.log(response);

  return response.data;
};
