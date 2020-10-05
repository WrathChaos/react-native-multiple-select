import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";
import { ThemeColors } from "./theme";
import { IMultiSelectDataTypes } from "./RNMultiSelect";

interface Style {
  arrowImageStyle: ImageStyle;
  buttonContainerGlue: ViewStyle;
  arrowImageContainer: ViewStyle;
  doneButtonTextStyle: TextStyle;
  checkboxContainerStyle: ViewStyle;
  menuBarItemContainerGlue: ViewStyle;
  listStyle: ViewStyle;
  spinnerContainer: ViewStyle;
}

export const _placeholderTextStyle = (
  theme: string,
  selectedItem: Array<IMultiSelectDataTypes>,
): TextStyle => ({
  height: 50,
  width: "80%",
  fontSize: 15,
  paddingLeft: 16,
  borderRadius: 16,
  fontWeight: "bold",
  backgroundColor: "#f4f6f8",
  color:
    selectedItem?.length > 0
      ? ThemeColors[theme].textColor
      : ThemeColors[theme].placeholderColor,
});

export const _menuItemContainer = (): ViewStyle => ({
  paddingLeft: 8,
});

export const _menuBarContainer = (
  theme: string,
  menuBarContainerHeight: number = 200,
  menuBarContainerWidth?: number,
): ViewStyle => ({
  borderBottomEndRadius: 16,
  borderBottomStartRadius: 16,
  height: menuBarContainerHeight,
  width: menuBarContainerWidth,
  paddingBottom: 12,
  backgroundColor: ThemeColors[theme].menuBarBackgroundColor,
});

export const _menuButtonContainer = (
  theme: string,
  height: number = 75,
  width: number = 300,
): ViewStyle => ({
  width,
  height,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  justifyContent: "center",
  backgroundColor: ThemeColors[theme].menuButtonBackgroundColor,
});

export const _imageStyle = (
  height: number = 25,
  width: number = 25,
): ImageStyle => ({
  width,
  height,
  right: 16,
});

export const _menuItemTextStyle = (theme: string): TextStyle => ({
  color: ThemeColors[theme].menuItemTextColor,
  fontWeight: "700",
});

export const _doneButtonStyle = (
  backgroundColor: string = "#2d67ff",
  shadowColor: string = "#2d67ff",
): ViewStyle => ({
  height: 50,
  width: "90%",
  marginTop: 8,
  backgroundColor,
  borderRadius: 16,
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
  shadowRadius: 8,
  shadowOpacity: 0.5,
  shadowColor,
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export default StyleSheet.create<Style>({
  buttonContainerGlue: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  arrowImageStyle: {
    width: 20,
    height: 20,
  },
  menuBarItemContainerGlue: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContainerStyle: {
    width: 250,
  },
  arrowImageContainer: {
    padding: 12,
    borderWidth: 1,
    marginLeft: 12,
    borderRadius: 16,
    borderColor: "#e6e6e7",
  },
  doneButtonTextStyle: {
    color: "#fdfdfd",
    fontWeight: "bold",
  },

  listStyle: {
    marginTop: 3,
    marginBottom: 3,
  },
  spinnerContainer: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
