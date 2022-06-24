export interface GeneralData {
  minLevel: number;
  maxLevel: number;
  classes: Classes;
  cosmeticItems: CosmeticItems;
  cosmeticDyes: { [key: string]: CosmeticDye };
  gemQualities: string[];
  oldGemQualities: number[];
  gemColors: GemColors;
  legendaryGems: LegendaryGems;
  items: Item[];
  itemPowerClasses: { [key: string]: ItemPowerClassValue };
  dropData: { [key: string]: DropDatum };
  extraItems: ExtraItem[];
  classToIcon: ClassToIcon;
  itemIcons: { [key: string]: Array<number | { [key: string]: number }> };
  potions: Potion[];
  itemSets: ItemSets;
  shrineBuffs: { [key: string]: ShrineBuff };
  skillcat: Skillcat;
  skills: Skills;
  passives: Passives;
  followerSkills: { [key: string]: FollowerSkill };
  followerSkillList: FollowerSkillList;
  extraskills: Extraskills;
  skilltips: Skilltips;
  passivetips: Passivetips;
  statLimits: StatLimits;
  itemSlots: ItemSlots;
  metaSlots: MetaSlots;
  itemTypes: ItemTypes;
  extraTypes: ExtraTypes;
  qualities: Qualities;
  elements: Elements;
  stats: Stats;
  resources: Resources;
  statGroupNames: StatGroupNames;
  statGroups: { [key: string]: string[] };
  statExclusiveGroups: string[];
  statList: StatList;
}

export interface ClassToIcon {
  demonhunter: number;
  barbarian: number;
  wizard: number;
  witchdoctor: number;
  monk: number;
  crusader: number;
  necromancer: number;
}

export interface Classes {
  wizard: ClassesBarbarian;
  demonhunter: ClassesBarbarian;
  barbarian: ClassesBarbarian;
  witchdoctor: ClassesBarbarian;
  monk: ClassesBarbarian;
  crusader: ClassesBarbarian;
  necromancer: ClassesBarbarian;
  templar: Enchantress;
  enchantress: Enchantress;
  scoundrel: Enchantress;
}

export interface ClassesBarbarian {
  name: string;
  dualwield?: boolean;
  primary: string;
  imageSuffix: string;
  imageSuffixAlt: string;
  resources: string[];
}

export interface Enchantress {
  name: string;
  follower: boolean;
  primary: string;
  imageSuffix: string;
}

export interface CosmeticDye {
  name: string;
  type: number;
  hex: string;
}

