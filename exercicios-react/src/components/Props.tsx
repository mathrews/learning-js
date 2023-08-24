type propriedades = {
    text?: string,
}

export function TextProps(props: propriedades) {
    return <p>{props.text}</p>
}