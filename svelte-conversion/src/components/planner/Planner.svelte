<script lang="ts">
  import GearContainer from "./GearContainer.svelte";
  import SkillsContainer from "./SkillsContainer.svelte";
  import PassivesContainer from "./PassivesContainer.svelte";
  import KanaiContainer from "./KanaiContainer.svelte";
  import Tooltip from "./Tooltip.svelte";
</script>

<div class="mainBackground flex flex-col text-base h-screen">
  <!-- --------------------------------- Main -------------------------------- -->
  <div class="h-full">
    <div id="contentContainer" class="flex flex-col w-full h-full">
      <div class="flex">
        <div class="build-container">
          <GearContainer />
          <SkillsContainer />
          <PassivesContainer />
          <KanaiContainer />
        </div>
        <Tooltip />
      </div>
    </div>
  </div>
</div>

<style>
  .build-container {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    height: 100%;
    margin: 6px;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .w-full {
    width: 100%;
  }

  .h-full {
    height: 100%;
  }

  .h-screen {
    height: 100vh;
  }

  .text-base {
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }

  .mainBackground {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("https://assets.maxroll.gg/wp-content/assets/img/background_1080p.jpg");
  }
</style>
