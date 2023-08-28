// Importing
import React, {useState} from 'react';
import {LightThemeColors, DarkThemeColors} from '../../config/Colors';
import {ThemeContext} from '../contexts/ThemeContext';

// Exporting context provider to provide it's values & methods globally
export const ThemeContextProvider = ({children}) => {
  // Local state
  const [theme, setTheme] = useState({
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
    isLightTheme: true,
  });

  // Toggling theme mode(Light/Dark)
  const _toggleTheme = () => {
    // Updating local state
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };

  // Returning context provider
  return (
    <ThemeContext.Provider value={{...theme, _toggleTheme: _toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
