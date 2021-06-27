import axios from "axios";

const TOTAL_URL = "https://covid19.mathdro.id/api";

export const getTotal = async () => {
  try {
    const { data } = await axios.get(TOTAL_URL);

    const { confirmed, deaths, recovered } = data;

    const total = {
      confirmed: confirmed.value,
      deaths: deaths.value,
      recovered: recovered.value,
    };

    return [total, null];
  } catch (error) {
    return [null, error.response.data.error];
  }
};
