import { Theme } from "@mui/material";

export type ThemeMode = "light" | "dark";

export type ThemeContextStates = {
  theme: Theme;
  themeMode: ThemeMode;
  onThemeModeChange: (mode: ThemeMode) => void;
};

export type ColorVariant =
  | "primary"
  | "info"
  | "warning"
  | "error"
  | "secondary"
  | "success";
