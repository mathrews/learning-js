import { useContext } from "react"

import { ThemeContext } from "../../../context/ThemeContext"


const HomePage = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <>
            <h1>Home</h1>
            <p>O tema da página atual é: {theme}</p>
            <button onClick={toggleTheme}>Mudar tema</button>
        </>
    )
}

export default HomePage