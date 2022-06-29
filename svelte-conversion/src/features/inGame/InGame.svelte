<script lang="ts" context="module">
  import type { SearchResults } from "../../typings/search";
  import { getGuides } from "../../lib/maxroll_endpoints";
  let searchResults: Promise<SearchResults> = getGuides();
</script>

<script lang="ts">
  import type { BuildData } from "../../typings/build_data";
  import GuideCard from "../../components/GuideCard.svelte";
  import Loader from "../../components/Loader.svelte";
  import Planner from "../../components/planner/Planner.svelte";
  import { buildData, activeProfile } from "../../stores/build_data";
  import { getGuidePlannerFromGuideID } from "../../lib/maxroll_endpoints";

  let loading: boolean = false;
  async function setBuildData(id: number): Promise<BuildData> {
    loading = true;
    const buildResults = await getGuidePlannerFromGuideID(id);
    buildData.set(buildResults);
    loading = false;
    return buildResults;
  }
</script>

<main class="inGame">
  {#await searchResults}
    <Loader />
  {:then results}
    {#if $buildData == null}
      {#if loading}
        <Loader />
      {/if}
      <div class="guideCards">
        {#each results.hits as hit}
          <button
            on:click={() => {
              setBuildData(hit.id);
            }}
          >
            <GuideCard {hit} />
          </button>
        {/each}
      </div>
    {:else}
      <button
        on:click={() => {
          buildData.set(null);
          activeProfile.set(0);
        }}>Guides</button
      >
      <Planner />
    {/if}
  {/await}
</main>

<style>
  .inGame {
    background-image: url("https://assets.maxroll.gg/wp-content/assets/img/background_1080p.jpg");
    padding-top: 30px;
    color: white;
  }

  .guideCards {
    overflow-x: hidden;
    overflow-y: scroll;
    height: calc(100vh - 30px);
    max-width: inherit;
    padding: 0.5rem 0.25rem;
  }

  .guideCards::-webkit-scrollbar {
    width: 8px;
  }
  .guideCards::-webkit-scrollbar-thumb {
    background: blue;
  }
</style>
