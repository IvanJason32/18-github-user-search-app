import { createContext, useState } from "react";

const themeContext = createContext(
  null
  //   isDark: window.matchMedia("(prefers-color-scheme: dark)").matches,null
);

const ThemeContextProvider = ({ children }) => {
  const [actualTheme, setActualTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const handleTheme = () => {
    setActualTheme((prev) => !prev);
  };
  
  return (
    <themeContext.Provider value={{ isDark: actualTheme, handleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { themeContext, ThemeContextProvider };
