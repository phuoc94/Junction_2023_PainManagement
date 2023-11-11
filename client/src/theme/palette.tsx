import { alpha } from "@mui/material/styles";

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  lighter: "#6A77D6",
  light: "#3745A3",
  main: "#010F59",
  dark: "#000C4B",
  darker: "#000732",
  contrastText: "#FFFFFF",
};

const SECONDARY = {
  lighter: "#C8FACD",
  light: "#5BE584",
  main: "#5D5FEF",
  dark: "#36389A",
  darker: "#1C1E66",
  contrastText: "#FFFFFF",
};

const INFO = {
  lighter: "#FAB7D8",
  light: "#F084AF",
  main: "#EF5DA8",
  dark: "#B83E7E",
  darker: "#8A295D",
  contrastText: "#FFFFFF",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#FFFFFF",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

export const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF",
};

const common = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function createPalette(themeMode: "dark" | "light") {
  const light = {
    ...common,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: "#FFFFFF", default: "#FFFFFF", neutral: GREY[200] },
    action: {
      ...common.action,
      active: GREY[600],
    },
  } as const;

  const dark = {
    ...common,
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...common.action,
      active: GREY[500],
    },
  } as const;

  return themeMode === "light" ? light : dark;
}
