export function getItemGlowSize(itemType: string): "small" | "large" {
  if (
    itemType === "waist" ||
    itemType === "rightfinger" ||
    itemType === "leftfinger" ||
    itemType === "neck"
  ) {
    return "small";
  } else {
    return "large";
  }
}
