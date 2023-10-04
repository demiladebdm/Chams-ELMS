import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const COLORS = {
  colorPrimaryDark: "#15844F",
  colorPrimaryLight: "#08EAA6",
  colorSecondaryLight: "#8B8686",  
  textColorDark: "#000",
  dangerTextColor: "#F80D0D",
  dangerBtnColor: "#F80E0E",
  dangerBtnColorPrimary: "#CA1212",
  accountBackground: "#F2EEEE",
  activePointer: "#F80D0D",
  inactivePointer: "#F1D0D0",
  placeholderText: "#E1DCDC",
  
};

export const SIZES = {
  width: width,
  height: height,
};

const theme = { COLORS, SIZES };

export default theme;
