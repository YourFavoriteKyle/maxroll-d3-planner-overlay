<script lang="ts">
  const maxrollPlannerURL = "https://d3planner.maxroll.gg/d3planner-data/load/";

  async function fetchBuildData(url: string) {
    const parsedURL = url
      .replace("d3.maxroll", "d3planner.maxroll")
      .replace("gg/d3planner", "gg/d3planner-data/load");
    const response = await fetch(parsedURL);
    return await response.json();
  }
</script>

<form class="flex flex-col">
  <label for="plannerURL">Planner URL</label>
  <input
    type="text"
    id="plannerURL"
    name="plannerURL"
    placeholder="Enter planner url..."
    class="text-black"
  />
  <button type="button" id="fetchButton">Load Planner</button>
  <select id="buildDropdown" class="hidden text-black z-10" />
</form>

<style>
  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }
  .text-black {
    color: black;
  }

  .z-10 {
    z-index: 10;
  }

  .hidden {
    display: none;
  }
</style>
