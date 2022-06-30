import type { Item, RangeClass } from "./general_data";
import type { BuildData, Items, Profile, ItemData } from "./build_data";

export interface ParsedBuildData extends Omit<BuildData, "profiles"> {
  profiles: ParsedProfile[];
}

export interface ParsedSkills {
  id: string;
  name: string;
  rune: string;
  iconPosition: string;
  category: string;
  range: number | RangeClass;
}

export interface ParsedProfile extends Omit<Profile, "skills" | "passives"> {
  items: ParsedItems;
  skills: ParsedSkills[];
  passives: ParsedPassives[];
}

export interface ParsedPassives {
  id: string;
  name: string;
  iconPosition: string;
}

export interface ParsedKanai {
  armor: Omit<ItemGeneralData, "gems">;
  Jewelry: Omit<ItemGeneralData, "gems">;
  weapon: Omit<ItemGeneralData, "gems">;
}

export interface ParsedItems extends Items {
  head: ParsedItemData;
  shoulders: ParsedItemData;
  neck: ParsedItemData;
  torso: ParsedItemData;
  waist: ParsedItemData;
  hands: ParsedItemData;
  wrists: ParsedItemData;
  legs: ParsedItemData;
  feet: ParsedItemData;
  leftfinger: ParsedItemData;
  rightfinger: ParsedItemData;
  mainhand: ParsedItemData;
  offhand: ParsedItemData;
}

export interface ItemGeneralData extends Item {
  iconID: number;
  gems: ItemGemData[];
}

export interface ItemGemData {
  iconID: number;
  name: string;
  quality: string;
}

export interface ParsedItemData extends ItemData {
  generalData?: ItemGeneralData;
}
