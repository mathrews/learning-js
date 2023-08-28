type PropsHeader = {
    logo: string,
    contentDosBotoes?: string
}

const HeaderComponent = ({logo, contentDosBotoes}: PropsHeader) => {
    return(
        <>
            <header>
                <h1>{logo}</h1>
            </header>
        </>
    )
}

export default HeaderComponent;