import type { Item } from "./general_data";
import type {
  BuildData,
  Items,
  Profile,
  ItemsHead,
  Shoulders,
  ItemsNeck,
  ItemsTorso,
  Waist,
  ItemsHands,
  Wrists,
  ItemsLegs,
  ItemsFeet,
  Leftfinger,
  Rightfinger,
  ItemsMainhand,
  Offhand,
} from "./build_data";

export interface ParsedBuildData extends BuildData {
  profiles: ParsedProfile[];
}

export interface ParsedProfile extends Profile {
  items: ParsedItems;
}

export interface ParsedItems extends Items {
  head: ParsedItemsHead;
  shoulders: ParsedShoulders;
  neck: ParsedItemsNeck;
  torso: ParsedItemsTorso;
  waist: ParsedWaist;
  hands: ParsedItemsHands;
  wrists: ParsedWrists;
  legs: ParsedItemsLegs;
  feet: ParsedItemsFeet;
  leftfinger: ParsedLeftfinger;
  rightfinger: ParsedRightfinger;
  mainhand: ParsedItemsMainhand;
  offhand: ParsedOffhand;
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

export interface ParsedItemsHead extends ItemsHead {
  generalData?: ItemGeneralData;
}

export interface ParsedShoulders extends Shoulders {
  generalData?: ItemGeneralData;
}

export interface ParsedItemsNeck extends ItemsNeck {
  generalData?: ItemGeneralData;
}

export interface ParsedItemsTorso extends ItemsTorso {
  generalData?: ItemGeneralData;
}

export interface ParsedWaist extends Waist {
  generalData?: ItemGeneralData;
}

export interface ParsedItemsHands extends ItemsHands {
  generalData?: ItemGeneralData;
}

export interface ParsedWrists extends Wrists {
  generalData?: ItemGeneralData;
}

export interface ParsedItemsLegs extends ItemsLegs {
  generalData?: ItemGeneralData;
}

export interface ParsedItemsFeet extends ItemsFeet {
  generalData?: ItemGeneralData;
}

export interface ParsedLeftfinger extends Leftfinger {
  generalData?: ItemGeneralData;
}

export interface ParsedRightfinger extends Rightfinger {
  generalData?: ItemGeneralData;
}

export interface ParsedItemsMainhand extends ItemsMainhand {
  generalData?: ItemGeneralData;
}

export interface ParsedOffhand extends Offhand {
  generalData?: ItemGeneralData;
}
