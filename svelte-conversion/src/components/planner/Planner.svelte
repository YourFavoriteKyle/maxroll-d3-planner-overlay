<script lang="ts">
  import GearContainer from "./GearContainer.svelte";
</script>

<div class="mainBackground flex flex-col text-base h-screen">
  <!-- --------------------------------- Main -------------------------------- -->
  <div class="h-full">
    <div id="contentContainer" class="flex flex-col w-full h-full">
      <div class="flex">
        <div class="build-container">
          <GearContainer />
          <div id="skillsContainer" class="skills-backdrop">
            <div class="skill-icon mouse skill-icon-punch" />
            <div class="skill-icon mouse skill-icon-punch" />
            <div class="skill-icon" />
            <div class="skill-icon" />
            <div class="skill-icon" />
            <div class="skill-icon" />
          </div>
          <div id="passivesContainer" class="passives-container">
            <div class="passive-item">
              <div class="passive-backdrop">10</div>
              <div class="passives-frame-outer" />
            </div>
            <div class="passive-item">
              <div class="passive-backdrop">20</div>
              <div class="passives-frame-outer" />
            </div>
            <div class="passive-item">
              <div class="passive-backdrop">30</div>
              <div class="passives-frame-outer" />
            </div>
            <div class="passive-item">
              <div class="passive-backdrop">70</div>
              <div class="passives-frame-outer" />
            </div>
          </div>
          <div id="cubeContainer" class="cube-container">
            <div class="cube-frame-weapon">
              <div id="weapon" class="cube-item" />
            </div>
            <div class="cube-frame-armor">
              <div id="armor" class="cube-item" />
            </div>
            <div class="cube-frame-jewelry">
              <div id="jewelry" class="cube-item" />
            </div>
          </div>
        </div>
        <div class="tooltip">
          <div class="tooltip-container">
            <div class="tooltip-container-outer">
              <div class="tooltip-container-inner">
                <div class="tooltip-item-container">
                  <div id="tooltipContainer" class="tooltip-container-inner">
                    <div class="tooltip-border left" />
                    <div class="tooltip-border right" />
                    <div class="tooltip-border top" />
                    <div class="tooltip-border bottom" />
                    <div class="tooltip-border top-left" />
                    <div class="tooltip-border top-right" />
                    <div class="tooltip-border bottom-left" />
                    <div class="tooltip-border bottom-right" />
                    <div class="tooltip-header">
                      <span class="text-legendary">Hunter's Wrath</span>
                    </div>
                    <div class="tooltip-body">
                      <div class="">
                        <div class="item-gradient">
                          <img
                            class="tooltip-item-icon-inner"
                            alt="item-icon"
                            src=""
                          />
                        </div>
                      </div>
                      <div class="tooltip-item-properties">
                        <div class="item-slot">Blank</div>
                        <div class="item-type text-legendary">
                          Ancient Legendary Item
                        </div>
                        <div class="item-value">
                          <div class="value">100</div>
                          <div class="item-subtype">Armor</div>
                        </div>
                        <div class="item-stats">
                          <!-- TODO: Need to add socket stats -->
                        </div>
                      </div>
                    </div>
                    <div class="tooltip-footer">
                      <div class="flavor">Sample flavor text.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
