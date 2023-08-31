import Item from "../Item";

const List = () => {
    const arrayMarcas = [   
        {
            marca: 'Renaul',
            ano: 1984
        },
        {
            marca: 'Ferrari',
            ano: 1988
        },
    ]

    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                {
                    arrayMarcas.map(item => {
                        return(
                            <>
                                <Item marca={item.marca} ano_lançamento={item.ano}/>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default List;