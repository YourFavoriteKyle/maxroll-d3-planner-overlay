import { writable, Writable, derived, Readable } from "svelte/store";
import { generalData } from "./general_data";
import type {
  GeneralData,
  ClassSkills,
  RangeClass,
  ClassPassives,
} from "../typings/general_data";
import type { BuildData } from "../typings/build_data";
import type {
  ParsedBuildData,
  ParsedSkills,
  ParsedPassives,
  ParsedKanai,
} from "../typings/parsed_build_data";

export const buildData = (() => {
  const { subscribe, update, set }: Writable<BuildData | null> = writable(null);

  return {
    subscribe,
    update,
    set,
  };
})();

export const activeProfile = (() => {
  const { subscribe, update, set }: Writable<number> = writable(0);

  return {
    subscribe,
    update,
    set,
  };
})();

export const parsedBuildData = (() => {
  const parsedData: Readable<ParsedBuildData> = derived(
    [buildData, generalData],
    ([$buildData, $generalData]) => processBuildData($buildData, $generalData)
  );

  return {
    ...parsedData,
  };

  function processBuildData(
    buildData: BuildData,
    generalData: GeneralData
  ): ParsedBuildData {
    if (!buildData) {
      return;
    }

    for (let profile = 0; profile < buildData.profiles.length; profile++) {
      matchItemGeneralData(buildData, generalData, profile);
      matchSkillData(buildData, generalData, profile);
      matchPassiveData(buildData, generalData, profile);
      matchKanaiData(buildData, generalData, profile);
    }

    return buildData;
  }

  // TODO: matchKanaiData() uses all but the gem logic here. This needs to be abstracted out.
  function matchItemGeneralData(
    buildData: BuildData,
    generalData: GeneralData,
    profile: number
  ): void {
    for (const [itemKey, item] of Object.entries(
      buildData.profiles[profile].items
    )) {
      const generalItemData = generalData.items.find((x) => x.id == item.id);
      const iconID = generalData.itemIcons[generalItemData.id][1];
      // HACK: This if statement just ignores some iconID's containing multiple different id options. Need to track this down.
      // It looks like it is gender related as well as possibly items that share icons.
      if (typeof iconID === "object") {
        generalItemData["iconID"] = iconID[0];
      } else {
        generalItemData["iconID"] = iconID;
      }

      if (item.gems !== undefined) {
        generalItemData["gems"] = [];
        for (let i = 0; i < item.gems.length; i++) {
          if (typeof item.gems[i][0] == "string") {
            const gemName = generalData.legendaryGems[item.gems[i][0]].name;
            const itemGemQuality = generalData.gemQualities[item.gems[i][1]];
            const itemGemIconID =
              generalData.itemIcons[
                `${generalData.legendaryGems[item.gems[i][0]].id}`
              ][1];

            generalItemData["gems"].push({
              name: gemName,
              quality: itemGemQuality,
              iconID: itemGemIconID,
            });
          }

          if (typeof item.gems[i][0] == "number") {
            const gemName = item.gems[i][1];
            const itemGemQuality = generalData.gemQualities[item.gems[i][0]];
            const itemGemIconID =
              generalData.itemIcons[
                `${generalData.gemColors[gemName].id}${item.gems[i][0] + 1}`
              ][1];

            generalItemData["gems"].push({
              name: gemName,
              quality: itemGemQuality,
              iconID: itemGemIconID,
            });
          }
        }
      }

      buildData.profiles[profile].items[itemKey]["generalData"] =
        generalItemData;
    }
  }

  function matchSkillData(
    buildData: BuildData,
    generalData: GeneralData,
    profile: number
  ): void {
    const buildSkills = buildData.profiles[profile].skills;
    let skills: ParsedSkills[] = [];
    for (let i = 0; i < buildSkills.length; i++) {
      const skillGeneralData: ClassSkills =
        generalData.skills[buildData.class][buildSkills[i][0]];
      const name: string = skillGeneralData.name;
      const rune: string = skillGeneralData.runes[buildSkills[i][1]];
      const iconPosition: string = `-${skillGeneralData.col * 42}px -${
        skillGeneralData.row * 84
      }px`;
      const category: string =
        generalData.skillcat[buildData.class][skillGeneralData.category];
      const id: string = skillGeneralData.id;
      const range: number | RangeClass = skillGeneralData.range;

      skills.push({ name, rune, iconPosition, category, id, range });
    }

    buildData.profiles[profile].skills = skills;
  }

  function matchPassiveData(
    buildData: BuildData,
    generalData: GeneralData,
    profile: number
  ): void {
    const buildPassives = buildData.profiles[profile].passives;
    let passives: ParsedPassives[] = [];
    for (let i = 0; i < buildPassives.length; i++) {
      const passiveGeneralData: ClassPassives =
        generalData.passives[buildData.class][buildPassives[i]];
      const id: string = passiveGeneralData.id;
      const name: string = passiveGeneralData.name;
      const iconPosition: string = `-${passiveGeneralData.index * 42}px 0px`;

      passives.push({ id, name, iconPosition });
    }

    buildData.profiles[profile].passives = passives;
  }

  function matchKanaiData(
    buildData: BuildData,
    generalData: GeneralData,
    profile: number
  ): void {
    const buildKanai = buildData.profiles[profile].kanai;
    let kanai: ParsedKanai[] = [];
    for (const [itemKey, item] of Object.entries(buildKanai)) {
      const generalItemData = generalData.items.find((x) => x.id == item);
      const iconID = generalData.itemIcons[generalItemData.id][1];

      // HACK: This if statement just ignores some iconID's containing multiple different id options. Need to track this down.
      // It looks like it is gender related as well as possibly items that share icons.
      if (typeof iconID === "object") {
        generalItemData["iconID"] = iconID[0];
      } else {
        generalItemData["iconID"] = iconID;
      }

      buildData.profiles[profile].kanai[itemKey] = generalItemData;
    }
  }
})();
