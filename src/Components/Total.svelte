<script>
  import { onMount } from "svelte";
  import { getTotal } from "../api/getTotal";
  let fetchError = null;
  let totalData = null;

  onMount(async () => {
    const [data, error] = await getTotal();
    totalData = data;
    fetchError = error;
  });
</script>

<div
  class="sm:container flex-wrap flex p-5 mt-3 self-center justify-center items-center gap-2"
>
  {#if !totalData && !fetchError}
    <h3 class="text-2xl font-bold text-red-500">Loading...</h3>
  {:else if totalData}
    <div
      class="h-full border-2 border-indigo-600 font-bold p-2 text-center grid place-content-center"
    >
      Total cases: {totalData.confirmed}
    </div>
    <div
      class="h-full border-2 border-yellow-400 font-bold p-2 text-center grid place-content-center"
    >
      Recovered cases: {totalData.recovered}
    </div>
    <div
      class="h-full border-2 border-red-500 font-bold p-2 text-center grid place-content-center"
    >
      Deaths: {totalData.deaths}
    </div>
  {:else}
    <h3 class="text-2xl font-bold text-red-500">
      Error occured: {fetchError.message.toLowerCase()}
    </h3>
  {/if}
</div>