export interface CosmeticItems {
  Axe_1H_000: Axe1_H000;
  Axe_1H_002: Axe1_H000;
  Axe_1H_003: Axe1_H000;
  Axe_1H_004: Axe1_H000;
  Axe_1H_005: Axe1_H000;
  Axe_1H_006: Axe1_H000;
  Axe_1H_007: Axe1_H000;
  Axe_1H_301: Axe1_H000;
  Axe_1H_302: Axe1_H000;
  Axe_2H_001: Axe1_H000;
  Axe_2H_002: Axe1_H000;
  Axe_2H_003: Axe1_H000;
  Axe_2H_004: Axe1_H000;
  Axe_2H_005: Axe1_H000;
  Axe_2H_301: Axe1_H000;
  Axe_2H_302: Axe1_H000;
  Boots_001: Axe1_H000;
  Boots_002: Axe1_H000;
  Boots_003: Axe1_H000;
  Boots_004: Axe1_H000;
  Boots_005: Axe1_H000;
  Boots_006: Axe1_H000;
  Boots_101: Axe1_H000;
  Boots_102: Axe1_H000;
  Boots_103: Axe1_H000;
  Boots_104: Axe1_H000;
  Boots_105: Axe1_H000;
  Boots_201: Axe1_H000;
  Boots_202: Axe1_H000;
  Boots_203: Axe1_H000;
  Boots_204: Axe1_H000;
  Boots_205: Axe1_H000;
  Boots_206: Axe1_H000;
  Boots_207: Axe1_H000;
  Boots_208: Axe1_H000;
  Bow_001: Axe1_H000;
  Bow_002: Axe1_H000;
  Bow_003: Axe1_H000;
  Bow_004: Axe1_H000;
  Bow_005: Axe1_H000;
  Bow_006: Axe1_H000;
  Bow_301: Axe1_H000;
  Bow_302: Axe1_H000;
  CeremonialDagger_1H_000: Axe1_H000;
  CeremonialDagger_1H_002: Axe1_H000;
  CeremonialDagger_1H_003: Axe1_H000;
  CeremonialDagger_1H_004: Axe1_H000;
  CeremonialDagger_1H_301: Axe1_H000;
  CeremonialDagger_1H_302: Axe1_H000;
  ChestArmor_001: Axe1_H000;
  ChestArmor_002: Axe1_H000;
  ChestArmor_003: Axe1_H000;
  ChestArmor_004: Axe1_H000;
  ChestArmor_005: Axe1_H000;
  ChestArmor_006: Axe1_H000;
  ChestArmor_101: Axe1_H000;
  ChestArmor_102: Axe1_H000;
  ChestArmor_103: Axe1_H000;
  ChestArmor_104: Axe1_H000;
  ChestArmor_105: Axe1_H000;
  ChestArmor_201: Axe1_H000;
  ChestArmor_202: Axe1_H000;
  ChestArmor_203: Axe1_H000;
  ChestArmor_204: Axe1_H000;
  ChestArmor_205: Axe1_H000;
  ChestArmor_206: Axe1_H000;
  ChestArmor_207: Axe1_H000;
  ChestArmor_208: Axe1_H000;
  Cloak_001: Axe1_H000;
  Cloak_002: Axe1_H000;
  Cloak_003: Axe1_H000;
  Cloak_004: Axe1_H000;
  Cloak_205: Axe1_H000;
  Cloak_206: Axe1_H000;
  CombatStaff_2H_001: Axe1_H000;
  CombatStaff_2H_002: Axe1_H000;
  CombatStaff_2H_003: Axe1_H000;
  CombatStaff_2H_004: Axe1_H000;
  CombatStaff_2H_301: Axe1_H000;
  CombatStaff_2H_302: Axe1_H000;
  Crossbow_001: Axe1_H000;
  Crossbow_002: Axe1_H000;
  Crossbow_003: Axe1_H000;
  Crossbow_004: Axe1_H000;
  Crossbow_005: Axe1_H000;
  Crossbow_006: Axe1_H000;
  Crossbow_007: Axe1_H000;
  Crossbow_301: Axe1_H000;
  Crossbow_302: Axe1_H000;
  CrusaderShield_000: Axe1_H000;
  CrusaderShield_002: Axe1_H000;
  CrusaderShield_003: Axe1_H000;
  CrusaderShield_004: Axe1_H000;
  CrusaderShield_005: Axe1_H000;
  CrusaderShield_006: Axe1_H000;
  CrusaderShield_007: Axe1_H000;
  CrusaderShield_207: Axe1_H000;
  Dagger_001: Axe1_H000;
  Dagger_002: Axe1_H000;
  Dagger_003: Axe1_H000;
  Dagger_004: Axe1_H000;
  Dagger_005: Axe1_H000;
  Dagger_006: Axe1_H000;
  Dagger_007: Axe1_H000;
  Dagger_301: Axe1_H000;
  Dagger_302: Axe1_H000;
  FistWeapon_1H_000: Axe1_H000;
  FistWeapon_1H_002: Axe1_H000;
  FistWeapon_1H_003: Axe1_H000;
  FistWeapon_1H_004: Axe1_H000;
  FistWeapon_1H_301: Axe1_H000;
  FistWeapon_1H_302: Axe1_H000;
  Flail_1H_000: Axe1_H000;
  Flail_1H_002: Axe1_H000;
  Flail_1H_003: Axe1_H000;
  Flail_1H_004: Axe1_H000;
  Flail_1H_005: Axe1_H000;
  Flail_2H_001: Axe1_H000;
  Flail_2H_002: Axe1_H000;
  Flail_2H_003: Axe1_H000;
  Flail_2H_004: Axe1_H000;
  Flail_2H_005: Axe1_H000;
  Gloves_001: Axe1_H000;
  Gloves_002: Axe1_H000;
  Gloves_003: Axe1_H000;
  Gloves_004: Axe1_H000;
  Gloves_005: Axe1_H000;
  Gloves_006: Axe1_H000;
  Gloves_101: Axe1_H000;
  Gloves_102: Axe1_H000;
  Gloves_103: Axe1_H000;
  Gloves_104: Axe1_H000;
  Gloves_105: Axe1_H000;
  Gloves_201: Axe1_H000;
  Gloves_202: Axe1_H000;
  Gloves_203: Axe1_H000;
  Gloves_204: Axe1_H000;
  Gloves_205: Axe1_H000;
  Gloves_206: Axe1_H000;
  Gloves_207: Axe1_H000;
  Gloves_208: Axe1_H000;
  HandXbow_000: Axe1_H000;
  HandXbow_002: Axe1_H000;
  HandXbow_003: Axe1_H000;
  HandXbow_004: Axe1_H000;
  HandXbow_005: Axe1_H000;
  HandXbow_006: Axe1_H000;
  HandXbow_007: Axe1_H000;
  HandXbow_008: Axe1_H000;
  HandXbow_301: Axe1_H000;
  HandXbow_302: Axe1_H000;
  Helm_002: Axe1_H000;
  Helm_003: Axe1_H000;
  Helm_004: Axe1_H000;
  Helm_005: Axe1_H000;
  Helm_006: Axe1_H000;
  Helm_101: Axe1_H000;
  Helm_102: Axe1_H000;
  Helm_103: Axe1_H000;
  Helm_104: Axe1_H000;
  Helm_105: Axe1_H000;
  Helm_201: Axe1_H000;
  Helm_202: Axe1_H000;
  Helm_203: Axe1_H000;
  Helm_204: Axe1_H000;
  Helm_205: Axe1_H000;
  Helm_206: Axe1_H000;
  Helm_207: Axe1_H000;
  Helm_208: Axe1_H000;
  Helm_console_promo: HelmConsolePromo;
  Mace_1H_001: Axe1_H000;
  Mace_1H_002: Axe1_H000;
  Mace_1H_003: Axe1_H000;
  Mace_1H_004: Axe1_H000;
  Mace_1H_005: Axe1_H000;
  Mace_1H_006: Axe1_H000;
  Mace_1H_007: Axe1_H000;
  Mace_1H_301: Axe1_H000;
  Mace_1H_302: Axe1_H000;
  Mace_2H_001: Axe1_H000;
  Mace_2H_002: Axe1_H000;
  Mace_2H_003: Axe1_H000;
  Mace_2H_004: Axe1_H000;
  Mace_2H_005: Axe1_H000;
  Mace_2H_006: Axe1_H000;
  Mace_2H_301: Axe1_H000;
  Mace_2H_302: Axe1_H000;
  MightyWeapon1H_001: Axe1_H000;
  MightyWeapon1H_002: Axe1_H000;
  MightyWeapon1H_003: Axe1_H000;
  MightyWeapon1H_004: Axe1_H000;
  MightyWeapon1H_301: Axe1_H000;
  MightyWeapon1H_302: Axe1_H000;
  MightyWeapon2H_001: Axe1_H000;
  MightyWeapon2H_002: Axe1_H000;
  MightyWeapon2H_003: Axe1_H000;
  MightyWeapon2H_004: Axe1_H000;
  MightyWeapon2H_301: Axe1_H000;
  MightyWeapon2H_302: Axe1_H000;
  Mojo_001: Axe1_H000;
  Mojo_002: Axe1_H000;
  Mojo_003: Axe1_H000;
  Mojo_004: Axe1_H000;
  Mojo_205: Axe1_H000;
  Mojo_206: Axe1_H000;
  NecromancerTalisman_001: Axe1_H000;
  NecromancerTalisman_001_t2: Axe1_H000;
  NecromancerTalisman_001_t3: Axe1_H000;
  NecromancerTalisman_004: Axe1_H000;
  Orb_001: Axe1_H000;
  Orb_002: Axe1_H000;
  Orb_003: Axe1_H000;
  Orb_004: Axe1_H000;
  Orb_205: Axe1_H000;
  Orb_206: Axe1_H000;
  Pants_001: Axe1_H000;
  Pants_002: Axe1_H000;
  Pants_003: Axe1_H000;
  Pants_004: Axe1_H000;
  Pants_005: Axe1_H000;
  Pants_006: Axe1_H000;
  Pants_101: Axe1_H000;
  Pants_102: Axe1_H000;
  Pants_103: Axe1_H000;
  Pants_104: Axe1_H000;
  Pants_105: Axe1_H000;
  Pants_201: Axe1_H000;
  Pants_202: Axe1_H000;
  Pants_203: Axe1_H000;
  Pants_204: Axe1_H000;
  Pants_205: Axe1_H000;
  Pants_206: Axe1_H000;
  Pants_207: Axe1_H000;
  Pants_208: Axe1_H000;
  Polearm_001: Axe1_H000;
  Polearm_002: Axe1_H000;
  Polearm_003: Axe1_H000;
  Polearm_004: Axe1_H000;
  Polearm_005: Axe1_H000;
  Polearm_006: Axe1_H000;
  Polearm_007: Axe1_H000;
  Polearm_008: Axe1_H000;
  Polearm_301: Axe1_H000;
  Polearm_302: Axe1_H000;
  Scythe_1H_000: Axe1_H000;
  Scythe_1H_001_t2: Axe1_H000;
  Scythe_1H_001_t3: Axe1_H000;
  Scythe_1H_004: Axe1_H000;
  Scythe_2H_001: Axe1_H000;
  Scythe_2H_001_t2: Axe1_H000;
  Scythe_2H_001_t3: Axe1_H000;
  Scythe_2H_004: Axe1_H000;
  Shield_000: Axe1_H000;
  Shield_002: Axe1_H000;
  Shield_003: Axe1_H000;
  Shield_004: Axe1_H000;
  Shield_005: Axe1_H000;
  Shield_006: Axe1_H000;
  Shield_007: Axe1_H000;
  Shield_208: Axe1_H000;
  Shield_209: Axe1_H000;
  Shoulders_002: Axe1_H000;
  Shoulders_003: Axe1_H000;
  Shoulders_004: Axe1_H000;
  Shoulders_005: Axe1_H000;
  Shoulders_006: Axe1_H000;
  Shoulders_101: Axe1_H000;
  Shoulders_102: Axe1_H000;
  Shoulders_103: Axe1_H000;
  Shoulders_104: Axe1_H000;
  Shoulders_105: Axe1_H000;
  Shoulders_201: Axe1_H000;
  Shoulders_202: Axe1_H000;
  Shoulders_203: Axe1_H000;
  Shoulders_204: Axe1_H000;
  Shoulders_205: Axe1_H000;
  Shoulders_206: Axe1_H000;
  Shoulders_207: Axe1_H000;
  Shoulders_208: Axe1_H000;
  Spear_001: Axe1_H000;
  Spear_002: Axe1_H000;
  Spear_003: Axe1_H000;
  Spear_004: Axe1_H000;
  Spear_005: Axe1_H000;
  Spear_301: Axe1_H000;
  Spear_302: Axe1_H000;
  SpiritStone_001: Axe1_H000;
  SpiritStone_002: Axe1_H000;
  SpiritStone_003: Axe1_H000;
  SpiritStone_004: Axe1_H000;
  SpiritStone_205: Axe1_H000;
  SpiritStone_206: Axe1_H000;
  Staff_001: Axe1_H000;
  Staff_002: Axe1_H000;
  Staff_003: Axe1_H000;
  Staff_004: Axe1_H000;
  Staff_005: Axe1_H000;
  Staff_006: Axe1_H000;
  Staff_007: Axe1_H000;
  Staff_301: Axe1_H000;
  Staff_302: Axe1_H000;
  Sword_1H_001: Axe1_H000;
  Sword_1H_002: Axe1_H000;
  Sword_1H_003: Axe1_H000;
  Sword_1H_004: Axe1_H000;
  Sword_1H_005: Axe1_H000;
  Sword_1H_006: Axe1_H000;
  Sword_1H_007: Axe1_H000;
  Sword_1H_008: Axe1_H000;
  Sword_1H_301: Axe1_H000;
  Sword_1H_302: Axe1_H000;
  Sword_2H_001: Axe1_H000;
  Sword_2H_002: Axe1_H000;
  Sword_2H_003: Axe1_H000;
  Sword_2H_004: Axe1_H000;
  Sword_2H_005: Axe1_H000;
  Sword_2H_006: Axe1_H000;
  Sword_2H_301: Axe1_H000;
  Sword_2H_302: Axe1_H000;
  TransmogAxe_241_001: HelmConsolePromo;
  TransmogAxe_241_002: HelmConsolePromo;
  TransmogAxe_241_003: HelmConsolePromo;
  TransmogAxe_241_004: HelmConsolePromo;
  TransmogFist_241_001: HelmConsolePromo;
  TransmogFist_241_002: HelmConsolePromo;
  TransmogFlail_241_001: HelmConsolePromo;
  TransmogFlail_241_002: HelmConsolePromo;
  TransmogFlail_241_003: HelmConsolePromo;
  TransmogFlail_241_004: HelmConsolePromo;
  TransmogHelm_001: HelmConsolePromo;
  TransmogHelm_002: HelmConsolePromo;
  TransmogHelm_Illidan: HelmConsolePromo;
  TransmogMace_241_001: HelmConsolePromo;
  TransmogPolearm_241_001: HelmConsolePromo;
  TransmogShield_313: HelmConsolePromo;
  TransmogShoulders_001: HelmConsolePromo;
  TransmogSpear_241_001: HelmConsolePromo;
  TransmogStaff_241_001: HelmConsolePromo;
  TransmogSword_241_001: HelmConsolePromo;
  TransmogSword_241_002: HelmConsolePromo;
  TransmogSword_241_003: HelmConsolePromo;
  TransmogSword_241_004: HelmConsolePromo;
  TransmogSword_241_005: HelmConsolePromo;
  TransmogXbow_241_001: HelmConsolePromo;
  Unique_CeremonialDagger_Promo_01_x1: HelmConsolePromo;
  Unique_Fist_Promo_01_x1: HelmConsolePromo;
  Unique_Flail_1H_Promo_01_x1: HelmConsolePromo;
  Unique_HandXBow_Promo_01_x1: HelmConsolePromo;
  Unique_Helm_Promo_01_x1: HelmConsolePromo;
  Unique_Helm_Promo_02_x1: HelmConsolePromo;
  Unique_Mighty_2H_Promo_01_x1: HelmConsolePromo;
  Unique_Orb_Promo_01_x1: HelmConsolePromo;
  Unique_Sword_1H_Promo_01_x1: HelmConsolePromo;
  VoodooMask_001: Axe1_H000;
  VoodooMask_002: Axe1_H000;
  VoodooMask_003: Axe1_H000;
  VoodooMask_004: Axe1_H000;
  VoodooMask_205: Axe1_H000;
  VoodooMask_206: Axe1_H000;
  Wand_000: Axe1_H000;
  Wand_002: Axe1_H000;
  Wand_003: Axe1_H000;
  Wand_004: Axe1_H000;
  Wand_005: Axe1_H000;
  Wand_006: Axe1_H000;
  Wand_007: Axe1_H000;
  Wand_301: Axe1_H000;
  Wand_302: Axe1_H000;
  WizardHat_001: Axe1_H000;
  WizardHat_002: Axe1_H000;
  WizardHat_003: Axe1_H000;
  WizardHat_004: Axe1_H000;
  WizardHat_205: Axe1_H000;
  WizardHat_206: Axe1_H000;
  X1_Boots_norm_season_01: HelmConsolePromo;
  X1_Gloves_norm_season_01: HelmConsolePromo;
  X1_Helm_norm_season_01: HelmConsolePromo;
  X1_Pants_norm_season_01: HelmConsolePromo;
  X1_chestArmor_norm_season_01: HelmConsolePromo;
  X1_shoulderPads_norm_season_01: HelmConsolePromo;
  p1_Mace_norm_promo_01: HelmConsolePromo;
  p1_Staff_norm_promo_01: HelmConsolePromo;
  p1_bow_norm_promo_01: HelmConsolePromo;
  p1_fistWeapon_norm_promo_01: HelmConsolePromo;
  p1_mightyWeapon_2H_norm_promo_01: HelmConsolePromo;
  p1_orb_norm_promo_01: HelmConsolePromo;
  p43_RetroTransmog_WirtsLeg: HelmConsolePromo;
  p4_Helm_norm_anniversary_01: HelmConsolePromo;
}

