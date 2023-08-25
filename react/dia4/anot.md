# Estilização no React:

- A maneira como estilizamos nossa aplicação no React não é muito diferente da tradicional;

- Usamos o CSS para fazer isso e importamos para as pastas que queremos ou podemos escrever o css "inline";

~~~JS exemplo
<button
    onClick={funcao}
    style={{
        backgroundColor: '#8257e6',
        border: 0,
        padding: '6px 12px',
        color: '#FFF'
    }}
>

</button>
~~~

- Ah tambeém uma forma de escrever css no js chamada `CSS in JS`, e podemos utilizar bibliotecas para isso;

# Roteamento:

- Biblioteca principal: `React Router`;

- Roteamento é `permitir que a nossa aplicação tenha várias páginas`. Exemplos: Página do produto, página do catálogo, página do carrinho, etc;

- Essas páginas são iguais a todos os componentes, podem importar estados, estilos, outros componentes, etc;

- Para usar o router-dom, uma das maneiras é criar um documento .jsx chamado `Routes`, e ele será como um componente do React. Depois se faz um import nessa página da seguinte maneira:

~~~JS exemplo
import {
    BrowseRouter as Router,
    Routes,
    Route
} from "react-router-dom";
~~~

- Daí, você faz uma página `pages`, onde irá ficar as páginas e os seus componentes;

- Depois de fazer os componentes, você insere ele no arquivo Routes e importa o mesmo para o arquivo App, e coloque-o no HTML;

- As routes são mudadas pela URL;

- OBS: `NUNCA COLOCAR O NOME DA FUNÇÃO IGUAL AO NOME DO COMPONENTE, ISSO GERA CONFLITO!`

- Segue a estrutura das routes:

