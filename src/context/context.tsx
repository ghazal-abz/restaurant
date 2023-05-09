import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const Context = createContext();

export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);
  return <Context.Provider value={{darkMode, setDarkMode}}>
    {children}
  </Context.Provider>
}

export const useThemeContext = () => {
  return useContext(Context);
}
