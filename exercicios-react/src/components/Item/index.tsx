type Propriedades = {
    marca: string,
    ano_lançamento?: number
}

const Item = (props: Propriedades) => {

    return(
        <>
            <li>{props.marca} - {props.ano_lançamento}</li>
            <p>Teste</p>
        </>
    )
}

export default Item