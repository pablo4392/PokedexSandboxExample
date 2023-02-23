import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";

const Services = (limit, offset) => {
  const allPokes = axios({
    method: "GET",
    url: `${baseURL}pokemon?limit=${limit}&offset=${offset}`
  });

  return allPokes;
};

export default Services;
