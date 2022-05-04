import { PlannerGeneralData, Item } from "./planner_general_data";
import { BuildData } from "./build_data";
import { maxrollURLs } from "../consts";

export class TooltipManager {
  private _tooltipContainer: HTMLDivElement;
  public _plannerBuildData: BuildData;
  public _plannerGeneralData: PlannerGeneralData;

  public constructor(tooltipContainer: HTMLDivElement) {
    this._tooltipContainer = <HTMLDivElement>tooltipContainer;
  }

  public async setTooltip(selectedBuild: number, gearSlot: string) {
    const selectedBuildItem =
      this._plannerBuildData.profiles[selectedBuild].items[gearSlot];

    const generalItemData = this._plannerGeneralData.items.find(
      (x) => x.id === selectedBuildItem.id
    );

    const tooltipSectionNodes = this.getTooltipSectionNodes(
      this._tooltipContainer
    );

    this.setTooltipHeader(tooltipSectionNodes, generalItemData);
    this.setTooltipIcon(
      tooltipSectionNodes,
      selectedBuildItem,
      generalItemData,
      gearSlot
    );
    this.setTooltipItemProperties(tooltipSectionNodes, gearSlot);
    this.setItemTypeText(
      tooltipSectionNodes,
      selectedBuildItem,
      generalItemData
    );
    this.setItemValue(selectedBuildItem, tooltipSectionNodes);
    this.setItemStats(selectedBuildItem, tooltipSectionNodes, generalItemData);
  }

  private getTooltipSectionNodes(tooltipContainer: HTMLDivElement) {
    let tooltipNodes: Array<HTMLDivElement> = [];
    for (let i = 0; i < tooltipContainer.childNodes.length; i++) {
      const node = <HTMLDivElement>tooltipContainer.childNodes[i];
      if (node.nodeType === 1 && !node.classList.contains("tooltip-border")) {
        tooltipNodes.push(<HTMLDivElement>tooltipContainer.childNodes[i]);
      }
    }
    return tooltipNodes;
  }

  private setTooltipHeader(
    tooltipNodes: Array<HTMLDivElement>,
    generalItemData: Item
  ) {
    const headerTextNode = <HTMLDivElement>tooltipNodes[0].childNodes[1];

    headerTextNode.textContent = generalItemData.name;
    headerTextNode.className = `text-${generalItemData.quality}`;
  }

  private setTooltipIcon(
    tooltipSectionNodes: Array<HTMLDivElement>,
    selectedBuildItem,
    generalItemData: Item,
    gearSlot: string
  ) {
    const tooltipItemIconBaseNode = <HTMLDivElement>(
      tooltipSectionNodes[1].childNodes[1]
    );
    const imgNode = <HTMLImageElement>(
      tooltipItemIconBaseNode.childNodes[1].childNodes[1]
    );
    imgNode.src = this.getItemIconID(selectedBuildItem.id);

    if (
      gearSlot === "waist" ||
      gearSlot === "rightfinger" ||
      gearSlot === "leftfinger" ||
      gearSlot === "neck"
    ) {
      tooltipItemIconBaseNode.className = `tooltip-item-icon item-gradient-${generalItemData.quality}-small`;
    } else {
      tooltipItemIconBaseNode.className = `tooltip-item-icon item-gradient-${generalItemData.quality}-large`;
    }
  }

  private setTooltipItemProperties(
    tooltipSectionNodes: Array<HTMLDivElement>,
    gearSlot: string
  ) {
    const tooltipItemProperties = <HTMLDivElement>(
      tooltipSectionNodes[1].childNodes[3]
    );

    const itemSlots = this._plannerGeneralData.itemSlots;

    tooltipItemProperties.childNodes[1].textContent = itemSlots[gearSlot].name;
  }
  private setItemTypeText(
    tooltipSectionNodes: Array<HTMLDivElement>,
    selectedBuildItem,
    generalItemData: Item
  ) {
    const tooltipItemType = <HTMLDivElement>(
      tooltipSectionNodes[1].childNodes[3].childNodes[3]
    );
    const itemTypes = this._plannerGeneralData.itemTypes;

    const itemQualityPrefix =
      selectedBuildItem.ancient === "true" ? "" : "Ancient";

    const itemQuality =
      generalItemData.quality.charAt(0).toUpperCase() +
      generalItemData.quality.slice(1);

    const itemQualitySuffix = itemTypes[generalItemData.type].name;

    tooltipItemType.textContent = `${itemQualityPrefix} ${itemQuality} ${itemQualitySuffix}`;
    tooltipItemType.className = `text-${generalItemData.quality}`;
  }
  private setItemValue(
    selectedBuildItem,
    tooltipSectionNodes: Array<HTMLDivElement>
  ) {
    const itemValueBaseNode = <HTMLDivElement>(
      tooltipSectionNodes[1].childNodes[3].childNodes[5]
    );
    // FIXME: Calculating base weapon damage will require the solution to a stats window
    // It looks like a character stats object will be needed to track all base and
    //  gear stats so calculations can be accurately made
    switch (true) {
      case !("basearmor" in selectedBuildItem.stats):
        itemValueBaseNode.childNodes[1].textContent = "";
        itemValueBaseNode.childNodes[3].textContent = "";
        break;
      case "wpnphy" in selectedBuildItem.stats:
        itemValueBaseNode.childNodes[1].textContent = "";
        itemValueBaseNode.childNodes[3].textContent = "";
        break;
      default:
        itemValueBaseNode.childNodes[1].textContent =
          selectedBuildItem.stats.basearmor[0];
        itemValueBaseNode.childNodes[3].textContent = "Armor";
        break;
    }
    function calcWeaponDamage(selectedBuildItem) {
      const min = selectedBuildItem.stats.wpnphy[0];
      const max = selectedBuildItem.stats.wpnphy[1];
    }
  }

