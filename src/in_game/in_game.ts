import { OWGames, OWHotkeys } from "@overwolf/overwolf-api-ts";

import { AppWindow } from "../AppWindow";
import { kHotkeys, kWindowNames, maxrollURLs } from "../consts";
import { GearSlotManager } from "./gear_slot_manager";
import { SkillManager } from "./skill_manager";
import { PassiveManager } from "./passive_manager";
import { CubeManager } from "./cube_manager";
import { TooltipManager } from "./tooltip_manager";

import WindowState = overwolf.windows.WindowStateEx;

// The window displayed in-game while a game is running.
// It listens to all info events and to the game events listed in the consts.ts file
// and writes them to the relevant log using <pre> tags.
// The window also sets up Ctrl+F as the minimize/restore hotkey.
// Like the background window, it also implements the Singleton design pattern.
class InGame extends AppWindow {
  private static _instance: InGame;
  private _fetchButton: HTMLButtonElement;
  private _plannerURL: HTMLInputElement;
  private _buildDropdown: HTMLSelectElement;
  private _gearContainer: HTMLDivElement;
  private _skillsContainer: HTMLDivElement;
  private _passivesContainer: HTMLDivElement;
  private _cubeContainer: HTMLDivElement;
  private _tooltipContainer: HTMLDivElement;
  private _gearSlotManager: GearSlotManager;
  private _skillManager: SkillManager;
  private _passiveManager: PassiveManager;
  private _cubeManager: CubeManager;
  private _tooltipManager: TooltipManager;

  private constructor() {
    super(kWindowNames.inGame);
    this._fetchButton = <HTMLButtonElement>(
      document.getElementById("fetchButton")
    );
    this._plannerURL = <HTMLInputElement>document.getElementById("plannerURL");
    this._buildDropdown = <HTMLSelectElement>(
      document.getElementById("buildDropdown")
    );
    this._gearContainer = <HTMLDivElement>(
      document.getElementById("gearContainer")
    );
    this._skillsContainer = <HTMLDivElement>(
      document.getElementById("skillsContainer")
    );
    this._passivesContainer = <HTMLDivElement>(
      document.getElementById("passivesContainer")
    );
    this._cubeContainer = <HTMLDivElement>(
      document.getElementById("cubeContainer")
    );
    this._tooltipContainer = <HTMLDivElement>(
      document.getElementById("tooltipContainer")
    );

    this._gearSlotManager = new GearSlotManager(this._gearContainer);
    this._skillManager = new SkillManager(this._skillsContainer);
    this._passiveManager = new PassiveManager(this._passivesContainer);
    this._cubeManager = new CubeManager(this._cubeContainer);
    this._tooltipManager = new TooltipManager(this._tooltipContainer);

    this.setToggleHotkeyBehavior();
    this.setToggleHotkeyText();
  }

  public static instance() {
    if (!this._instance) {
      this._instance = new InGame();
    }

    return this._instance;
  }

  public async run() {
    // load planner link listener
    this.createLoadPlannerListener();

    // update build data from dropdown listener
    this.createBuildSelectionListener();
  }

  private createLoadPlannerListener() {
    this._fetchButton.addEventListener("click", async (e) => {
      // fetch general d3planner data for image id's and links
      const generalDataResponse = await this.fetchD3PlannerData(
        maxrollURLs.generalDataURL,
        false
      );
      this._gearSlotManager._plannerGeneralData = generalDataResponse;
      this._skillManager._plannerGeneralData = generalDataResponse;
      this._passiveManager._plannerGeneralData = generalDataResponse;
      this._cubeManager._plannerGeneralData = generalDataResponse;
      this._tooltipManager._plannerGeneralData = generalDataResponse;
      // fetch specific build data
      const buildDataResponse = await this.fetchD3PlannerData(
        this._plannerURL.value,
        true
      );
      this._gearSlotManager._plannerBuildData = buildDataResponse;
      this._skillManager._plannerBuildData = buildDataResponse;
      this._passiveManager._plannerBuildData = buildDataResponse;
      this._cubeManager._plannerBuildData = buildDataResponse;
      this._tooltipManager._plannerBuildData = buildDataResponse;
      // populate build dropdown
      this.buildSelector(
        this._buildDropdown,
        this._gearSlotManager._plannerBuildData.profiles
      );
      // auto-populate on load
      this._gearSlotManager.setGear(this._buildDropdown.selectedIndex);
      this._skillManager.setSkills(this._buildDropdown.selectedIndex);
      this._passiveManager.setPassives(this._buildDropdown.selectedIndex);
      this._cubeManager.setCubeItems(this._buildDropdown.selectedIndex);

      // set gear slot tooltip event listener
      this.createGearSlotTooltipListeners(
        this._gearSlotManager.getGearSlotNodes(this._gearContainer),
        this._buildDropdown.selectedIndex
      );
    });
  }

