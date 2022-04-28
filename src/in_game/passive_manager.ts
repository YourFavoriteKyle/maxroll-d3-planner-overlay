import { PlannerGeneralData } from "./planner_general_data";
import { BuildData } from "./build_data";

export class PassiveManager {
  private _passivesContainer: HTMLDivElement;
  public _plannerBuildData: BuildData;
  public _plannerGeneralData: PlannerGeneralData;

  public constructor(passivesContainer: HTMLDivElement) {
    this._passivesContainer = <HTMLDivElement>passivesContainer;
  }

  public setPassives(selectedBuild: number) {
    const className = this._plannerBuildData.class;
    const passiveSlots = this.getPassiveSlotNodes(this._passivesContainer);
    const buildPassives = this.getBuildPassives(selectedBuild);

    for (let i = 0; i < passiveSlots.length; i++) {
      passiveSlots[i].style.backgroundPosition = this.getIconPosition(
        className,
        buildPassives[i]
      );
      passiveSlots[i].classList.add("passives-demonhunter");
      passiveSlots[i].textContent = "";
    }
  }

  private getPassiveSlotNodes(passivesContainer: HTMLDivElement) {
    let passiveSlots: Array<HTMLDivElement> = [];
    for (let i = 0; i < passivesContainer.childNodes.length; i++) {
      if (passivesContainer.childNodes[i].nodeType === 1) {
        passiveSlots.push(
          <HTMLDivElement>passivesContainer.childNodes[i].childNodes[1]
        );
      }
    }
    return passiveSlots;
  }

  private getBuildPassives(selectedBuild: number) {
    const selectedBuildPassives =
      this._plannerBuildData.profiles[selectedBuild].passives;
    let buildPassives: Array<string> = [];
    for (let i = 0; i < selectedBuildPassives.length; i++) {
      buildPassives.push(selectedBuildPassives[i]);
    }
    return buildPassives;
  }

  private getIconPosition(className: string, passiveName: string) {
    const passiveData =
      this._plannerGeneralData.passives[className][passiveName];

    return `-${passiveData.index * 42}px 0px`;
  }
}
