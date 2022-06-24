export interface BuildData {
  profiles: Profile[];
  curstat: string;
  class: string;
  mainset: string;
  active: Active;
  name: string;
  activeProfile: number;
}

export interface Active {
  pain: Array<number[]>;
  stricken: Array<number[] | number>;
  leg_odysseysend: number[];
  leg_conventionofelements: number[];
  leg_wrapsofclarity_p6: number[];
  leg_squirtsnecklace: Array<number[]>;
  fanofknives: number[];
  sentry: Array<number[] | number>;
  vengeance: number[];
  moreWarnings: boolean;
  limitStats: boolean;
  hideCrossClass: boolean;
  hideLegacy: boolean;
  showElites: boolean;
  targetBoss: boolean;
  targetType: string;
  zei: Array<number[] | number>;
}

export interface Profile {
  name: string;
  skills: Array<string[]> | any;
  passives: string[];
  kanai: Kanai;
  paragon: Paragon;
  class: string;
  seasonal: number;
  gender: string;
  items: Items;
  active: any[];
  statPriority: StatPriority[];
  follower: null | string;
  followerItems: any[] | FollowerItemsClass;
  followerSkills: Array<FollowerSkill | null>;
  mainset: string;
  buildinfo: Buildinfo;
  values: Values;
}

export interface Buildinfo {
  ratings: Ratings;
  text: string;
}

export interface Ratings {
  show: boolean;
}

export interface FollowerItemsClass {
  feet: ShouldersClass;
  legs: FollowerItemsLegs;
  waist: ShouldersClass;
  torso: FollowerItemsTorso;
  head: FollowerItemsHead;
  shoulders: ShouldersClass;
  hands: WristsClass;
  neck: FollowerItemsNeck;
  wrists: WristsClass;
  rightfinger: Tfinger;
  leftfinger: Tfinger;
  follower: Follower;
  mainhand: FollowerItemsMainhand;
}

export interface ShouldersClass {
  id: string;
  stats: { [key: string]: number[] };
  ancient: boolean;
  empty?: number;
}

export interface Follower {
  id: string;
  stats: FollowerStats;
  ancient: boolean;
  empty: number;
}

export interface FollowerStats {
  custom: any[];
  dex?: number[];
  int?: number[];
  resall?: number[];
  lph?: number[];
  vit?: number[];
}

export interface WristsClass {
  id: ID;
  stats: HandsStats;
  ancient: boolean;
  empty?: number;
}

export enum ID {
  P66UniqueGloves015 = "P66_Unique_Gloves_015",
  UniqueBracer106_X1 = "Unique_Bracer_106_x1",
  UniqueGloves103_X1 = "Unique_Gloves_103_x1",
}

export interface HandsStats {
  basearmor: number[];
  lph?: number[];
  ias?: number[];
  dex?: number[];
  int?: number[];
  custom?: any[];
  vit?: number[];
  armor?: number[];
}

export interface FollowerItemsHead {
  id: string;
  stats: PurpleStats;
  ancient: boolean;
  gems: Array<Array<number | string>>;
  empty: number;
}

export interface PurpleStats {
  dex?: number[];
  hitblind?: number[];
  basearmor: number[];
  sockets: number[];
  int?: number[];
  vit?: number[];
  lph?: number[];
}

export interface Tfinger {
  id: string;
  stats: LeftfingerStats;
  ancient: boolean;
  empty: number;
  gems: Array<Array<PurpleGem | number>>;
}

export enum PurpleGem {
  Emerald = "emerald",
  Esoteric = "esoteric",
  Mutilation = "mutilation",
}

export interface LeftfingerStats {
  dex?: number[];
  edmg?: number[];
  custom: number[];
  ias: number[];
  sockets: number[];
  int?: number[];
  vit?: number[];
  gf?: number[];
}

export interface FollowerItemsLegs {
  id: string;
  stats: FluffyStats;
  ancient: boolean;
  empty: number;
  gems: Array<Array<FluffyGem | number>>;
}

export enum FluffyGem {
  Emerald = "emerald",
  Topaz = "topaz",
}

export interface FluffyStats {
  basearmor: number[];
  sockets: number[];
  dex?: number[];
  int?: number[];
  vit?: number[];
  armor?: number[];
}

export interface FollowerItemsMainhand {
  id: string;
  stats: { [key: string]: number[] };
  ancient: boolean;
  empty: number;
  gems?: Array<Array<number | string>>;
}

export interface FollowerItemsNeck {
  id: string;
  stats: TentacledStats;
  ancient: boolean;
  empty: number;
  gems: Array<Array<FluffyGem | number>>;
}

export interface TentacledStats {
  cdr: number[];
  custom: any[];
  sockets: number[];
  ias: number[];
  dex?: number[];
  int?: number[];
  life?: number[];
}

export interface FollowerItemsTorso {
  id: string;
  stats: StickyStats;
  ancient: boolean;
  gems: Array<Array<FluffyGem | number>>;
  empty: number;
}

