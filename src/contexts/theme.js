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

const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState(themeProps);

  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };
  
  return (
    <ThemeContext.Provider value={{...theme, toggleTheme: toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeContextProvider};