export interface Axe1_H000 {
  name: string;
  type: string;
}

export interface HelmConsolePromo {
  name: string;
  type: string;
  promo: boolean;
}

export interface DropDatum {
  level: number;
  weight: number;
  witchdoctor?: boolean;
  crusader?: boolean;
  monk?: boolean;
  wizard?: boolean;
  barbarian?: boolean;
  demonhunter?: boolean;
  necromancer?: boolean;
  hardcore?: boolean;
}

export interface Elements {
  arc: string;
  col: string;
  fir: string;
  hol: string;
  lit: string;
  phy: string;
  psn: string;
}

export interface ExtraItem {
  id: string;
  name: string;
  quality: Quality;
  description?: string;
  icon: number;
  flavor?: string;
  size?: string;
  type?: ExtraItemType;
  rank?: string;
  stats?: Stat[];
}

export enum Quality {
  Epic = "epic",
  Ethereal = "ethereal",
  Legendary = "legendary",
  Magic = "magic",
  Normal = "normal",
  Rare = "rare",
  Set = "set",
  Unique = "unique",
}

export interface Stat {
  color: string;
  type: string;
  text: string;
}

export enum ExtraItemType {
  Consumable = "consumable",
  Crafting = "crafting",
  Gem = "gem",
  Key = "key",
  Planjeweler = "planjeweler",
  Planmystic = "planmystic",
  Plansmith = "plansmith",
  Portal = "portal",
}

export interface ExtraTypes {
  potion: string;
  crafting: string;
  plansmith: string;
  planjeweler: string;
  planmystic: string;
  portal: string;
  consumable: string;
  key: string;
  gem: string;
}

export interface Extraskills {
  witchdoctor: ExtraskillsWitchdoctor;
  wizard: ExtraskillsWizard;
}

export interface ExtraskillsWitchdoctor {
  hex_explode: HexExplode;
}

export interface HexExplode {
  skill: string;
  name: string;
  row: number;
  col: number;
  tip: string;
  range?: number;
}

export interface ExtraskillsWizard {
  archon_arcanestrike: HexExplode;
  archon_disintegrationwave: HexExplode;
  archon_arcaneblast: HexExplode;
  archon_slowtime: HexExplode;
  archon_teleport: HexExplode;
}

export interface FollowerSkillList {
  templar: string[];
  enchantress: string[];
  scoundrel: string[];
}

export interface FollowerSkill {
  id: string;
  class: FollowerSkillClass;
  description: string;
  icon: number;
  icon_inactive: number;
  level: number;
  name: string;
}

export enum FollowerSkillClass {
  Enchantress = "enchantress",
  Scoundrel = "scoundrel",
  Templar = "templar",
}

export interface GemColors {
  amethyst: Amethyst;
  diamond: Amethyst;
  emerald: Amethyst;
  ruby: Amethyst;
  topaz: Amethyst;
}

export interface Amethyst {
  id: string;
  oldid: string;
  name: string;
  weapon: OtherClass;
  head: OtherClass;
  other: OtherClass;
}

export interface OtherClass {
  stat: string;
  amount: number[];
}

export enum ItemPowerClassValue {
  Barbarian = "barbarian",
  Crusader = "crusader",
  Demonhunter = "demonhunter",
  Enchantress = "enchantress",
  Monk = "monk",
  Necromancer = "necromancer",
  Scoundrel = "scoundrel",
  Templar = "templar",
  Witchdoctor = "witchdoctor",
  Wizard = "wizard",
}

export interface ItemSets {
  chantodo: Chantodo;
  danetta: Chantodo;
  blackthorne: Asheara;
  bulkathos: Bulkathos;
  endlesswalk: Chantodo;
  nightmares: Bastionsofwill;
  manajuma: Chantodo;
  shenlong: Chantodo;
  bastionsofwill: Bastionsofwill;
  istvan: Bastionsofwill;
  invoker: Akkhan;
  krelm: Hallowed;
  asheara: Asheara;
  aughild: Aughild;
  born: Aughild;
  cain: Aughild;
  crimson: Aughild;
  demon: Demon;
  guardian: Aughild;
  hallowed: Hallowed;
  sage: CainV2;
  talrasha: Akkhan;
  vyr: Akkhan;
  firebird: Akkhan;
  natalya: Akkhan;
  shadow: Akkhan;
  marauder: Akkhan;
  zunimassa: Akkhan;
  helltooth: Akkhan;
  jadeharvester: Akkhan;
  immortalking: Akkhan;
  earth: Akkhan;
  raekor: Akkhan;
  inna: Akkhan;
  sunwuko: Akkhan;
  storms: Akkhan;
  akkhan: Akkhan;
  roland: Akkhan;
  magnumopus: Akkhan;
  unhallowed: Akkhan;
  wastes: Akkhan;
  light: Akkhan;
  uliana: Akkhan;
  arachyr: Akkhan;
  norvald: Chantodo;
  rathma: Akkhan;
  trangoul: Akkhan;
  inarius: Akkhan;
  pestilence: Akkhan;
  jesseth: Chantodo;
  aughild_v2: Aughild;
  cain_v2: CainV2;
  crimson_v2: Asheara;
  valor: Akkhan;
  justice: Akkhan;
  savages: Akkhan;
  mundunugu: Akkhan;
  typhon: Akkhan;
  dreadlands: Akkhan;
  masquerade: Akkhan;
}

export interface Akkhan {
  name: string;
  class?: ItemPowerClassValue;
  order: string[];
  bonuses: { [key: string]: AkkhanBonus[] };
  tclass?: ItemPowerClassValue;
}

export interface AkkhanBonus {
  format: string;
}

export interface Asheara {
  name: string;
  order: string[];
  bonuses: { [key: string]: AshearaBonus[] };
}

export interface AshearaBonus {
  stat?: string;
  value?: number[];
  format?: string;
}

export interface Aughild {
  name: string;
  order: string[];
  legacy?: boolean;
  bonuses: { [key: string]: AughildBonus[] };
}

export interface AughildBonus {
  stat: string;
  value: number[];
}

export interface Bastionsofwill {
  name: string;
  bonuses: BastionsofwillBonuses;
}

export interface BastionsofwillBonuses {
  "2": AkkhanBonus[];
}

export interface Bulkathos {
  name: string;
  tclass: ItemPowerClassValue;
  bonuses: BulkathosBonuses;
}

export interface BulkathosBonuses {
  "2": Effect[];
}

export interface Effect {
  stat?: string;
  value?: number[];
  format?: string;
  delta?: number[];
}

export interface CainV2 {
  name: string;
  order: string[];
  bonuses: { [key: string]: CainV2Bonus[] };
}

export interface CainV2Bonus {
  stat?: string;
  value?: number[];
  format?: string;
  follower?: boolean;
}

export interface Chantodo {
  name: string;
  order?: string[];
  tclass?: ItemPowerClassValue;
  bonuses: BastionsofwillBonuses;
  class?: ItemPowerClassValue;
}

export interface Demon {
  name: string;
  order: string[];
  bonuses: { [key: string]: Effect[] };
}

export interface Hallowed {
  name: string;
  order: string[];
  bonuses: HallowedBonuses;
}

export interface HallowedBonuses {
  "2": AughildBonus[];
}

export interface ItemSlots {
  follower: FollowerClass;
  head: ItemSlotsHead;
  shoulders: Hands;
  neck: Neck;
  torso: Torso;
  waist: Feet;
  hands: Hands;
  wrists: Wrists;
  legs: Legs;
  feet: Feet;
  leftfinger: Leftfinger;
  rightfinger: Leftfinger;
  mainhand: Leftfinger;
  offhand: Offhand;
  soulshard: Soulshard;
}

export interface Feet {
  name: string;
  affixes: FeetAffixes;
  required: FeetRequired;
}

export interface FeetAffixes {
  mainstat: string;
  vit: string;
  armor: string;
  resall: string;
  ms?: MS;
  regen: string;
  skill_head?: string;
  resist: string;
  gf: string;
  thorns: string;
  expadd: string;
  pickup: string;
  hitimmobilize?: string;
  dura: string;
  healbonus?: string;
  lvlreq: string;
  skill_legs?: string;
  sockets?: string;
  laek?: string;
  hitslow?: string;
  life?: string;
  hitfreeze?: string;
}

export enum MS {
  MSNormal = "msNormal",
}

export interface FeetRequired {
  basearmor: string;
}

export interface FollowerClass {
  name: string;
  classes: FollowerSkillClass[];
  affixes: FollowerAffixes;
}

export interface FollowerAffixes {
  vit: string;
  chd: string;
  resall: string;
  expadd: string;
}

export interface Hands {
  name: string;
  affixes: HandsAffixes;
  required: FeetRequired;
}

export interface HandsAffixes {
  mainstat: string;
  vit: string;
  resall: string;
  armor: string;
  ias?: Ias;
  chc?: string;
  chd?: string;
  regen: string;
  lph?: string;
  area?: string;
  cdr?: string;
  rcr?: string;
  resist: string;
  gf: string;
  thorns: string;
  expadd: string;
  pickup: string;
  hitstun?: string;
  dura: string;
  lvlreq: string;
  life?: string;
  skill_torso?: string;
  hitchill?: string;
  healbonus?: string;
  edef?: string;
  sockets?: string;
  laek?: string;
  meleedef?: string;
  rangedef?: string;
}

export enum Ias {
  IasNormal = "iasNormal",
}

export interface ItemSlotsHead {
  name: string;
  affixes: HeadAffixes;
  required: FeetRequired;
  sockets: number;
  socketType: SocketType;
}

