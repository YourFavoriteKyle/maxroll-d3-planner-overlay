<script lang="ts">
  import { parsedBuildData, activeProfile } from "../../stores/build_data";
</script>

<form>
  <select bind:value={$activeProfile}>
    {#each $parsedBuildData.profiles as profile, index}
      <option value={index}>{profile.name}</option>
    {/each}
  </select>
</form>

<style>
  select {
    color: black;
  }

  form {
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    z-index: 5;
  }
</style>
