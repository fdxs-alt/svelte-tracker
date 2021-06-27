import axios from "axios";

const DAILY_URL = "https://covid19.mathdro.id/api/daily";

export const getChartData = async () => {
  try {
    const { data } = await axios.get(DAILY_URL);

    const chartData = data
      .slice(300)
      .map(({ reportDate, totalConfirmed, deaths }) => ({
        confirmed: totalConfirmed,
        reportDate,
        deaths: deaths.total,
      }));

    return [chartData, null];
  } catch (error) {
    return [null, error.response.data.error];
  }
};
