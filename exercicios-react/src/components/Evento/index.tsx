type PropsEvento = {
    numero: number
}

const Evento = (props: PropsEvento) => {

    function meuEvento () {
        console.log(`Fui ativado ${props.numero}`);
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento