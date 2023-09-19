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