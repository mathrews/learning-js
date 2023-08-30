import { useState } from 'react';
import ModalForm from './ModalForm';
import Overlay from './Overlay';
import './index.css';


type Propriedades = {
    nome: string,
    idade: number
}

const SayMyName = (props: Propriedades) => {

    const [modal, setModal] = useState<boolean>(false)

    function estadoModal () {
        if (modal == false) {
            setModal(true)
        } else {
            setModal(false)
        }
    }

    function aparecerModal () {
        if (modal == false) {
            return (
                <>
                    <Overlay />
                    <ModalForm />
                </>
            )
        } else {
            return (<></>)
        }
    }

    return (
        <div className='container'>
            <div className='containerDados'>
                <h1>Olá pessoas</h1>
                <p>Olá, meu nome é {props.nome} e eu tenho {props.idade} anos.</p>
                <button onClick={estadoModal}>Gere outra frase</button>
            </div>
            {
                aparecerModal()
            }
        </div>
    )
}

export default SayMyName;