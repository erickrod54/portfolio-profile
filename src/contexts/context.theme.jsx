import { createContext, useContext, useEffect, useState } from 'react';

/**Portfolio-erick - version 56.16 - context.theme
 *  - Features:
 *  
 *      --> Building 'ThemeContext'.
 * 
 * Notes: This context will provide static data for 
 * the components that need it 
 */

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    //1.- initialize state from localStorage or default to system preference
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    })

    //2.- every time theme changes, update the html class and localStorage
    useEffect(() => {
        const root = window.document.documentElement;

        //Remove both to start fresh
        root.classList.remove("light", "dark");

        //Add the current theme class
        root.classList.add(theme);

        //Save to localStorage for the next visit
        localStorage.setItem("theme", theme)
    }, [theme])

    //3.- Helper function to toggle
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

//4.- Custom hook for easy usage in components
export const useTheme = () => {
    const context = useContext(ThemeContext);
    
    if (!context) {
        throw new Error("useTheme must be used whitin a ThemeProvider")
    }
    return context;
}