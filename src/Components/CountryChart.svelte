<script>
  export let data;
  import { afterUpdate, onMount } from "svelte";
  import { Chart, registerables } from "chart.js";
  Chart.register(...registerables);
  let chartCanvas;
  let chart;

  afterUpdate(() => {
    if (!chart) {
      chart = new Chart(chartCanvas.getContext("2d"), {
        type: "bar",
        data: {
          labels: ["Total", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: ["#A7F3D0", "#A5F3FC", "#FDA4AF"],
              borderColor: ["#059669", "#6B21A8", "#9F1239"],
              data: [data.confirmed, data.recovered, data.deaths],
            },
          ],
        },
      });
    } else {
      chart.data.datasets[0].data = [
        data.confirmed,
        data.recovered,
        data.deaths,
      ];
      chart.update();
    }
  });
</script>

<div
  class="container flex flex-col items-center self-center mt-4 max-w-screen-lg p-8"
>
  <canvas bind:this={chartCanvas} class="w-full" />
</div>
