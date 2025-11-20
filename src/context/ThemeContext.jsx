import { createContext, useState, useEffect } from "react";
import { colorPalettes, darkPalette } from "../themes/theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPalette, setCurrentPalette] = useState(0);
  const [previousPalette, setPreviousPalette] = useState(0);

  const applyPalette = (paletteObj) => {
    Object.entries(paletteObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  const setColourPalette = (index) => {
    setCurrentPalette(index);

    if (darkMode) {
      setPreviousPalette(index);
      return;
    }
    applyPalette(colorPalettes[index]);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const nextMode = !prev;

      if (nextMode) {
        setPreviousPalette(currentPalette);
      } else {
        applyPalette(colorPalettes[previousPalette]);
      }

      return nextMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      applyPalette(darkPalette);
    } else {
      applyPalette(colorPalettes[currentPalette]);
    }

    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode, currentPalette]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        colorPalettes,
        setColourPalette,
        currentPalette,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
