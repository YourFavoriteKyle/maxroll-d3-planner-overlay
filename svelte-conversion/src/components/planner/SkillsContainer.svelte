<script lang="ts">
  import { parsedBuildData, activeProfile } from "../../stores/build_data";
  import { getSkillIconSetURL } from "../../lib/maxroll_endpoints";
</script>

<!-- {@debug $parsedBuildData} -->

<div class="skills-backdrop">
  {#each $parsedBuildData.profiles[$activeProfile].skills as skill, skillIndex}
    <div
      class="skill-icon mouse"
      class:skill-icon-punch={skillIndex < 2}
      style:background-image="url({getSkillIconSetURL($parsedBuildData.class)})"
      style:background-position={skill.iconPosition}
    />
  {/each}
</div>

<style>
  .skills-backdrop {
    position: relative;
    margin: 4px auto;
    width: 287px;
    height: 60px;
    background-image: url("https://d3planner-assets.maxroll.gg/d3planner/static/media/skill_frames.png?60ec5508=");
  }

  .skill-icon {
    position: absolute;
    top: 2px;
    display: inline-block;
    width: 42px;
    height: 42px;
    background-repeat: no-repeat;
    background-size: auto;
    text-align: center;
  }

  .skill-icon.mouse {
    width: 42px;
    height: 41px;
  }

  .skill-icon:first-child {
    left: 196px;
  }

  .skill-icon:nth-child(2) {
    left: 243px;
  }

  .skill-icon:nth-child(3) {
    left: 3px;
  }

  .skill-icon:nth-child(4) {
    left: 51px;
  }

  .skill-icon:nth-child(5) {
    left: 99px;
  }

  .skill-icon:nth-child(6) {
    left: 147px;
  }
</style>
