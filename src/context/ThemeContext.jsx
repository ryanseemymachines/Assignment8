import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };

  const setColourPalete = (colorIndex) =>{
    const color = colorPalettes[colorIndex];

    document.documentElement.style.setProperty('--color-lighter', color[0]);
    document.documentElement.style.setProperty('--color-light', color[1]);
    document.documentElement.style.setProperty('--color-main', color[2]);
    document.documentElement.style.setProperty('--color-dark', color[3]);
    document.documentElement.style.setProperty('--color-darker', color[4]);
  }

  const colorPalettes = [
    [
        "rgb(255, 235, 235)", 
        "rgb(255, 150, 150)", 
        "rgb(199, 53, 53)",   
        "rgb(180, 59, 59)",   
        "rgb(120, 30, 30)"    
    ],
    [
        "rgb(255, 245, 230)",
        "rgb(255, 200, 150)",
        "rgb(230, 120, 30)",
        "rgb(200, 95, 25)",
        "rgb(130, 55, 10)"
    ],

    [
        "rgb(255, 250, 220)",
        "rgb(255, 230, 140)",
        "rgb(230, 190, 40)",
        "rgb(190, 150, 25)",
        "rgb(120, 90, 10)"
    ],
    [
        "rgb(230, 255, 235)",
        "rgb(160, 240, 170)",
        "rgb(65, 175, 85)",
        "rgb(55, 140, 70)",
        "rgb(25, 90, 40)"
    ],
    [
        "rgb(230, 245, 255)",
        "rgb(160, 200, 255)",
        "rgb(65, 120, 230)",
        "rgb(45, 95, 190)",
        "rgb(20, 60, 130)"
    ],
    [
        "rgb(245, 235, 255)",
        "rgb(210, 160, 255)",
        "rgb(145, 70, 230)",
        "rgb(115, 55, 190)",
        "rgb(70, 35, 130)"
    ],
    
];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, setColourPalete ,darkMode , colorPalettes}}>
      {children}
    </ThemeContext.Provider>
  );
};
