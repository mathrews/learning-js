type props = {
  nome: string;
};

const Saudacao = (props: props) => {
  function gerarSaudacao(algumNome: string) {
    return `Olá, ${algumNome}, tudo bem?`;
  }

  return (<>

    {
        props.nome && <p>{gerarSaudacao(props.nome)}</p>
    }

  </>);
};

export default Saudacao;
