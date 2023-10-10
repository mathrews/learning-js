import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider> {/*aqui temos uma maneira de CONSULTAR o theme, que no caso é 'theme'. E tambem temos uma maneira de ALTERAR o tema, que é 'toggleTheme'.*/}
        </>
    )
};