export interface HeadAffixes {
  mainstat: string;
  vit: string;
  armor: string;
  resall: string;
  life: string;
  chc: string;
  regen: string;
  lph: string;
  sockets: string;
  skill_head: string;
  gf: string;
  thorns: string;
  pickup: string;
  resist: string;
  expadd: string;
  ccr: string;
  hitfear: string;
  dura: string;
  lvlreq: string;
}

export enum SocketType {
  Finger = "finger",
  Head = "head",
  Neck = "neck",
}

export interface Leftfinger {
  name: string;
  sockets: number;
}

export interface Legs {
  name: string;
  affixes: FeetAffixes;
  required: FeetRequired;
  sockets: number;
}

export interface Neck {
  name: string;
  affixes: NeckAffixes;
  sockets: number;
  socketType: string;
}

export interface NeckAffixes {
  wpnphy: string;
  elemental?: Elemental;
  mainstat: string;
  vit: string;
  armor: string;
  resall: string;
  life: string;
  regen: string;
  lph: string;
  chc: string;
  chd: string;
  ias: Ias;
  cdr: string;
  rcr: string;
  area: string;
  sockets: string;
  resist: string;
  meleedef?: string;
  rangedef?: string;
  laek: string;
  gf: string;
  thorns: string;
  expadd: string;
  ccr: string;
  hitblind?: string;
  healbonus: string;
}

export enum Elemental {
  ElementalDamage = "elementalDamage",
}

export interface Offhand {
  name: string;
  affixes: OffhandAffixes;
  sockets: number;
}

export interface OffhandAffixes {
  mainstat: string;
  vit: string;
  life: string;
  regen: string;
  chc: string;
  edmg: string;
  bleed: string;
  sockets: string;
  gf: string;
  thorns: string;
  expadd: string;
  onhit: string;
  dura: string;
  healbonus: string;
  lvlreq: string;
}

export interface Soulshard {
  name: string;
  classes: any[];
}

export interface Torso {
  name: string;
  affixes: HandsAffixes;
  required: FeetRequired;
  sockets: number;
}

export interface Wrists {
  name: string;
  affixes: WristsAffixes;
  required: FeetRequired;
}

export interface WristsAffixes {
  elemental: Elemental;
  mainstat: string;
  vit: string;
  resall: string;
  armor: string;
  chc: string;
  lph: string;
  regen: string;
  resist: string;
  gf: string;
  meleedef: string;
  rangedef: string;
  thorns: string;
  pickup: string;
  expadd: string;
  hitknockback: string;
  dura: string;
  lvlreq: string;
}

export interface ItemTypes {
  templarrelic: Templarrelic;
  scoundreltoken: Scoundreltoken;
  enchantressfocus: Enchantressfocus;
  helm: Amulet;
  wizardhat: Wizardhat;
  voodoomask: Voodoomask;
  spiritstone: Spiritstone;
  shoulders: Amulet;
  amulet: Amulet;
  chestarmor: Amulet;
  cloak: Cloak;
  belt: Amulet;
  mightybelt: Mightybelt;
  gloves: Amulet;
  bracers: Amulet;
  pants: Amulet;
  boots: Amulet;
  ring: Amulet;
  axe: Axe;
  dagger: Axe;
  mace: Axe;
  spear: Axe;
  sword: Axe;
  ceremonialknife: Ceremonialknife;
  fistweapon: Daibo;
  flail: Flail;
  mightyweapon: Mightyweapon;
  wand: Wand;
  scythe: Scythe;
  handcrossbow: Handcrossbow;
  axe2h: Axe;
  mace2h: Axe;
  polearm: Axe;
  staff: Axe;
  sword2h: Axe;
  daibo: Daibo;
  flail2h: Flail;
  mightyweapon2h: Mightyweapon;
  scythe2h: Scythe;
  bow: CrossbowClass;
  crossbow: CrossbowClass;
  shield: Shield;
  crusadershield: Crusadershield;
  source: Source;
  mojo: Mojo;
  quiver: Quiver;
  phylactery: Phylactery;
  custom: Amulet;
  customwpn: Amulet;
  hydrabow: Ancientblade;
  colossusblade: Ancientblade;
  gravewand: Ancientblade;
  swirlingcrystal: Ancientblade;
  greatertalons: Ancientblade;
  caduceus: Ancientblade;
  ancientblade: Ancientblade;
  flyingaxe: Ancientblade;
  ballista: Ancientblade;
  scythe1: Ancientblade;
  archonstaff: Ancientblade;
  battlecestus: Ancientblade;
  mightyscepter: Ancientblade;
  legendspike: Ancientblade;
  championsword: Ancientblade;
  repeatingcrossbow: Ancientblade;
  cinquedeas: Ancientblade;
  boneknife: Ancientblade;
  wristsword: Ancientblade;
  flail1: Ancientblade;
  hyperionspear: Ancientblade;
  primeshard: Shard;
  lessershard: Shard;
}

export interface Amulet {
  slot: string;
  name: string;
  generic: string;
  affixes?: AmuletAffixes;
  weapon?: WeaponClass;
}

export interface AmuletAffixes {
  any: string;
  sockets: string;
}

export interface WeaponClass {
  speed: number;
  min: number;
  max: number;
  type: string;
}

export interface Ancientblade {
  ethereal: boolean;
  slot: Slot;
  class: ItemPowerClassValue;
  name: string;
  attack: AttackEnum;
  weapon: WeaponClass;
}

export enum AttackEnum {
  Bow = "bow",
  Melee = "melee",
  Wand = "wand",
}

export enum Slot {
  Onehand = "onehand",
  Twohand = "twohand",
}

export interface Axe {
  slot: Slot;
  classes: ItemPowerClassValue[];
  name: string;
  attack: AttackEnum;
  affixes: AxeAffixes;
  weapon: WeaponClass;
  generic: string;
}

export interface AxeAffixes {
  weapon: WeaponEnum;
}

export enum WeaponEnum {
  Damage1HFast = "damage1HFast",
  Damage1HNormal = "damage1HNormal",
  Damage2H = "damage2H",
}

export interface CrossbowClass {
  slot: Slot;
  classes: ItemPowerClassValue[];
  name: string;
  attack: AttackEnum;
  affixes: BowAffixes;
  weapon: WeaponClass;
  generic: string;
}

export interface BowAffixes {
  weapon: WeaponEnum;
  maxdisc: string;
  mainstat: string;
  vit: string;
  lph: string;
  laek: string;
}

export interface Ceremonialknife {
  slot: Slot;
  class: ItemPowerClassValue;
  name: string;
  attack: AttackEnum;
  affixes: CeremonialknifeAffixes;
  weapon: WeaponClass;
  generic: string;
}

export interface CeremonialknifeAffixes {
  weapon: WeaponEnum;
  manaregen: string;
  maxmana: string;
}

export interface Cloak {
  slot: string;
  class: ItemPowerClassValue;
  name: string;
  affixes: CloakAffixes;
  generic: string;
}

export interface CloakAffixes {
  hatredregen: string;
  maxdisc: string;
}

export interface Crusadershield {
  slot: string;
  class: ItemPowerClassValue;
  name: string;
  affixes: CrusadershieldAffixes;
  required: CrusadershieldRequired;
  generic: string;
}

export interface CrusadershieldAffixes {
  life: string;
  resall: string;
  armor: string;
  edef: string;
  area: string;
  lifewrath: string;
  wrathregen: string;
  skill_crusader: string;
  rcr: string;
  cdr: string;
  resist: string;
  meleedef: string;
  rangedef: string;
  thorns: string;
  ccr: string;
  maxwrath: string;
  block: string;
}

export interface CrusadershieldRequired {
  basearmor: string;
  baseblock: string;
  blockamount: string;
}

export interface Daibo {
  slot: Slot;
  class: ItemPowerClassValue;
  name: string;
  attack: AttackEnum;
  affixes: DaiboAffixes;
  weapon: WeaponClass;
  generic: string;
}

export interface DaiboAffixes {
  weapon?: WeaponEnum;
  spiritregen: string;
  lifespirit: string;
  maxspirit: string;
  skill_monk?: string;
}

export interface Enchantressfocus {
  slot: string;
  name: string;
  class: FollowerSkillClass;
  affixes: EnchantressfocusAffixes;
  generic: string;
}

export interface EnchantressfocusAffixes {
  int: string;
  lph: string;
}

export interface Flail {
  slot: Slot;
  class: ItemPowerClassValue;
  name: string;
  attack: AttackEnum;
  affixes: FlailAffixes;
  weapon: WeaponClass;
  generic: string;
}

export interface FlailAffixes {
  weapon: WeaponEnum;
  wrathregen: string;
  maxwrath: string;
  lifewrath: string;
}

export interface Handcrossbow {
  slot: Slot;
  class: ItemPowerClassValue;
  name: string;
  attack: AttackEnum;
  affixes: HandcrossbowAffixes;
  weapon: WeaponClass;
  generic: string;
}

export interface HandcrossbowAffixes {
  weapon: WeaponEnum;
  hatredregen: string;
  maxdisc: string;
}

export interface Shard {
  name: string;
  slot: string;
}

export interface Mightybelt {
  slot: string;
  class: ItemPowerClassValue;
  name: string;
  affixes: MightybeltAffixes;
  required: FeetRequired;
  generic: string;
}

export interface MightybeltAffixes {
  lifefury: string;
  maxfury: string;
}

export interface Mightyweapon {
  slot: Slot;
  class: ItemPowerClassValue;
  name: string;
  attack: AttackEnum;
  affixes: MightyweaponAffixes;
  weapon: WeaponClass;
  generic: string;
}

export interface MightyweaponAffixes {
  weapon: WeaponEnum;
  lifefury: string;
  maxfury: string;
  skill_barbarian?: string;
}

export interface Mojo {
  slot: string;
  class: ItemPowerClassValue;
  name: string;
  affixes: MojoAffixes;
  required: MojoRequired;
  generic: string;
}

export interface MojoAffixes {
  area: string;
  cdr: string;
  rcr: string;
  manaregen: string;
  skill_witchdoctor: string;
  maxmana: string;
}

export interface MojoRequired {
  wpnphy: string;
}

