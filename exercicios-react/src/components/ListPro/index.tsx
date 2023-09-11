type PropsLista = {
    itens: string[]
}

const ListPro = (props:PropsLista) => {
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {
                props.itens.length > 0 ? (

                    props.itens.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))

                ) : (

                    <p>Não há itens na lista</p>

                )
            }
        </>
    )
}

export default ListPro