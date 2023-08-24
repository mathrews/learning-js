# Propriedades, mais conhecido como `Props`:

- Propriedades de algum componentes são como se fossem os atributos que passamos em cada tag HTML.

- São usadas para `passar dados entre componentes`.

- A seguir, uma forma de tipar as propriedades e usá-las:

~~~JS react
// No componente
type TextProps = {
    text: string,
}

type propriedades = {
    text: string,
}

export function TextProps(props: propriedades) {
    return <p>{props.text}</p>
}

// No App

import { TextProps } from "./components/Props"


function App() {
  

  return (
    <>
      <TextProps text="Texto na propriedade text" />
    </>

  )
}

export default App
~~~

- Sempre que quiser incluir um código JS dentro do HTML, coloca-se **chaves** por volta: {props.text};

- E quando usamos typescript, passamos a tipagem da props. Exemplo:

~~~JS react
type TextProps = {
    text: string,
}

export function tiparTexto (prop: TextProps) {
    return(
        <>
            <p>{props.text}</p>
        </>
    )
}
~~~

# Estado `States`:

- Isso server para deixar a interface não mais estática, mas agora `dinâmica`;

- Nós importamos uma função do react chamada `useState()` da seguinte forma;

~~~JS exemplo
import { useState } from "react";
~~~

- Essa função cria uma variável que é monitorada pelo componente, e quando essa variável muda o seu valor, o componente é renderizado novamente com as novas infos daquela variável.

- Quando usamos o useState, temos uma forma de tipar que é as `generics`, da seguinte forma:

~~~JS exemplo
import { useState } from "react";

const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
])
~~~

- O useState retorna duas informações usando a desestruturação do próprio JS, como visto na forma acima, onde as duas informações estão no array que é o nome da variável. A primeira informação é o `nome da variável`, e a segunda informação é uma `função`;

- Nisso há um conceito chamado de `imutabilidade`, onde uma variável nunca altera diretamente o valor da variável, apenas substitui/repõe. Segue um exemplo prático abaixo:

~~~JS exemplo
import { useState } from "react";

export function Estados() {

    const [tweets, setTweets] = useState<string[]>([
        'Tweet 1',
        'Tweet 2',
        'Tweet 3',
    ])

    function criarTweet() {
        setTweets([...listaDeTweets, 'Tweet 5']);
    }
    
    return (
        <>
            {listaDeTweets.map(tweet => {
                return <Tweet text={tweet}/>
            })}
            <button onClick={criarTweet}>Adicionar Tweet</button>
        </>
    )
}
~~~