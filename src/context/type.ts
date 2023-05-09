import {ReactNode} from "react";

export interface ThemeProviderProp {
        darkMode: boolean,
    setDarkMode: (theme: boolean) => void;
}
export interface ContextProp {
    children: ReactNode;
}
