<!-- svelte-ignore a11y-no-onchange -->
<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { getCountries } from "../api/getCountries";
  const dispatch = createEventDispatcher();
  let countries = null;
  let selectedCountry = null;
  let fetchError = null;

  const handleChange = (e) => {
    dispatch("country-change", { country: selectedCountry });
  };

  onMount(async () => {
    const [data, error] = await getCountries();
    countries = data;
    fetchError = error;
  });

  export let disabled;
</script>

<div
  class="container self-center flex flex-col justify-center items-center p-16"
>
  <h2 class="text-4xl font-bold mt-5 mb-4 text-center">
    STATISTICS IN COUNTRIES
  </h2>
  {#if !countries && !fetchError}
    <h3 class="text-2xl font-bold text-gray-500 text-center">Loading...</h3>
  {:else if countries}
    <select
      bind:value={selectedCountry}
      on:change={handleChange}
      {disabled}
      class="mt-5"
    >
      <option disabled selected>Select country</option>
      {#each countries as country}
        <option value={country}>
          {country}
        </option>
      {/each}
    </select>
  {/if}
</div>
