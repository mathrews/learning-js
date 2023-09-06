type propriedades = {
    text: string,
    evento: () => void
}

const Button = (props:propriedades) => {
    return(
        <>
            <button onClick={props.evento}>{props.text}</button>
        </>
    )
}

export default Button