# useEffect: 

- Muito usado para se connectar a sistemas externos, exemplo: `API's`;

- Possui dependências envolvidas por um array ao dinal da lógica;

- Executa sua função apenas quando as dependências forem satisfeitas;

- Quando o array é `vazio`, a dependência será quando a página carregar;

- Executa o `cleanUp`, que é quando a função é removida da memória;

~~~JS exemplo
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
  	const connection = createConnection(serverUrl, roomId);
    connection.connect(); //lógica
  	return () => {
      connection.disconnect();
  	}; //função cleanUp
  }, [serverUrl, roomId]/*dependências*/);
  // ...
}
~~~

- Sempre que o componente é adicionado a página e as dependências de algum useEffect são `mudadas`, a função cleanUp é feita primeiro e a função de configuração é feita logo depois;

- A função de limpeza deve `parar ou desfazer tudo o que a função de configuração estava fazendo`;

- Quando sua lógica de limpeza “espelha” corretamente a lógica de configuração, seu Efeito é resiliente para executar a configuração e a limpeza com a freqüência necessária.

- Um Efeito permite manter seu componente sincronizado com algum sistema externo (como um serviço de chat). Aqui, sistema externo significa qualquer trecho de código que não seja controlado pelo React, como:

<ul>
  <li>Um temporizador gerenciado com setInterval()e clearInterval().</li>
  <li>Uma assinatura de evento usando window.addEventListener()e window.removeEventListener().</li>
  <li>Uma biblioteca de animação de terceiros com uma API como animation.start()e animation.reset().</li>
</ul>

- Se você não estiver se conectando a nenhum sistema externo, provavelmente não precisará de um efeito.

- Muitas vezes estaremos usando esse hook juntamente com o useState;

- Temos que tratar requests de dados de forma `assincrona`. Por exemplo:


~~~JS exemplo
import { useEffect } from 'react';

const Repos = () => {

const [repos, setUser] = useState('');

  useEffect(() => {
      fetch('https://api.github.com/users/mathrews/repos')
      .then((response) => response.json())
      .then((json) => setUser(json))
    }, []);

  if (!user) {
    return (<>
      <p>loading</p>
    </>)
  }

  return(
    <>
      <p>{repos.map(repositorios) => {
        repositorios.full_name
      }}</p>
    </>
  )

}



~~~

