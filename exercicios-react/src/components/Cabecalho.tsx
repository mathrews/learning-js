import { useState } from "react"

type propsDaHeader = {
    title: string,
    spans?: string
}

export function Logo(props: propsDaHeader) {
    const [nomes, setNomes] = useState([
        'Jesus',
        'Familia',
        'Estudos',
    ])

    function adicionarNome() {
        setNomes([...nomes, 'Lorena'])
    }

    return (
        <>
            <h1>{props.title}</h1>
            <nav>
                {nomes.map(nomes => {
                    return <><span> {nomes} </span></>
                })}
            </nav>
            <span>estão nas prioridades da vida do Mateus.</span>
            <br />
            <button onClick={adicionarNome}>Adicionar o Nome</button>
        </>
    )
}