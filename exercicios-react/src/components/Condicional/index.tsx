import { useState } from "react"

const Condicional = () => {
    const [email, setEmail] = useState<string>();
    const [userEmail, setUserEmail] = useState<string>()

    const enviarEmail = (e) => {
        e.preventDefault()
        setUserEmail(email)
    }

    const limparEmail = () => {
        setUserEmail('')
    }


    return (
        <>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu email..." onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar-email</button>

                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div> //render Condicional
                )} 
            </form>
        </>
    )
}

export default Condicional