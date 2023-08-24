type propriedades = {
    text?: string,
}


export function Tweet(props: propriedades) {

    return (
        <>
            <p>{props.text}</p>
        </>
    )
}