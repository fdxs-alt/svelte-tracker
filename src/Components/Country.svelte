<script>
  import Countries from "./Countries.svelte";
  import { getCountry } from "../api/getSelectedCountry";
  import CountryChart from "./CountryChart.svelte";
  let selectedCountryData = null;
  let disabled = false;
  const handleChange = async (e) => {
    disabled = true;
    const [data] = await getCountry(e.detail.country);
    selectedCountryData = data;
    disabled = false;
  };
</script>

<Countries on:country-change={handleChange} {disabled} />
{#if selectedCountryData}
  <CountryChart data={selectedCountryData} />
{:else}
  <h2 class="text-center font-bold text-2xl">Please select country</h2>
{/if}
