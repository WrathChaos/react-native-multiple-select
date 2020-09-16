type ThemeColorsType = {
  [key: string]: {
    menuBarBackgroundColor: string;
    menuButtonBackgroundColor: string;
    menuItemTextColor: string;
    textColor: string;
    placeholderColor: string;
  };
};

export const ThemeColors: ThemeColorsType = {
  light: {
    menuBarBackgroundColor: "#fff",
    menuButtonBackgroundColor: "#fff",
    menuItemTextColor: "#a9aeb9",
    textColor: "#8b8ca5",
    placeholderColor: "#8b8ca5",
  },
  dark: {
    menuBarBackgroundColor: "#171920",
    menuButtonBackgroundColor: "#2b2c32",
    menuItemTextColor: "#52555b",
    textColor: "#fff",
    placeholderColor: "#ccc",
  },
};

export const DARK = "dark";
export const LIGHT = "light";
