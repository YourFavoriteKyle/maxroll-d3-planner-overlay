import { PlannerGeneralData } from "./planner_general_data";
import { BuildData } from "./build_data";
import { maxrollURLs } from "../consts";

export class GearSlotManager {
  private _gearContainer: HTMLDivElement;
  public _plannerBuildData: BuildData;
  public _plannerGeneralData: PlannerGeneralData;

  public constructor(gearContainer: HTMLDivElement) {
    this._gearContainer = <HTMLDivElement>gearContainer;
  }

  public async setGear(selectedBuild: number) {
    this.setGearSlotGraphics(selectedBuild);
  }

  public async clearGear() {
    this.clearGearSlotNodes();
  }

  // clear gear slot graphics
  private clearGearSlotNodes() {
    const gearSlotNodes = this.getGearSlotNodes(this._gearContainer);
    const nodeKeys = Object.keys(gearSlotNodes);
    for (let i = 0; i < nodeKeys.length; i++) {
      gearSlotNodes[nodeKeys[i]].firstChild.remove();
    }
  }

  // set gear slot graphics
  private async setGearSlotGraphics(activeBuild: number) {
    const build = this._plannerBuildData.profiles[activeBuild];
    const gearSlotNodes = this.getGearSlotNodes(this._gearContainer);
    const itemKeys = Object.keys(build.items);

    for (let i = 0; i < itemKeys.length; i++) {
      const slot = gearSlotNodes[itemKeys[i]];
      const itemID = build.items[slot.id].id;
      const itemGlowNode = this.setGearSlotItemGlow(itemID, slot.id);
      // set empty gear slot backdrop
      slot.classList.add(`item-backdrop-${slot.id}`);
      // set item glow
      slot.appendChild(itemGlowNode);
      // set item icon
      itemGlowNode.appendChild(this.setSocketWrapper(activeBuild, slot.id));
      itemGlowNode.appendChild(this.setActiveBuildGearImage(itemID, slot.id));
    }
  }

  // get gear slot nodes
  public getGearSlotNodes(gearContainer: HTMLDivElement) {
    let gearSlots: Record<string, HTMLDivElement> = {};
    for (let cInt = 0; cInt < gearContainer.childNodes.length; cInt++) {
      const column = gearContainer.childNodes[cInt];
      // seems like nodeType 1 === HTMLElement? Not sure about this but it works...
      if (column.nodeType === 1) {
        for (let child of column.childNodes) {
          if (child.nodeType === 1) {
            gearSlots[child["id"]] = <HTMLDivElement>child;
          }
        }
      }
    }
    return gearSlots;
  }

  // set item icon
  private setActiveBuildGearImage(itemID: string, slotID: string) {
    const itemImageNode = <HTMLImageElement>document.createElement("img");
    itemImageNode.src = this.getItemIconID(itemID);
    itemImageNode.alt = this._plannerGeneralData.items.find(
      (x) => x.id === itemID
    ).name;

    return itemImageNode;
  }

  // apply gear slot item glow
  private setGearSlotItemGlow(itemID: string, slotID: string) {
    const itemGlowNode = <HTMLDivElement>document.createElement("div");
    const items = this._plannerGeneralData.items;
    const item = items.find((x) => x.id === itemID);
    if (
      slotID === "waist" ||
      slotID === "rightfinger" ||
      slotID === "leftfinger" ||
      slotID === "neck"
    ) {
      itemGlowNode.classList.add(`item-gradient-${item.quality}-small`);
    } else {
      itemGlowNode.classList.add(`item-gradient-${item.quality}-large`);
    }
    return itemGlowNode;
  }

  // match item ID to item icon ID
  private getItemIconID(itemID: string) {
    const itemIconID = this._plannerGeneralData.itemIcons[itemID][1];
    if (typeof itemIconID === "object") {
      return `${maxrollURLs.iconsURL}${itemIconID[1]}.png`;
    }
    return `${maxrollURLs.iconsURL}${itemIconID}.png`;
  }

  private setSocketWrapper(activeBuild: number, slotID: string) {
    const socketContainer = <HTMLDivElement>document.createElement("div");
    socketContainer.classList.add("socket-container");
    const gemsList =
      this._plannerBuildData.profiles[activeBuild].items[slotID].gems;
    if (typeof gemsList !== "undefined") {
      for (let i = 0; i < gemsList.length; i++) {
        const socket = <HTMLSpanElement>document.createElement("span");
        socket.classList.add("socket-frame");
        socketContainer.appendChild(socket);
        socket.appendChild(this.socketGems(activeBuild, slotID));
      }
    }
    return socketContainer;
  }

  private socketGems(activeBuild: number, slotID: string) {
    const gem = <HTMLImageElement>document.createElement("img");
    const gemData = this.getGemIconURL(activeBuild, slotID);
    gem.src = gemData.id;
    gem.alt = gemData.name;

    return gem;
  }

  private getGemIconURL(activeBuild: number, slotID: string) {
    const gemBuildData =
      this._plannerBuildData.profiles[activeBuild].items[slotID].gems;

    const gemColors = this._plannerGeneralData.gemColors;
    const gemLegendary = this._plannerGeneralData.legendaryGems;

    for (let i = 0; i < gemBuildData.length; i++) {
      let gem: Record<string, string> = {};
      if (typeof gemBuildData[i][0] === "string") {
        const gemData = gemLegendary[gemBuildData[i][0]];
        gem.id = `${gemData.id}`;
        gem.name = gemData.name;
      }
      if (typeof gemBuildData[i][0] === "number") {
        const gemData = gemColors[gemBuildData[i][1]];
        gem.id = `${gemData.name}_${gemData.id[1]}${gemBuildData[i][0]}`;
        gem.name = gemData.name;
      }
      gem.id = this.getItemIconID(gem.id);
      return gem;
    }
  }
}
