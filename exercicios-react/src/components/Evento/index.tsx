import Button from "./Button";

type PropsEvento = {
    numero?: number
}

const Evento = ({numero = 0}: PropsEvento) => {

    function meuEvento () {
        console.log(`Ativando o primeiro evento!`);
    }
    function segundoEvento () {
        console.log(`Ativando o segundo evento`);
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button evento={meuEvento} text="Primeiro evento"/>
            <Button evento={segundoEvento} text="Segundo evento"/>
        </>
    )
}

export default Evento