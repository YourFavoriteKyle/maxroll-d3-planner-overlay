import { writable, Writable, derived, Readable } from "svelte/store";
import { getGuidePlannerFromGuideID } from "../lib/maxroll_endpoints";
import { generalData } from "./general_data";
import type { Item, GeneralData } from "../typings/general_data";
import type { BuildData } from "../typings/build_data";

export const buildData = (() => {
  const { subscribe, update, set }: Writable<BuildData | null> = writable(null);

  return {
    subscribe,
    update,
    set,
    // set: async (id: number | null) =>
    //   id ? set(await getGuidePlannerFromGuideID(id)) : set(null),
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
  const parsedData: Readable<object> = derived(
    [buildData, generalData, activeProfile],
    ([$buildData, $generalData, $activeProfile]) =>
      processBuildData($buildData, $generalData, $activeProfile)
  );

  return {
    ...parsedData,
  };

  function processBuildData(
    buildData: BuildData,
    generalData: GeneralData,
    profile: number
  ): object {
    if (!buildData) {
      return;
    }
    matchItemGeneralData(buildData, generalData, profile);

    buildData.activeProfile = profile;

    return buildData;
  }

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
})();