export interface Phylactery {
  slot: string;
  class: ItemPowerClassValue;
  name: string;
  affixes: PhylacteryAffixes;
  required: MojoRequired;
  generic: string;
}

export interface PhylacteryAffixes {
  area: string;
  cdr: string;
  rcr: string;
  skill_necromancer: string;
  maxessence: string;
}

export interface Quiver {
  slot: string;
  class: ItemPowerClassValue;
  name: string;
  affixes: QuiverAffixes;
  required: QuiverRequired;
  generic: string;
}

export interface QuiverAffixes {
  area: string;
  cdr: string;
  rcr: string;
  hatredregen: string;
  skill_demonhunter: string;
  maxdisc: string;
}

export interface QuiverRequired {
  ias: string;
}

export interface Scoundreltoken {
  slot: string;
  name: string;
  class: FollowerSkillClass;
  affixes: ScoundreltokenAffixes;
  generic: string;
}

export interface ScoundreltokenAffixes {
  dex: string;
  lph: string;
}

export interface Scythe {
  slot: Slot;
  class: ItemPowerClassValue;
  name: string;
  attack: AttackEnum;
  affixes: ScytheAffixes;
  weapon: WeaponClass;
  generic: string;
}

export interface ScytheAffixes {
  weapon: WeaponEnum;
  maxessence: string;
}

export interface Shield {
  slot: string;
  classes: ItemPowerClassValue[];
  name: string;
  affixes: ShieldAffixes;
  required: CrusadershieldRequired;
  generic: string;
}

export interface ShieldAffixes {
  life: string;
  resall: string;
  armor: string;
  edef: string;
  rcr: string;
  cdr: string;
  resist: string;
  meleedef: string;
  rangedef: string;
  thorns: string;
  ccr: string;
  block: string;
  maxessence: string;
}

export interface Source {
  slot: string;
  class: ItemPowerClassValue;
  name: string;
  affixes: SourceAffixes;
  required: MojoRequired;
  generic: string;
}

export interface SourceAffixes {
  area: string;
  cdr: string;
  rcr: string;
  apoc: string;
  skill_wizard: string;
  maxap: string;
}

export interface Spiritstone {
  slot: SocketType;
  class: ItemPowerClassValue;
  name: string;
  affixes: DaiboAffixes;
  generic: string;
}

export interface Templarrelic {
  slot: string;
  name: string;
  class: FollowerSkillClass;
  affixes: TemplarrelicAffixes;
  generic: string;
}

export interface TemplarrelicAffixes {
  str: string;
  block: string;
  armor: string;
  laek: string;
}

export interface Voodoomask {
  slot: SocketType;
  class: ItemPowerClassValue;
  name: string;
  affixes: VoodoomaskAffixes;
  generic: string;
}

export interface VoodoomaskAffixes {
  manaregen: string;
  maxmana: string;
}

export interface Wand {
  slot: Slot;
  class: ItemPowerClassValue;
  name: string;
  attack: AttackEnum;
  affixes: WandAffixes;
  weapon: WeaponClass;
  generic: string;
}

export interface WandAffixes {
  weapon: WeaponEnum;
  maxap: string;
}

export interface Wizardhat {
  slot: SocketType;
  class: ItemPowerClassValue;
  name: string;
  affixes: WizardhatAffixes;
  generic: string;
}

export interface WizardhatAffixes {
  apoc: string;
  maxap: string;
}

export interface Item {
  id: string;
  name: string;
  type: string;
  quality: Quality;
  required?: ItemRequired;
  preset?: string[];
  ids?: string[];
  legacy?: boolean;
  primary?: number;
  set?: string;
  local?: boolean;
  secondary?: number;
  affixes?: ItemAffixes;
  retro?: boolean;
  weapon?: WeaponClass;
  realid?: string;
  rank?: number;
  usealt?: boolean;
}

export interface ItemAffixes {
  maxdisc?: ArmorLarge | string;
  maxfury?: ArmorLarge | string;
  maxap?: ArmorLarge | string;
  maxmana?: ArmorLarge | string;
  maxspirit?: ArmorLarge | string;
  maxwrath?: ArmorLarge | string;
  spiritregen?: string;
  wrathregen?: string;
  pickup?: ArmorLarge | string;
  ms?: MS;
  hitfear?: ChcLarge;
  life?: ArmorLarge | string;
  block?: ArmorLarge | string;
  ccr?: ArmorLarge | string;
  dura?: string;
  elemental?: ArmorLarge | Elemental;
  maxessence?: ArmorLarge | string;
  hitimmobilize?: ChcLarge;
  hitblind?: ChcLarge;
  ias?: Ias;
  dmglit?: ArmorLarge | Elemental;
  skill_monk_cyclonestrike_cost?: ArmorLarge;
  skill_monk_wayofthehundredfists?: string;
  skill_monk_sweepingwind?: string;
  skill_monk_explodingpalm?: string;
  skill_monk_cripplingwave?: string;
  skill_monk_deadlyreach?: ArmorLarge | string;
  skill_monk_fistsofthunder?: string;
  skill_monk_waveoflight?: ArmorLarge;
  laek?: string;
  dmgpsn?: ArmorLarge | Elemental;
  dmgphy?: ArmorLarge | Elemental;
  dmgfir?: Elemental;
  dmgcol?: ArmorLarge | Elemental;
  dmgarc?: ArmorLarge | Elemental;
  dmghol?: ArmorLarge | Elemental;
  gf?: ArmorLarge | string;
  meleedef?: ChcLarge | string;
  skill_crusader_phalanx?: ArmorLarge;
  skill_witchdoctor_fetisharmy?: ArmorLarge;
  skill_wizard_meteor?: ArmorLarge;
  skill_demonhunter_sentry?: ArmorLarge;
  skill_witchdoctor_graspofthedead?: ArmorLarge;
  skill_demonhunter_rapidfire?: ArmorLarge;
  chd?: ArmorLarge | string;
  hitstun?: ChcLarge;
  skill_crusader_blessedhammer?: ArmorLarge;
  thorns?: string;
  skill_witchdoctor_corpsespiders?: ArmorLarge;
  hitslow?: ChcLarge;
  regen?: string;
  skill_witchdoctor_zombiecharger?: ArmorLarge;
  skill_witchdoctor_spiritbarrage?: ArmorLarge;
  skill_demonhunter_strafe?: ArmorLarge;
  skill_demonhunter_rainofvengeance?: ArmorLarge;
  healbonus?: ArmorLarge;
  mainstat?: ArmorLarge;
  vit?: ArmorLarge;
  resall?: ArmorLarge;
  rangedef?: ArmorLarge;
  armor?: ArmorLarge;
  sliverofterror_1?: Dregsoflies1;
  sliverofterror_2?: Dregsoflies1;
  sliverofterror_3?: Dregsoflies1;
  shardofhatred_1?: Dregsoflies1;
  shardofhatred_2?: Dregsoflies1;
  shardofhatred_3?: Dregsoflies1;
  fragmentofdestruction_1?: Dregsoflies1;
  fragmentofdestruction_2?: Dregsoflies1;
  fragmentofdestruction_3?: Dregsoflies1;
  weaponias?: ArmorLarge;
  damage?: ArmorLarge;
  chc?: ChcLarge;
  stainofsin_1?: Dregsoflies1;
  stainofsin_2?: Dregsoflies1;
  stainofsin_3?: Dregsoflies1;
  essenceofanguish_1?: Dregsoflies1;
  essenceofanguish_2?: Dregsoflies1;
  essenceofanguish_3?: Dregsoflies1;
  dregsoflies_1?: Dregsoflies1;
  dregsoflies_2?: Dregsoflies1;
  dregsoflies_3?: Dregsoflies1;
  remnantofpain_1?: Dregsoflies1;
  remnantofpain_2?: Dregsoflies1;
  remnantofpain_3?: Dregsoflies1;
  skill_monk_mystically?: ArmorLarge;
  skill_barbarian_seismicslam?: ArmorLarge;
  skill_barbarian_calloftheancients?: ArmorLarge;
  skill_witchdoctor_acidcloud?: ArmorLarge;
  skill_barbarian_earthquake?: ArmorLarge;
  cdr?: string;
  rcr?: string;
  edmg?: ArmorLarge;
  edef?: string;
}

export interface ArmorLarge {
  min: number;
  max: number;
}

export interface ChcLarge {
  min: number;
  max: number | number;
  step?: number;
  noblock?: boolean;
}

export interface Dregsoflies1 {}

