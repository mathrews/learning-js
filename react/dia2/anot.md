# Como instalar o React?

- Podemos utilizar o `Vite`(ou o snowpack) como ferramenta para instalar o `React` com o comando `npm create vite` e executando o passo a passo;

- Assim recebemos os arquivos da lib e podemos executar utilizando o node ou o npm;

- Essa ferramenta otimiza o app gerado para `produção`;

- É possível iniciar a aplicação com `npm run dev`;

- **BOILERPLATE**: Se refere a templates de código que podem ser utilizadas para construção de aplicações com pouca ou nenhuma alteração. E o create-react-app é um boilerplate.

- O vite e o snowpack já são suficientemente melhores que o create-react-app.

- Podemos executar com o vite tudo no seguinte comando para instalação: `npm create vite <nome do projeto> --template <template que será usada>`

- O atributo `type='module'` na tag script no arquivo index significa que dentro do script, poderá ser usado os comandos import e export e navegar para que cada arquivo tenha uma funcionalidade específica e que o código todo não fique em um arquivo só

## No react é tudo JS:

- Até arqs de imagens e estilização são importados para dentro do JS, e o HTML escrevemos também dentro do JS. Isso chamamos de JSX: Javascript + XML;

## Estrutura do Projeto:

- Uma aplicação react sempre é composta de um arquivo index.html que founciona como `CORE` da aplicação e possui uma div com um id chamado `root` onde tudo será inserido dentro dele por meio do JS.

- Como ele faz isso: Dentro do react `main` é importado o `ReactDOM`(integração do react com o browser) e o mesmo executa o método `render` e basicamente ele renderiza o `App` dentro do elemento que tem o id `root`.

### Componentes:

- São uma forma de quebrar a aplicação em um quebra-cabeça para ser mais fácil de executar uma possível `manutenção`.

- Exemplo: Na timeline do twetter, cada tweett pode ser um componente específico do react, e cada resposta do mesmo tweet pode ser outro componente criado especificamente para aquilo. E no dia que precisar mexer apenas na interface do tweet por exemplo, não vai precisar se preocupar com o resto da aplicação toda.

- Para mostrar esse elemento em tela, importamos o componente e colocamos ele na tela como se fosse um elemento HTML. E sempre usamos `UpperCase` para a primeira letra do nome do componente devido a diferênciação dos mesmos com as tags HTML.

## Todo componente do React é uma função:

- E essas funções retornam um HTML.

- para ver isso na prática, vá para a pasta exercícios-react > src > components > Tweet.tsx.

- Todo componente pode ser repetido várias vezes em tela, porém, eles precisam de alguma 'tag' que encapsulem eles, para isso, usamos o `<></>` como se fossem pseudo-tags HTML.

~~~JS exp App
import { Tweet } from "./components/Tweet"


function App() {
  

  return (
    <>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </>

  )
}

export default App
~~~