import { useEffect, useState } from "react";

const ExerciseUseEff = () => {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(10);
  const [user, setUser] = useState();


  // 1 - utilização
  useEffect(() => {
    console.log("Roda a cada render");
  });

  // 2 - array de dependencias
  useEffect(() => {
    console.log("Só roda ao incrementar valor!");
  }, [count]); // só roda quando o count foi alterado

  // 3 - array de dependencias Vazio: só roda quando a página carregar
  useEffect(() => {
    console.log("A página carregou");
  }, []);

  // 4 - clean up function: essa função limpa a memória de uma função repetitiva
  useEffect(() => {
    const timer = setTimeout(() => {

      console.log(`O incrementador foi alterado ${count} vezes`);

    }, 2000);

    return () => {
      clearTimeout(timer);
    };

  }, [count]);

  // 5 - fetch com useEffect #OBRIGATORIO
  useEffect(() => {
    fetch('https://api.github.com/users/mathrews')
    .then((response) => response.json())
    .then((json) => setUser(json))
  }, []);
  
  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Renderizar {count}</button>
      <button onClick={() => setCountB((prevCount) => prevCount + 1)}>Renderizar {countB}</button>

      {user && (
        <div>
          <p>{user.login}</p>
          <p>{user.name}</p>
          <a href={user.html_url} target="_blank">{user.html_url}</a>
        </div>
      )}
    </>
  );
};

export default ExerciseUseEff;
