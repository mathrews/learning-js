import "./index.css"

const ModalForm = () => {
    return (
        <>
            <form className="formulario">
                <section>
                    <label htmlFor="nome">Insira seu nome: </label>
                    <input id="nomeInput" type="text" />
                </section>
                <section>
                    <label htmlFor="nome">Insira sua idade: </label>
                    <input id="idadeInput" type="number" min={1} />
                </section>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ModalForm;