export interface ItemRequired {
  custom?: PurpleCustom;
  hitfear?: ChcLarge;
  wpnpsn?: BlockamountShield;
  damage?: ArmorLarge;
  int?: ArmorLarge;
  weaponias?: ArmorLarge;
  chd?: ArmorLarge;
  chc?: ChcLarge;
  damage_witchdoctor_decay?: ArmorLarge;
  dura?: Dregsoflies1 | string;
  ethereal_paragon?: ArmorLarge;
  extra_passive?: RequiredExtraPassive;
  wpnarc?: BlockamountShield;
  damage_witchdoctor_secondary?: ArmorLarge;
  cdr?: ChcLarge;
  manapercrit?: ArmorLarge;
  pickup?: ArmorLarge;
  ethereal_speed?: Dregsoflies1;
  wpnphy?: BlockamountShield;
  damage_witchdoctor_voodoo?: ArmorLarge;
  ethereal_globe?: ArmorLarge;
  wpnhol?: BlockamountShield;
  str?: ArmorLarge;
  damage_crusader?: ArmorLarge;
  wpnlit?: BlockamountShield;
  lph?: ArmorLarge;
  wrathregen?: ChcLarge;
  ethereal_steedcharge?: Dregsoflies1;
  dmghol?: ArmorLarge;
  damage_undead?: ArmorLarge;
  damage_demons?: ArmorLarge;
  lvlreq?: ArmorLarge;
  dex?: ArmorLarge;
  damage_monk?: ArmorLarge;
  ethereal_damage?: Dregsoflies1;
  resall?: ArmorLarge;
  spiritpercrit?: ArmorLarge;
  rcr?: ChcLarge;
  hitfreeze?: ChcLarge;
  ethereal_dmgred?: ArmorLarge;
  dmgpsn?: ArmorLarge;
  armor?: ArmorLarge;
  damage_necromancer?: ArmorLarge;
  hitslow?: ChcLarge;
  life?: ArmorLarge;
  ethereal_fear?: ArmorLarge;
  maxessence?: ArmorLarge;
  wpncol?: BlockamountShield;
  damage_demonhunter?: ArmorLarge;
  ethereal_frozen?: Dregsoflies1;
  area?: ArmorLarge;
  ethereal_movespeed?: ArmorLarge;
  ms?: ArmorLarge;
  hitknockback?: ChcLarge;
  damage_demonhunter_archery?: ArmorLarge;
  maxdisc?: ArmorLarge;
  damage_barbarian?: ArmorLarge;
  allstats?: ArmorLarge;
  wpnfir?: BlockamountShield;
  edmg?: ArmorLarge;
  dmgcol?: ArmorLarge;
  dmgfir?: ChcLarge | Elemental;
  dmglit?: ChcLarge;
  dmgarc?: ChcLarge;
  damage_wizard?: ArmorLarge;
  apregen?: ChcLarge;
  vit?: ArmorLarge;
  apoc?: ArmorLarge;
  maxap?: ArmorLarge;
  colddef?: ArmorLarge;
  expmul?: ArmorLarge;
  mf?: ArmorLarge;
  ias?: ChcLarge;
  edef?: ArmorLarge;
  block?: ArmorLarge;
  ccr?: ArmorLarge;
  respsn?: ChcLarge;
  firetaken?: ArmorLarge;
  skill_monk_lashingtailkick?: ArmorLarge;
  rangedef?: Rangedef;
  baseblock?: ArmorLarge;
  skill_witchdoctor_sacrifice?: ChcLarge;
  skill_wizard_teleport_cooldown?: ArmorLarge;
  damage_beasts?: ArmorLarge;
  damage_humans?: ArmorLarge;
  skill_barbarian_weaponthrow?: ArmorLarge;
  skill_barbarian_ancientspear?: ArmorLarge;
  gf?: ArmorLarge | string;
  skill_witchdoctor_massconfusion_cooldown?: ArmorLarge;
  hitstun?: ChcLarge;
  skill_wizard_spectralblade?: ArmorLarge;
  skill_wizard_disintegrate?: ArmorLarge;
  thorns?: ArmorLarge;
  wpnphy1?: ArmorLarge;
  lifefury?: ArmorLarge;
  reslit?: ChcLarge;
  basearmor?: string;
  skill_barbarian_avalanche?: ArmorLarge;
  skill_monk_sweepingwind?: ArmorLarge;
}

export interface PurpleCustom {
  id?: string;
  name?: string;
  format?: string;
  min?: number;
  max?: number;
  args?: number;
  follower?: boolean | string;
  options?: string[];
  best?: Best;
  step?: number;
  altformat?: string;
  cube?: boolean;
}

export enum Best {
  Min = "min",
}

export interface RequiredExtraPassive {
  exclude?: string[];
}

export interface Rangedef {
  min: number;
  max: number;
  step: string;
}

export interface BlockamountShield {
  min: number;
  max: number;
  min2: number;
  max2: number;
}

export interface LegendaryGems {
  powerful: Enforcer;
  trapped: Boyarsky;
  hoarder: Boyarsky;
  enforcer: Enforcer;
  esoteric: Boyarsky;
  ease: Ease;
  toxin: Boyarsky;
  gogok: Enforcer;
  invigorating: Enforcer;
  mirinae: Enforcer;
  gizzard: Ease;
  moratorium: Enforcer;
  pain: Enforcer;
  simplicity: Enforcer;
  taeguk: Enforcer;
  wreath: Boyarsky;
  zei: Enforcer;
  stricken: Enforcer;
  iceblink: Boyarsky;
  mutilation: Boyarsky;
  boyarsky: Boyarsky;
  soulshard: Enforcer;
  legacyofdreams: Enforcer;
}

export interface Boyarsky {
  id: string;
  name: string;
  types: SocketType[];
  effects: Effect[];
  maxlevel?: number;
  ids?: string[];
}

export interface Ease {
  id: string;
  name: string;
  types: string[];
  effects: Effect[];
}

export interface Enforcer {
  id: string;
  name: string;
  types: SocketType[];
  effects: Effect[];
  maxlevel?: number;
}

export interface MetaSlots {
  finger: Finger;
  onehand: Hand;
  twohand: Hand;
  custom: CustomwpnClass;
  customwpn: CustomwpnClass;
}

export interface CustomwpnClass {
  name: string;
  slots: string[];
}

export interface Finger {
  name: string;
  slots: string[];
  affixes: NeckAffixes;
  socketType: string;
}

export interface Hand {
  name: string;
  slots: string[];
  affixes: OnehandAffixes;
  preset: string[];
  socketType: string;
}

export interface OnehandAffixes {
  damage: string;
  mainstat: string;
  vit: string;
  weaponias: Ias;
  edmg: string;
  cdr: string;
  rcr: string;
  lph: string;
  bleed: string;
  area: string;
  sockets: string;
  laek: string;
  expadd: string;
  onhit: string;
  dura: string;
  lvlreq: string;
}

export interface Passives {
  barbarian: { [key: string]: PassivesBarbarian };
  crusader: { [key: string]: PassivesBarbarian };
  demonhunter: { [key: string]: PassivesBarbarian };
  monk: { [key: string]: PassivesBarbarian };
  necromancer: { [key: string]: PassivesBarbarian };
  witchdoctor: { [key: string]: PassivesBarbarian };
  wizard: { [key: string]: PassivesBarbarian };
}

export interface PassivesBarbarian {
  id: string;
  name: string;
  index: number;
  oldid?: string;
}

export interface Passivetips {
  barbarian: PassivetipsBarbarian;
  crusader: PassivetipsCrusader;
  demonhunter: PassivetipsDemonhunter;
  monk: PassivetipsMonk;
  necromancer: PassivetipsNecromancer;
  witchdoctor: PassivetipsWitchdoctor;
  wizard: PassivetipsWizard;
}

export interface PassivetipsBarbarian {
  animosity: string;
  berserkerrage: string;
  bloodthirst: string;
  boonofbulkathos: string;
  brawler: string;
  earthenmight: string;
  inspiringpresence: string;
  juggernaut: string;
  nervesofsteel: string;
  noescape: string;
  poundofflesh: string;
  rampage: string;
  relentless: string;
  ruthless: string;
  superstition: string;
  swordandboard: string;
  toughasnails: string;
  unforgiving: string;
  weaponsmaster: string;
}

export interface PassivetipsCrusader {
  blunt: string;
  divinefortress: string;
  fanaticism: string;
  fervor: string;
  finery: string;
  heavenlystrength: string;
  holdyourground: string;
  holycause: string;
  indestructible: string;
  insurmountable: string;
  ironmaiden: string;
  longarmofthelaw: string;
  lordcommander: string;
  renewal: string;
  righteousness: string;
  toweringshield: string;
  vigilant: string;
  wrathful: string;
}

export interface PassivetipsDemonhunter {
  ambush: string;
  archery: string;
  awareness: string;
  ballistics: string;
  bloodvengeance: string;
  brooding: string;
  culltheweak: string;
  customengineering: string;
  grenadier: string;
  hotpursuit: string;
  leech: string;
  nightstalker: string;
  numbingtraps: string;
  perfectionist: string;
  sharpshooter: string;
  singleout: string;
  steadyaim: string;
  tacticaladvantage: string;
  thrillofthehunt: string;
}

export interface PassivetipsMonk {
  alacrity: string;
  beaconofytar: string;
  chantofresonance: string;
  combinationstrike: string;
  determination: string;
  exaltedsoul: string;
  fleetfooted: string;
  harmony: string;
  momentum: string;
  mythicrhythm: string;
  neardeathexperience: string;
  relentlessassault: string;
  resolve: string;
  seizetheinitiative: string;
  sixthsense: string;
  theguardianspath: string;
  transcendence: string;
  unity: string;
}

export interface PassivetipsNecromancer {
  aberrantanimator: string;
  bloodforblood: string;
  bloodispower: string;
  boneprison: string;
  commanderoftherisendead: string;
  darkreaping: string;
  drawlife: string;
  eternaltorment: string;
  extendedservitude: string;
  finalservice: string;
  fueledbydeath: string;
  grislytribute: string;
  lifefromdeath: string;
  overwhelmingessence: string;
  rathmasshield: string;
  rigormortis: string;
  serration: string;
  spreadingmalediction: string;
  standalone: string;
  swiftharvesting: string;
}

export interface PassivetipsWitchdoctor {
  badmedicine: string;
  bloodritual: string;
  circleoflife: string;
  confidenceritual: string;
  creepingdeath: string;
  fetishsycophants: string;
  fierceloyalty: string;
  graveinjustice: string;
  gruesomefeast: string;
  junglefortitude: string;
  midnightfeast: string;
  piercetheveil: string;
  rushofessence: string;
  spiritualattunement: string;
  spiritvessel: string;
  swamplandattunement: string;
  tribalrites: string;
  visionquest: string;
  zombiehandler: string;
}

export interface PassivetipsWizard {
  arcanedynamo: string;
  astralpresence: string;
  audacity: string;
  blur: string;
  coldblooded: string;
  conflagration: string;
  dominance: string;
  elementalexposure: string;
  evocation: string;
  galvanizingward: string;
  glasscannon: string;
  illusionist: string;
  paralysis: string;
  powerhungry: string;
  prodigy: string;
  temporalflux: string;
  unstableanomaly: string;
  unwaveringwill: string;
}

export interface Potion {
  id: string;
  name: string;
  type: PotionType;
  quality: Quality;
  required: PotionRequired;
}

export interface PotionRequired {
  custom: FluffyCustom;
}

export interface FluffyCustom {
  id: string;
  name: string;
  format: string;
  min?: number;
  max?: number;
  args?: number;
}

export enum PotionType {
  Potion = "potion",
}

export interface Qualities {
  normal: Epic;
  magic: Epic;
  rare: Epic;
  legendary: SetClass;
  set: SetClass;
  epic: Epic;
  unique: Epic;
  ethereal: Epic;
}

