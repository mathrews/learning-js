const FormComp = () => {

    function cadastrarUsuario () {
        event.preventDefault()
        console.log(`Cadastrado com sucesso`);
    }

    return (
        <>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <section>
                    <label htmlFor="nome">Insira seu nome: </label>
                    <input type="text"/>
                </section>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormComp