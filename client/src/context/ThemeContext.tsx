import React, { createContext, useCallback, useContext, useMemo } from "react";

// MUI
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  ThemeOptions,
} from "@mui/material";

// types
import { ThemeContextStates, ThemeMode } from "../@types/theme";

// theme
import createPalette from "../theme/palette";
import typography from "../theme/typography";

// custom hooks
import { useLocalStorage } from "../hooks/useLocalStorage";

// initial state
const initialState: ThemeContextStates = {
  themeMode: "light",
  theme: createTheme(),
  onThemeModeChange: () => {},
};
// create context
const ThemeContext = createContext(initialState);

function ThemeContextProvider({ children }: React.PropsWithChildren) {
  // theme mode
  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>(
    "themeMode",
    initialState.themeMode
  );

  // theme options
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: createPalette(themeMode),
      typography: typography,
    }),
    [themeMode]
  );

  // create theme
  const theme = createTheme(themeOptions);

  // toggle theme mode
  const onThemeModeChange = useCallback((mode: ThemeMode) => {
    setThemeMode(mode);
  }, []);

  // context value
  const values: ThemeContextStates = useMemo(
    () => ({
      theme,
      themeMode,
      onThemeModeChange,
    }),
    [theme, themeMode, onThemeModeChange]
  );
  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
export default ThemeContextProvider;
