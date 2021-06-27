<script>
  import Chart from "./Components/Chart.svelte";
  import CountryChart from "./Components/Country.svelte";
  import Total from "./Components/Total.svelte";
</script>

<main class="w-full flex justify-center flex-col p-20">
  <h1 class="text-center w-full p-4 font-bold text-4xl underline">
    COVID TRACKER
  </h1>
  <Total />
  <Chart />
  <CountryChart />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