export interface Epic {
  prefix: string;
  color: string;
}

export interface SetClass {
  prefix: string;
  color: string;
  ancient: string;
  primal: string;
}

export interface Resources {
  ap: string;
  hatred: string;
  disc: string;
  mana: string;
  fury: string;
  spirit: string;
  wrath: string;
  essence: string;
}

export interface ShrineBuff {
  name: string;
  altname: string;
  icon: number;
  description: string[];
}

export interface Skillcat {
  barbarian: SkillcatBarbarian;
  crusader: SkillcatCrusader;
  demonhunter: SkillcatDemonhunter;
  monk: SkillcatMonk;
  necromancer: SkillcatNecromancer;
  witchdoctor: SkillcatWitchdoctor;
  wizard: SkillcatWizard;
}

export interface SkillcatBarbarian {
  primary: string;
  secondary: string;
  defensive: string;
  might: string;
  tactics: string;
  rage: string;
}

export interface SkillcatCrusader {
  primary: string;
  secondary: string;
  defensive: string;
  utility: string;
  laws: string;
  conviction: string;
}

export interface SkillcatDemonhunter {
  primary: string;
  secondary: string;
  defensive: string;
  hunting: string;
  devices: string;
  archery: string;
}

export interface SkillcatMonk {
  primary: string;
  secondary: string;
  defensive: string;
  techniques: string;
  focus: string;
  mantras: string;
}

export interface SkillcatNecromancer {
  primary: string;
  secondary: string;
  corpses: string;
  reanimation: string;
  curses: string;
  bloodbone: string;
}

export interface SkillcatWitchdoctor {
  primary: string;
  secondary: string;
  defensive: string;
  terror: string;
  decay: string;
  voodoo: string;
}

export interface SkillcatWizard {
  primary: string;
  secondary: string;
  defensive: string;
  force: string;
  conjuration: string;
  mastery: string;
}

export interface Skills {
  barbarian: { [key: string]: SkillsBarbarian };
  crusader: { [key: string]: SkillsBarbarian };
  demonhunter: { [key: string]: SkillsBarbarian };
  monk: { [key: string]: SkillsBarbarian };
  necromancer: { [key: string]: SkillsBarbarian };
  witchdoctor: { [key: string]: SkillsBarbarian };
  wizard: { [key: string]: SkillsBarbarian };
  attack: AttackClass;
}

export interface AttackClass {
  hand: HandClass;
  melee: HandClass;
  bow: HandClass;
  wand: HandClass;
}

export interface HandClass {
  id: string;
  name: string;
  info: Info;
  tip: string;
}

export interface Info {
  Damage: Damage;
}

export interface Damage {
  coeff: number;
}

export interface SkillsBarbarian {
  id: string;
  name: string;
  category: string;
  row: number;
  col: number;
  runes: Runes;
  range?: RangeClass | number;
  weapon?: string;
  nolmb?: boolean;
  exclusive?: string;
  oldid?: string;
}

export interface RangeClass {
  x?: number;
  b?: number;
  d?: number;
  a?: number;
  c?: number;
  e?: number;
}

export interface Runes {
  d: string;
  a: string;
  c: string;
  b: string;
  e: string;
}

export interface Skilltips {
  barbarian: { [key: string]: ElementsValue };
  crusader: { [key: string]: ElementsValue };
  demonhunter: { [key: string]: ElementsValue };
  monk: { [key: string]: ElementsValue };
  necromancer: { [key: string]: ElementsValue };
  witchdoctor: { [key: string]: ElementsValue };
  wizard: { [key: string]: ElementsValue };
}

export interface ElementsValue {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  elements?: ElementsValue;
  icon?: number;
  x: string;
}

export interface StatGroupNames {
  weapon: string;
  elemental: string;
  resist: string;
  resistany: string;
  mainstat: string;
  onhit: string;
  resource: string;
}

export interface StatLimits {
  rare: RareClass;
  legendary: RareClass;
  ancient: Ancient;
}

export interface Ancient {
  sockets1: ArmorLarge;
  sockets2: ArmorLarge;
  sockets3: ArmorLarge;
  sockets4: ArmorLarge;
  sockets5: ArmorLarge;
  sockets6: ArmorLarge;
  attrLarge: ArmorLarge;
  attrSmall: ArmorLarge;
  attrVeryLarge: ArmorLarge;
  armorSmall: ArmorLarge;
  armorMedium: ArmorLarge;
  armorLarge: ArmorLarge;
  resistAll: ArmorLarge;
  resistSingle: ArmorLarge;
  regenSmall: ArmorLarge;
  regenLarge: ArmorLarge;
  lphSmall: ArmorLarge;
  lphLarge: ArmorLarge;
  lphVeryLarge: ArmorLarge;
  damageJewelry: BlockamountShield;
  damageOffhand: BlockamountShield;
  thornsSmall: ArmorLarge;
  thornsLarge: ArmorLarge;
  healbonusNormal: ArmorLarge;
  expaddNormal: ArmorLarge;
  lvlNormal: ArmorLarge;
  laekSmall: ArmorLarge;
  laekLarge: ArmorLarge;
  laekVeryLarge: ArmorLarge;
  damage1HNormal: BlockamountShield;
  damage1HFast: BlockamountShield;
  damage2H: BlockamountShield;
  lifefuryNormal: ArmorLarge;
  lifefuryLarge: ArmorLarge;
  lifewrathNormal: ArmorLarge;
  lifewrathLarge: ArmorLarge;
  lifespiritNormal: ArmorLarge;
  lifespiritLarge: ArmorLarge;
  blockamountShield: BlockamountShield;
}

export interface RareClass {
  attrLarge: ArmorLarge;
  attrSmall: ArmorLarge;
  attrVeryLarge: ArmorLarge;
  armorSmall: ArmorLarge;
  armorMedium: ArmorLarge;
  armorLarge: ArmorLarge;
  resistAll: ArmorLarge;
  resistSingle: ArmorLarge;
  lifeSmall: ArmorLarge;
  lifeMedium: ArmorLarge;
  lifeLarge: ArmorLarge;
  iasNormal: ArmorLarge;
  iasQuiver: ArmorLarge;
  chcSmall: ChcLarge;
  chcLarge: ChcLarge;
  chdSmall: ArmorLarge;
  chdLarge: ArmorLarge;
  cdrSmall: ArmorLarge;
  rcrSmall: ArmorLarge;
  cdrLarge: ArmorLarge;
  rcrLarge: ArmorLarge;
  edmgSmall: ArmorLarge;
  edmgLarge: ArmorLarge;
  sockets1: ArmorLarge;
  sockets2: ArmorLarge;
  sockets3: ArmorLarge;
  sockets4: ArmorLarge;
  sockets5: ArmorLarge;
  sockets6: ArmorLarge;
  pickupNormal: ArmorLarge;
  regenSmall: ArmorLarge;
  regenLarge: ArmorLarge;
  lphSmall: ArmorLarge;
  lphLarge: ArmorLarge;
  lphVeryLarge: ArmorLarge;
  damageJewelry: BlockamountShield;
  damageOffhand: BlockamountShield;
  elementalDamage: ArmorLarge;
  areaSmall: ArmorLarge;
  areaLarge: ArmorLarge;
  gfSmall: ArmorLarge;
  gfLarge: ArmorLarge;
  thornsSmall: ArmorLarge;
  thornsLarge: ArmorLarge;
  healbonusNormal: ArmorLarge;
  skillNormal: ArmorLarge;
  expaddNormal: ArmorLarge;
  ccrNormal: ArmorLarge;
  onhitSmall: ChcLarge;
  onhitLarge: ChcLarge;
  lvlNormal: ArmorLarge;
  one: ArmorLarge;
  blockShield: ArmorLarge;
  blockRelic: ArmorLarge;
  laekSmall: ArmorLarge;
  laekLarge: ArmorLarge;
  laekVeryLarge: ArmorLarge;
  apocNormal: ArmorLarge;
  manaregenNormal: ArmorLarge;
  maxapNormal: ArmorLarge;
  maxmanaNormal: ArmorLarge;
  lifespiritNormal: ArmorLarge;
  lifespiritLarge: ArmorLarge;
  spiritregenNormal: ChcLarge;
  spiritregenLarge: ChcLarge;
  maxspiritNormal: ArmorLarge;
  maxspiritLarge: ArmorLarge;
  lifefuryNormal: ArmorLarge;
  lifefuryLarge: ArmorLarge;
  maxfuryNormal: ArmorLarge;
  maxfuryLarge: ArmorLarge;
  lifewrathNormal: ArmorLarge;
  lifewrathLarge: ArmorLarge;
  wrathregenNormal: ChcLarge;
  wrathregenLarge: ChcLarge;
  maxwrathNormal: ArmorLarge;
  maxwrathLarge: ArmorLarge;
  maxessenceNormal: ArmorLarge;
  maxessenceLarge: ArmorLarge;
  hatredregenNormal: ChcLarge;
  maxdiscNormal: ArmorLarge;
  bleedNormal: BlockamountShield;
  defNormal: ArmorLarge;
  edefNormal: ArmorLarge;
  msNormal: ArmorLarge;
  damagePercentNormal: ArmorLarge;
  damage1HNormal: BlockamountShield;
  damage1HFast: BlockamountShield;
  damage2H: BlockamountShield;
  basearmorHead: ArmorLarge;
  basearmorShoulders: ArmorLarge;
  basearmorTorso: ArmorLarge;
  basearmorWaist: ArmorLarge;
  basearmorHands: ArmorLarge;
  basearmorWrists: ArmorLarge;
  basearmorLegs: ArmorLarge;
  basearmorFeet: ArmorLarge;
  basearmorShield: ArmorLarge;
  basearmorCrusaderShield: ArmorLarge;
  basearmorMightyBelt: ArmorLarge;
  baseblockShield: ArmorLarge;
  blockamountShield: BlockamountShield;
  any: Any;
}

export interface Any {
  step: string;
}

export interface StatList {
  primary: Primary;
  secondary: Secondary;
}

