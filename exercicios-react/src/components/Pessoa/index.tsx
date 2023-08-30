type props = {
    foto: string,
    nome: string,
    idade: number,
    profissao: string
}

const Pessoa = (props: props) => {
    return (
        <>
            <div>
                <img src={props.foto}/>
                <h2>Nome: {props.nome}</h2>
                <p>Idade: {props.idade}</p>
                <p>Profissao: {props.profissao}</p>
            </div>
        </>
    )
}

export default Pessoa;