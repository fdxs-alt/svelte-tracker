<script>
  import { onMount } from "svelte";
  import { getChartData } from "../api/getChartData";
  import { Chart, registerables } from "chart.js";
  Chart.register(...registerables);
  let chartCanvas;
  let fetchError = null;

  onMount(async () => {
    const [data, error] = await getChartData();

    if (data && chartCanvas) {
      const chart = new Chart(chartCanvas.getContext("2d"), {
        type: "line",
        data: {
          labels: data.map((el) => el.reportDate),
          datasets: [
            {
              label: "Confirmed",
              backgroundColor: "rgb(0, 0, 0, 0.1)",
              borderColor: "rgb(0, 0, 0)",
              data: data.map((el) => el.confirmed),
              fill: true,
            },
            {
              label: "Deaths",
              backgroundColor: "rgba(255, 41, 71, 0.3)",
              borderColor: "rgb(255, 41, 71)",
              data: data.map((el) => el.deaths),
              fill: true,
            },
          ],
        },
      });

      if (error) {
        fetchError = error;
      }
    }
  });
</script>

<div
  class="container flex flex-col items-center self-center mt-4 p-16 max-w-screen-lg"
>
  <h2 class="text-4xl underline mb-10 font-bold text-center">
    Chart of global cases
  </h2>
  <canvas bind:this={chartCanvas} class="w-full" />
  {#if fetchError}
    <h2 class="text-2xl underline mb-5">
      Error occured: {fetchError.message.toLowerCase()}
    </h2>
  {/if}
</div>