export interface Primary {
  "Caldesann's Despair": string[];
  Sockets: string[];
  "Weapon Damage": string[];
  Attributes: string[];
  Defensive: string[];
  Life: string[];
  Offensive: string[];
  Elemental: string[];
  Resource: string[];
  "Skill Damage": string[];
  Misc: string[];
}

export interface Secondary {
  Resistance: string[];
  Resource: string[];
  Defensive: string[];
  Life: string[];
  "Chance on Hit": string[];
  Misc: string[];
}

export interface Stats {
  basearmor: Basearmor;
  baseblock: Apoc;
  blockamount: Blockamount;
  wpnphy: Wpn;
  wpnphy1: Wpnphy1;
  wpnfir: Wpn;
  wpncol: Wpn;
  wpnpsn: Wpn;
  wpnarc: Wpn;
  wpnlit: Wpn;
  wpnhol: Wpn;
  dmgphy: Apoc;
  dmgfir: Dmg;
  dmgcol: Dmg;
  dmgpsn: Apoc;
  dmgarc: Dmg;
  dmglit: Dmg;
  dmghol: Dmg;
  damage: Apoc;
  dmgmul: Apoc;
  dmgtaken: Dmgtaken;
  chctaken: Allstats;
  chctaken_percent: Allstats;
  str: Dex;
  dex: Dex;
  int: Dex;
  str_percent: Allstats;
  dex_percent: Allstats;
  int_percent: Allstats;
  vit: Armor;
  weaponias: Ccr;
  weaponaps: Allstats;
  resall: Armor;
  life: Apoc;
  ias: Apoc;
  chd: Apoc;
  chc: Apoc;
  edmg: Ccr;
  bossdmg: Allstats;
  area: Apoc;
  extrachc: Allstats;
  armor: Armor;
  armor_percent: Allstats;
  resist_percent: Allstats;
  dmgred: Apoc;
  dodge: Dodge;
  edmgred: Dodge;
  block: Apoc;
  block_percent: Allstats;
  extra_block: Allstats;
  edef: Ccr;
  regen: Apoc;
  regen_bonus: Allstats;
  regen_percent: Allstats;
  lph: Armor;
  damage_barbarian: DamageBarbarian;
  damage_crusader: DamageBarbarian;
  damage_demonhunter: DamageBarbarian;
  damage_monk: DamageBarbarian;
  damage_necromancer: DamageBarbarian;
  damage_witchdoctor: DamageBarbarian;
  damage_wizard: DamageBarbarian;
  cdr: Ccr;
  rcr: Apoc;
  rcr_ap: Rcr;
  rcr_hatred: Rcr;
  rcr_disc: Rcr;
  rcr_mana: Rcr;
  rcr_fury: Rcr;
  rcr_wrath: Rcr;
  rcr_spirit: Rcr;
  rcr_essence: Rcr;
  firetaken: Apoc;
  colddef: Apoc;
  nonphys: Dodge;
  resourcegen: Allstats;
  apregen: Apoc;
  apoc: Apoc;
  hatredregen: Apoc;
  discregen: Apoc;
  manaregen: Apoc;
  manaregen_percent: Percent;
  lifespirit: Apoc;
  spiritregen: Apoc;
  spiritpercrit: Apoc;
  lifefury: Apoc;
  furyregen: Apoc;
  lifewrath: Apoc;
  wrathregen: Apoc;
  manaperkill: Apoc;
  manapercrit: Apoc;
  essenceregen: Apoc;
  ms: Apoc;
  extrams: Allstats;
  bleed: Bleed;
  skill_wizard_teleport_cooldown: Apoc;
  skill_witchdoctor_wallofdeath_cooldown: Apoc;
  skill_witchdoctor_massconfusion_cooldown: Apoc;
  skill_monk_sweepingwind_cost: Apoc;
  skill_monk_cyclonestrike_cost: Apoc;
  resphy: Apoc;
  resfir: Apoc;
  rescol: Apoc;
  respsn: Apoc;
  resarc: Apoc;
  reslit: Apoc;
  resphy_percent: Allstats;
  resfir_percent: Allstats;
  rescol_percent: Allstats;
  respsn_percent: Allstats;
  resarc_percent: Allstats;
  reslit_percent: Allstats;
  maxap: Apoc;
  maxhatred: Apoc;
  maxdisc: Apoc;
  maxmana: Apoc;
  maxmana_percent: Percent;
  maxspirit: Apoc;
  maxfury: Apoc;
  maxwrath: Apoc;
  maxessence: Apoc;
  maxessence_percent: Percent;
  damage_demons: Ccr;
  damage_beasts: Ccr;
  damage_humans: Ccr;
  damage_undead: Apoc;
  rangedef: Apoc;
  meleedef: Apoc;
  gf: Apoc;
  mf: Apoc;
  laek: Apoc;
  firethorns: Apoc;
  thorns: Apoc;
  ccr: Ccr;
  expmul: Apoc;
  expadd: Apoc;
  pickup: Apoc;
  lvlreq: Apoc;
  dura: Ccr;
  healbonus: Apoc;
  hitfear: Apoc;
  hitstun: Apoc;
  hitblind: Apoc;
  hitfreeze: Apoc;
  hitchill: Apoc;
  hitslow: Apoc;
  hitimmobilize: Apoc;
  hitknockback: Apoc;
  caldesanns_str: Caldesanns;
  caldesanns_dex: Caldesanns;
  caldesanns_int: Caldesanns;
  caldesanns_vit: Caldesanns;
  petias: Allstats;
  rcrint: Allstats;
  damage_demonhunter_archery: DamageDemonhunterArchery;
  damage_witchdoctor_secondary: DamageDemonhunterArchery;
  damage_witchdoctor_decay: DamageDemonhunterArchery;
  damage_witchdoctor_voodoo: DamageDemonhunterArchery;
  allstats: Allstats;
  ethereal_paragon: DamageDemonhunterArchery;
  ethereal_speed: DamageDemonhunterArchery;
  ethereal_damage: DamageDemonhunterArchery;
  ethereal_globe: DamageDemonhunterArchery;
  ethereal_fear: DamageDemonhunterArchery;
  ethereal_dmgred: DamageDemonhunterArchery;
  ethereal_movespeed: DamageDemonhunterArchery;
  ethereal_frozen: DamageDemonhunterArchery;
  ethereal_steedcharge: DamageDemonhunterArchery;
  custom: StatsCustom;
  sockets: DamageBarbarian;
  sliverofterror_1: DamageDemonhunterArchery;
  sliverofterror_2: DamageDemonhunterArchery;
  sliverofterror_3: DamageDemonhunterArchery;
  shardofhatred_1: DamageDemonhunterArchery;
  shardofhatred_2: DamageDemonhunterArchery;
  shardofhatred_3: DamageDemonhunterArchery;
  fragmentofdestruction_1: DamageDemonhunterArchery;
  fragmentofdestruction_2: DamageDemonhunterArchery;
  fragmentofdestruction_3: DamageDemonhunterArchery;
  stainofsin_1: DamageDemonhunterArchery;
  stainofsin_2: DamageDemonhunterArchery;
  stainofsin_3: DamageDemonhunterArchery;
  essenceofanguish_1: DamageDemonhunterArchery;
  essenceofanguish_2: DamageDemonhunterArchery;
  essenceofanguish_3: DamageDemonhunterArchery;
  dregsoflies_1: DamageDemonhunterArchery;
  dregsoflies_2: DamageDemonhunterArchery;
  dregsoflies_3: DamageDemonhunterArchery;
  remnantofpain_1: DamageDemonhunterArchery;
  remnantofpain_2: DamageDemonhunterArchery;
  remnantofpain_3: DamageDemonhunterArchery;
  extra_passive: StatsExtraPassive;
}

export interface Allstats {
  name: string;
}

export interface Apoc {
  name: string;
  format?: string;
  class?: ItemPowerClassValue;
  utility?: boolean;
  id?: string;
  percent?: boolean;
  base?: boolean;
  dr?: boolean;
  special?: boolean;
  secondary?: boolean;
  mult?: boolean;
  classes?: ItemPowerClassValue[];
  elemental?: string;
  srcs?: string[];
  resist?: boolean;
}

export interface Armor {
  name: string;
  id: string;
}

export interface Basearmor {
  name: string;
  base: boolean;
}

export interface Bleed {
  name: string;
  format: string;
  args: number;
  argnames: string[];
  utility: boolean;
  dr: boolean;
  id: string;
}

export interface Blockamount {
  name: string;
  format: string;
  args: number;
  base: boolean;
  id: string;
  src: string[];
  srctype: string;
}

export interface Caldesanns {
  name: string;
  format: string;
  classes?: ItemPowerClassValue[];
  caldesanns: boolean;
}

export interface Ccr {
  name: string;
  format: string;
  dr?: boolean;
  secondary?: boolean;
  utility?: boolean;
  id: string;
  percent?: boolean;
  args?: number;
}

export interface StatsCustom {
  name: string;
  args: number;
  secondary: boolean;
  legendary: boolean;
}

export interface DamageBarbarian {
  name: string;
  format: string;
}

export interface DamageDemonhunterArchery {
  name: string;
  format: string;
  affix: boolean;
  args?: number;
  shard?: boolean;
}

export interface Dex {
  name: string;
  classes: ItemPowerClassValue[];
  id: string;
}

export interface Dmg {
  name: string;
  format: string;
  classes: ItemPowerClassValue[];
  utility: boolean;
  elemental: string;
  id: string;
  percent: boolean;
}

export interface Dmgtaken {
  name: string;
  special: boolean;
}

export interface Dodge {
  name: string;
  dr: boolean;
}

export interface StatsExtraPassive {
  name: string;
  format: string;
  args: number;
  secondary: boolean;
  legendary: boolean;
  affix: boolean;
}

export interface Percent {
  name: string;
  class: ItemPowerClassValue;
}

export interface Rcr {
  name: string;
  dr: boolean;
  class: ItemPowerClassValue;
}

export interface Wpn {
  name: string;
  args: number;
  elemental?: string;
  damage: boolean;
  elem: string;
  id: string;
  src?: string[];
  srctype: string;
  format?: string;
  srcs?: Array<string[]>;
}

export interface Wpnphy1 {
  name: string;
  format: string;
  args: number;
  damage: boolean;
  elem: string;
}