  private createBuildSelectionListener() {
    this._buildDropdown.addEventListener("change", () => {
      this._gearSlotManager.clearGear();
      this._gearSlotManager.setGear(this._buildDropdown.selectedIndex);
      this._skillManager.setSkills(this._buildDropdown.selectedIndex);
      this._passiveManager.setPassives(this._buildDropdown.selectedIndex);
      this._cubeManager.setCubeItems(this._buildDropdown.selectedIndex);
    });
  }

  private createGearSlotTooltipListeners(
    gearSlotNodes: Record<string, HTMLDivElement>,
    selectedBuild: number
  ) {
    const nodeKeys = Object.keys(gearSlotNodes);
    for (let i = 0; i < nodeKeys.length; i++) {
      gearSlotNodes[nodeKeys[i]].addEventListener("click", async (e) => {
        this._tooltipManager.setTooltip(selectedBuild, nodeKeys[i]);
      });
    }
  }

  // fetch d3planner data
  private async fetchD3PlannerData(url: string, buildData: boolean) {
    if (buildData) {
      const parsedURL = url
        .replace("d3.maxroll", "d3planner.maxroll")
        .replace("gg/d3planner", "gg/d3planner-data/load");
      const response = await fetch(parsedURL);
      return await response.json();
    } else {
      const response = await fetch(url);
      return await response.json();
    }
  }

  //
  //
  // InGame window specific logic
  //
  //

  // Displays the toggle minimize/restore hotkey in the window header
  private async setToggleHotkeyText() {
    const gameClassId = await this.getCurrentGameClassId();
    const hotkeyText = await OWHotkeys.getHotkeyText(
      kHotkeys.toggle,
      gameClassId
    );
    const hotkeyElem = document.getElementById("hotkey");
    hotkeyElem.textContent = hotkeyText;
  }

  private buildSelector(dropdown: HTMLElement, profiles: Array<Object>) {
    dropdown.style.display = "block";
    for (let i = 0; i < profiles.length; i++) {
      const child = document.createElement("option");
      child.value = profiles[i]["name"];
      child.textContent = profiles[i]["name"];
      dropdown.appendChild(child);
    }
  }

  // Sets toggleInGameWindow as the behavior for the Ctrl+F hotkey
  private async setToggleHotkeyBehavior() {
    const toggleInGameWindow = async (
      hotkeyResult: overwolf.settings.hotkeys.OnPressedEvent
    ): Promise<void> => {
      const inGameState = await this.getWindowState();

      if (
        inGameState.window_state === WindowState.NORMAL ||
        inGameState.window_state === WindowState.MAXIMIZED
      ) {
        this.currWindow.minimize();
      } else if (
        inGameState.window_state === WindowState.MINIMIZED ||
        inGameState.window_state === WindowState.CLOSED
      ) {
        this.currWindow.restore();
      }
    };

    OWHotkeys.onHotkeyDown(kHotkeys.toggle, toggleInGameWindow);
  }

  private async getCurrentGameClassId(): Promise<number | null> {
    const info = await OWGames.getRunningGameInfo();

    return info && info.isRunning && info.classId ? info.classId : null;
  }
}

InGame.instance().run();
