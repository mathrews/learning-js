import { useState } from "react";

const FormComp = () => {

    function cadastrarUsuario () {
        event.preventDefault();
        localStorage.setItem('usuario', JSON.stringify(usuario))
        console.log(`Cadastrado com sucesso`);
        console.log(usuarios);
    }

    const [name, setName] = useState<string>('') //Aqui capturamos o valor do input de inserir o nome. Ao 'name' é atribuido o valor e o 'setName' captura esse valor do input;

    const [password, setPassword] = useState<string>('')

    type pessoa = {
        nome: string,
        senha:string
    }

    let usuario: pessoa = {
        nome: name,
        senha: password
    }

    let usuarios =  localStorage.getItem('usuario');

    return (
        <>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <section>
                    <label htmlFor="name">Insira seu nome: </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)} //aqui capturo o valor com o evento
                    />
                </section>
                <section>
                    <label htmlFor="password">Insira sua senha: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </section>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormComp