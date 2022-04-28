import { PlannerGeneralData } from "./planner_general_data";
import { BuildData } from "./build_data";
import { maxrollURLs } from "../consts";

export class CubeManager {
  private _cubeContainer: HTMLDivElement;
  public _plannerBuildData: BuildData;
  public _plannerGeneralData: PlannerGeneralData;

  public constructor(cubeContainer: HTMLDivElement) {
    this._cubeContainer = <HTMLDivElement>cubeContainer;
  }

  public setCubeItems(selectedBuild: number) {
    const cubeSlots = this.getCubeSlotNodes(this._cubeContainer);
    const buildCube = this.getBuildCube(selectedBuild);

    for (let i = 0; i < cubeSlots.length; i++) {
      const cubeItemID = buildCube[cubeSlots[i].id];
      cubeSlots[i].parentElement.classList.replace(
        `cube-frame-${cubeSlots[i].id}`,
        `cube-frame`
      );
      cubeSlots[i].style.backgroundImage = `url('${this.getItemIconURL(
        cubeItemID
      )}')`;
    }
  }

  private getCubeSlotNodes(cubeContainer: HTMLDivElement) {
    let cubeSlots: Array<HTMLDivElement> = [];
    for (let i = 0; i < cubeContainer.childNodes.length; i++) {
      if (cubeContainer.childNodes[i].nodeType === 1) {
        cubeSlots.push(
          <HTMLDivElement>cubeContainer.childNodes[i].childNodes[1]
        );
      }
    }
    return cubeSlots;
  }

  private getBuildCube(selectedBuild: number) {
    const selectedBuildCube =
      this._plannerBuildData.profiles[selectedBuild].kanai;

    return selectedBuildCube;
  }

  private getItemIconURL(itemID: string) {
    const itemIconID = this._plannerGeneralData.itemIcons[itemID][1];
    if (typeof itemIconID === "object") {
      return `${maxrollURLs.iconsURL}${itemIconID[1]}.png`;
    }
    return `${maxrollURLs.iconsURL}${itemIconID}.png`;
  }
}