export interface StickyStats {
  dex?: number[];
  ias?: number[];
  sockets: number[];
  basearmor: number[];
  gf: number[];
  int?: number[];
  custom?: any[];
  edef?: number[];
  life?: number[];
}

export enum FollowerSkill {
  ScoundrelAnatomy = "Scoundrel_Anatomy",
  ScoundrelDebuffCloud = "Scoundrel_DebuffCloud",
  ScoundrelPiercingShot = "Scoundrel_PiercingShot",
  ScoundrelPowerShot = "Scoundrel_PowerShot",
}

export interface Items {
  head: ItemsHead;
  shoulders: Shoulders;
  neck: ItemsNeck;
  torso: ItemsTorso;
  waist: Waist;
  hands: ItemsHands;
  wrists: Wrists;
  legs: ItemsLegs;
  feet: ItemsFeet;
  leftfinger: Leftfinger;
  rightfinger: Rightfinger;
  mainhand: ItemsMainhand;
  offhand: Offhand;
}

export interface ItemsFeet {
  id: string;
  stats: FeetStats;
  ancient: boolean;
  empty: number;
}

export interface FeetStats {
  basearmor: number[];
  dex: number[];
  vit: number[];
  resall: number[];
  armor?: number[];
  caldesanns_dex: number[];
  sockets?: number[];
}

export interface ItemsHands {
  id: string;
  stats: { [key: string]: number[] };
  ancient: boolean;
  empty: number;
}

export interface ItemsHead {
  id: string;
  stats: IndigoStats;
  ancient: boolean;
  gems: Array<Array<TentacledGem | number>>; // Gem quality
  empty: number;
}

export enum TentacledGem {
  Diamond = "diamond",
}

export interface IndigoStats {
  basearmor: number[];
  dex: number[];
  vit: number[];
  chc: number[];
  sockets: number[];
  caldesanns_dex: number[];
}

export interface Leftfinger {
  id: string;
  stats: { [key: string]: number[] };
  ancient: boolean;
  gems: Array<Array<number | string>>;
  empty?: number;
}

export interface ItemsLegs {
  id: string;
  stats: WaistStats;
  ancient: boolean;
  gems: Array<Array<TentacledGem | number>>;
  empty: number;
}

export interface WaistStats {
  basearmor: number[];
  dex: number[];
  vit?: number[];
  skill_demonhunter_hungeringarrow: number[];
  sockets?: number[];
  caldesanns_dex: number[];
  resall?: number[];
  custom?: number[];
  life?: number[];
}

export interface ItemsMainhand {
  id: string;
  stats: { [key: string]: number[] };
  ancient: boolean;
  gems: Array<Array<PurpleGem | number>>;
  empty?: number;
  merged?: Merged;
}

export interface Merged {
  rcr: boolean;
}

export interface ItemsNeck {
  id: string;
  stats: IndecentStats;
  ancient: boolean;
  empty: number;
  gems: Array<Array<number | string>>;
}

export interface IndecentStats {
  gf: number[];
  chd: number[];
  custom: any[];
  dmgcol: number[];
  chc: number[];
  sockets: number[];
  caldesanns_dex: number[];
}

export interface Offhand {
  id: string;
  stats: { [key: string]: number[] };
  ancient: boolean;
  gems?: Array<Array<PurpleGem | number>>;
  empty: number;
}

export interface Rightfinger {
  id: string;
  stats: { [key: string]: number[] };
  ancient: boolean;
  gems: Array<Array<number | string>>;
  empty: number;
}

export interface Shoulders {
  id: string;
  stats: ShouldersStats;
  ancient: boolean;
  empty: number;
}

export interface ShouldersStats {
  basearmor: number[];
  dex: number[];
  resall: number[];
  area?: number[];
  cdr: number[];
  caldesanns_dex: number[];
  rcr?: number[];
}

export interface ItemsTorso {
  id: string;
  stats: FeetStats;
  ancient: boolean;
  gems: Array<Array<TentacledGem | number>>;
  empty: number;
}

export interface Waist {
  id: string;
  stats: WaistStats;
  ancient: boolean;
  empty: number;
}

export interface Wrists {
  id: string;
  stats: HilariousStats;
  ancient: boolean;
  empty?: number;
}

export interface HilariousStats {
  basearmor: number[];
  dmgcol: number[];
  dex: number[];
  vit: number[];
  chc: number[];
  custom: number[];
  caldesanns_dex: number[];
  pickup?: number[];
}

export interface Kanai {
  weapon: string;
  armor: string;
  jewelry: string;
}

export interface Paragon {
  level: number;
  data: Array<number[]>;
}

export interface StatPriority {
  stat: Stat;
  options: any[];
  id: number;
}

export enum Stat {
  Dps = "dps",
  Sockets = "sockets",
  Toughness = "toughness",
}

export interface Values {
  damage: number;
  toughness: number;
  recovery: number;
  effdps: number;
  effdph: number;
  effedps: number;
  effedph: number;
}
