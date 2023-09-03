// Importing
import React, {useState, createContext} from 'react';
import {LightThemeColors, DarkThemeColors} from '../config/Colors';

const themeProps = {
  lightTheme: {
    black: LightThemeColors.black,
    lightYellow: LightThemeColors.lightYellow,
    darkYellow: LightThemeColors.darkYellow,
    white: LightThemeColors.white,
    accentLightest: LightThemeColors.accentLightest,
    textHighContrast: LightThemeColors.textHighContrast,
    textLowContrast: LightThemeColors.textLowContrast,
  },
  darkTheme: {
    black: DarkThemeColors.black,
    lightYellow: DarkThemeColors.lightYellow,
    darkYellow: DarkThemeColors.darkYellow,
    white: DarkThemeColors.white,
    accentLightest: LightThemeColors.accentLightest,
    textHighContrast: DarkThemeColors.textHighContrast,
    textLowContrast: DarkThemeColors.textLowContrast,
  },
  isLightTheme: false,
};

const ThemeContext = createContext(themeProps);

// Exporting context provider to provide it's values & methods globally
const ThemeContextProvider = ({children}) => {
  // Local state
  const [theme, setTheme] = useState(themeProps);

  // Toggling theme mode(Light/Dark)
  const toggleTheme = () => {
    // Updating local state
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };

  // Returning context provider
  return (
    <ThemeContext.Provider value={{...theme, toggleTheme: toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };