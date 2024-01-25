import axios from "axios";

const BASE_URL = "https://bayut.p.rapidapi.com";
const TOKEN = import.meta.env.VITE_APP_REALESTATE_TOKEN;

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: {
        "X-RapidAPI-Key": TOKEN,
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
