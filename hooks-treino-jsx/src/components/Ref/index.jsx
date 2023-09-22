// Basicamente, o useRef pode atualizar o seu valor sem que o componente inteiro renderize novamente, e isso faz com que um valor persista durante todo o ciclo de vida do componente;

import { useState, useEffect, useRef } from "react"

const Ref = () => {
    const [name, setName] = useState("");


    // Refenrenciando um elemento HTML:
    const inputRef = useRef() 

    const focusInput = () => {
        inputRef.current.focus() 
    } // nesse tipo de uso, podemos referenciar o elemento HTML por meio do useRef, e a função abaixo usa a propriedade 'focus' do elemento, que no caso é um input;

    // Fazendo a contagem de renders sem o componente renderizar de novo:
    const renders = useRef(0)

    useEffect(() => {
        renders.current += 1
    }); // esse uso mostra que o useRef não renderiza o componente ao ser alterado;

    // Guardando o valor anterior do State:
    const previousName = useRef("")

    useEffect(() => {
        previousName.current = name
    }, [name]) // Nesse caso, nós esperamos o 'name' mudar, então atribuimos o mesmo a nossa constante 'previousName'

    return (
        <>
            <div>
                <input onChange={(e) => setName(e.target.value)} type="text" ref={inputRef}  />
                <p>Hello! My name is {name}</p>
                <p>And my name was: {previousName.current}</p>
                <p>Renders: {renders.current}</p>
                <button onClick={focusInput}>Render</button>
            </div>
        </>
    )
}

export default Ref