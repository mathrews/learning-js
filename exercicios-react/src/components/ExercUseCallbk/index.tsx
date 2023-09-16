import { useCallback, useMemo, useState } from "react";

const ExercUseCallbk = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  const mostrarSenhaEmailCons = useCallback((e) => {
    e.preventDefault();
    console.log(email);
    console.log(senha);
  }, [email, senha]);

  return (
    <>
      <form onSubmit={mostrarSenhaEmailCons}>
        <h2>Quantidades de caracteres no email: {emailLength}</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          name="senha"
          id="senha"
          value={senha}
          autoComplete="on"
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ExercUseCallbk;
