import { PlannerGeneralData } from "./planner_general_data";
import { BuildData } from "./build_data";
import { maxrollURLs } from "../consts";

export class GearSlotManager {
  private _gearOverlay: HTMLDivElement;
  public _plannerBuildData: BuildData;
  public _plannerGeneralData: PlannerGeneralData;

  public constructor(gearOverlay: HTMLDivElement) {
    this._gearOverlay = <HTMLDivElement>gearOverlay;
  }

  public async setGear(selectedBuild: number) {
    this.setGearSlotGraphics(selectedBuild);
  }

  public async clearGear() {
    this.clearGearSlotNodes();
  }

  // clear gear slot graphics
  private clearGearSlotNodes() {
    const gearSlotNodes = this.getGearSlotNodes(this._gearOverlay);
    const nodeKeys = Object.keys(gearSlotNodes);
    for (let i = 0; i < nodeKeys.length; i++) {
      gearSlotNodes[nodeKeys[i]].firstChild.remove();
    }
  }

  // set gear slot graphics
  private async setGearSlotGraphics(activeBuild: number) {
    const build = this._plannerBuildData.profiles[activeBuild];
    const gearSlotNodes = this.getGearSlotNodes(this._gearOverlay);
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
      //
      // SOCKET WRAPPER NEEDS TO BE APPENDED UNDER ITEMGLOWNODE
      //
      itemGlowNode.appendChild(this.setSocketWrapper(activeBuild, slot.id));
      itemGlowNode.appendChild(this.setActiveBuildGearImage(itemID, slot.id));
    }
  }

  // get gear slot nodes
  private getGearSlotNodes(gearOverlay: HTMLDivElement) {
    let gearSlots: Record<string, HTMLDivElement> = {};
    for (let cInt = 0; cInt < gearOverlay.childNodes.length; cInt++) {
      const column = gearOverlay.childNodes[cInt];
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

    itemImageNode.style.position = "relative";
    positionItemImage(itemImageNode, slotID);
    return itemImageNode;

    function positionItemImage(
      itemImageNode: HTMLImageElement,
      slotID: string
    ) {
      // TODO: These inline styles should be pulled out and put into css classes. This switch case should append to classList
      switch (slotID) {
        case "shoulders": {
          itemImageNode.style.bottom = "22px";
          itemImageNode.style.right = "1px";
          break;
        }
        case "head": {
          itemImageNode.style.bottom = "33px";
          itemImageNode.style.right = "1px";
          itemImageNode.style.zIndex = "2";
          break;
        }
        case "legs": {
          itemImageNode.style.bottom = "22px";
          itemImageNode.style.right = "1px";
          break;
        }
        case "feet": {
          itemImageNode.style.bottom = "22px";
          itemImageNode.style.right = "1px";
          break;
        }
        case "wrists": {
          itemImageNode.style.bottom = "22.5px";
          itemImageNode.style.right = "1px";
          break;
        }
        case "hands": {
          itemImageNode.style.bottom = "22px";
          itemImageNode.style.right = "1px";
          break;
        }
        case "torso": {
          itemImageNode.style.bottom = "26.5px";
          itemImageNode.style.right = "2px";
          itemImageNode.style.zIndex = "1";
          break;
        }
        case "waist": {
          itemImageNode.style.bottom = "16px";
          itemImageNode.style.left = "7px";
          break;
        }
        case "leftfinger": {
          itemImageNode.style.bottom = "13px";
          itemImageNode.style.right = "13px";
          break;
        }
        case "rightfinger": {
          itemImageNode.style.bottom = "13px";
          itemImageNode.style.right = "13px";
          break;
        }
        case "mainhand": {
          itemImageNode.style.bottom = "2px";
          itemImageNode.style.right = "2px";
          break;
        }
        case "offhand": {
          itemImageNode.style.bottom = "2px";
          itemImageNode.style.right = "2px";
          break;
        }
        case "neck": {
          itemImageNode.style.bottom = "7px";
          itemImageNode.style.right = "7px";
          break;
        }
        default: {
          return;
        }
      }
    }
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
