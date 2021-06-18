import React, { useState, useEffect, useContext } from 'react';

const ThemeContext = React.createContext('light');

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(global.window?.theme || 'light');
    const toggleTheme = () => {
        global.window.setPreferredTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        global.window.onThemeChange = setTheme;
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
