import {useState, useContext, createContext} from "react";
import {ThemeProviderProp, ContextProp} from "./type";


const Context = createContext<ThemeProviderProp>({
    darkMode: false,
    setDarkMode: () => null,
});

export const ThemeProvider = ({children}: ContextProp) => {
    const [darkMode, setDarkMode] = useState(false);
    return <Context.Provider value={{darkMode, setDarkMode}}>
        {children}
    </Context.Provider>
}

export const useThemeContext = () => {
    return useContext(Context);
}
