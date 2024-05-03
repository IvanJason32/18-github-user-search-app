import { useContext } from "react"
import { themeContext } from "../context/themeContext"

export const useThemeContext = () => {
    const context = useContext(themeContext);

    if(!context) throw new Error('You need context provider');

    return context;
}