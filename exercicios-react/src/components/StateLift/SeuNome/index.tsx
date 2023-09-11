type Func = {
    setNome: (nome) => void
}

const SeuNome = (props:Func) => {
  return (
    <>
      <p>Digite seu Nome:</p>
      <input
        type="text"
        placeholder="Qual é o seu nome"
        onChange={(e) => props.setNome(e.target.value)}
      />
    </>
  );
};

export default SeuNome;
