import axios, { AxiosError } from "axios";

const COUNTRIES_URL = "https://covid19.mathdro.id/api/countries";

export const getCountry = async (country) => {
  try {
    if (!country) {
      throw new Error("No country specified");
    }

    const { data } = await axios.get(COUNTRIES_URL + `/${country}`);

    const info = {
      confirmed: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
      date: data.lastUpdate,
    };

    return [info, null];
  } catch (error) {
    console.log();
    return [null, error.message];
  }
};
