import { TempType } from "types"

const typeLabelMapping: { [key in TempType]: string } = {
  min: "最低",
  max: "最高"
};

export const tempTypeLabel = (type?: TempType) => {
  if (!type) return "";
  return typeLabelMapping[type];
};