  private setItemStats(
    selectedBuildItem,
    tooltipSectionNodes: Array<HTMLDivElement>,
    generalItemData: Item
  ) {
    const statList = this._plannerGeneralData.statList;
    const statGroups = this._plannerGeneralData.statGroups;
    const stats = this._plannerGeneralData.stats;
    const itemStatsBaseNode = <HTMLDivElement>(
      tooltipSectionNodes[1].childNodes[3].childNodes[7]
    );
    const primaryElement = <HTMLDivElement>document.createElement("div");
    primaryElement.classList.add("item-category");
    const secondaryElement = <HTMLDivElement>document.createElement("div");
    secondaryElement.classList.add("item-category");

    const itemStatKeys = <Array<string>>Object.keys(selectedBuildItem.stats);

    removeStatElements(itemStatsBaseNode);

    for (let i = 0; i < itemStatKeys.length; i++) {
      if (!itemStatKeys[i].includes("basearmor")) {
        if (itemStatKeys[i].includes("skill")) {
          const formatedStats = formatSkillStats(
            selectedBuildItem.stats[itemStatKeys[i]],
            this._plannerBuildData.class,
            itemStatKeys[i].replace(RegExp("\\w*\\_", "gm"), ""),
            this
          );
          itemStatsBaseNode.appendChild(createStatElement(formatedStats));
        } else if (itemStatKeys[i].includes("custom")) {
          const formatedStats = formatCustomStat(
            generalItemData,
            selectedBuildItem.stats[itemStatKeys[i]]
          );
          itemStatsBaseNode.appendChild(createStatElement(formatedStats));
        } else if (
          !(itemStatKeys[i].search(RegExp("(?:caldesanns_)", "gm")) == -1)
        ) {
          const formatedStats = formatCaldesannsStat(
            itemStatKeys[i],
            selectedBuildItem.stats[itemStatKeys[i]],
            this
          );
          itemStatsBaseNode.appendChild(createStatElement(formatedStats));
        } else {
          const formatedStats = formatStandardStats(
            stats[itemStatKeys[i]],
            selectedBuildItem.stats[itemStatKeys[i]]
          );
          itemStatsBaseNode.appendChild(createStatElement(formatedStats));
        }
      }
    }

    function formatCaldesannsStat(
      itemStatName: string,
      itemStatValue: string,
      that
    ) {
      const generalStatData = that._plannerGeneralData.stats[itemStatName];
      const formattedStat = generalStatData.format.replace(
        RegExp("\\%\\w", "gm"),
        itemStatValue
      );
      return `${formattedStat} (Caldessan's Despair Rank ${
        parseInt(itemStatValue, 10) / 5
      })`;
    }

    function formatCustomStat(generalItemData: Item, itemStatValue: string) {
      const customItemStatText = generalItemData.required.custom.format;
      return customItemStatText
        .replace(RegExp("\\%\\.?\\d?\\w\\%?", "gm"), itemStatValue)
        .replace(RegExp("\\%\\%", "gm"), "%");
    }

    function formatSkillStats(
      itemStatValue: string,
      classID: string,
      skillID: string,
      that
    ) {
      const skillName = that._plannerGeneralData.skills[classID][skillID].name;
      const className = that._plannerGeneralData.classes[classID].name;
      return `Increases ${skillName} Damage by ${itemStatValue}% (${className} Only)`;
    }

    function formatStandardStats(itemStatData, itemStatValue: string) {
      if (itemStatData.percent) {
        const itemFormat = <string>itemStatData.format;
        return itemFormat.replace(
          RegExp("\\%\\.?\\d?\\w\\%?", "gm"),
          itemStatValue
        );
      }
      return `${itemStatValue} ${itemStatData.name}`;
    }

    function createStatElement(itemStat) {
      const itemStatContainer = <HTMLDivElement>document.createElement("div");
      const itemStatElement = <HTMLSpanElement>document.createElement("div");

      itemStatContainer.classList.add("item-stat");
      itemStatElement.classList.add("value");

      itemStatElement.textContent = itemStat;

      itemStatContainer.appendChild(itemStatElement);

      return itemStatContainer;
    }

    function removeStatElements(itemStatsBaseNode: HTMLDivElement) {
      while (itemStatsBaseNode.lastElementChild) {
        itemStatsBaseNode.removeChild(itemStatsBaseNode.lastElementChild);
      }
    }
  }
  private getItemIconID(itemID: string) {
    const itemIconID = this._plannerGeneralData.itemIcons[itemID][1];
    if (typeof itemIconID === "object") {
      return `${maxrollURLs.iconsURL}${itemIconID[1]}.png`;
    }
    return `${maxrollURLs.iconsURL}${itemIconID}.png`;
  }
}
