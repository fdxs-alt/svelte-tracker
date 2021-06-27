import axios from "axios";

const COUNTRIES_URL = "https://covid19.mathdro.id/api/countries";

export const getCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(COUNTRIES_URL);

    return [countries.map((el) => el.name), null];
  } catch (error) {
    return [null, error.response.data.error];
  }
};
