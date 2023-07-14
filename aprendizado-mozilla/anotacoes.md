# O que é JS?

## Ordem de escrita do code:

- No JS, deve ser seguido uma ordem linear para escrever o código, se não, ocasionará em algum erro em breve.

~~~ JS exemplo:
const para = document.querySelector('p');

para.addEventListener('click', atualizarNome);

function atualizarNome() {
  let nome = prompt('Informe um novo nome:');
  para.textContent = 'Jogador 1: ' + nome;
}
~~~

- Nesse exemplo, o código está seguindo uma ordem perfeita de como deve ser feito.

## APIs:

- Conjuntos prontos de códigos que implementam programas que seriam difíceis ou quase impossíveis de implementar. Um exemplo é o DOM(Document Object Model), o DOM te possibilita manipular os elementos do HTML e do CSS do projeto onde esse JS está inserido

## Interpretado x Compilado:

- JS é uma linguagem interpretada, ou seja, o código é de execução imediata e escrito de cima para baixo e não há necessidade de se transformar em algo diferente antes do navegador executar o mesmo.

- Linguagens compiladas (Como C/C#), tem seus códigos compilados(`transformados`) antes de serem executados pelo computador. No caso do C/C#, o código é compilado(`transformado`) em assembly antes que o computador rode o mesmo.

- O JS é uma linguagem leve e interpretada, ou seja, O navegador recebe o código JavaScript em sua forma de texto original e executa o script a partir dele. A compilação do código em JS é executada simultâneamente usando a técnica de compilação `just-in-time` para melhorar o desempenho.

## Código dinâmico X estático:

- No caso do JS, o code dinâmico se refere ao lado server-side e client-side juntos. Essa palavra(dinâmico) se refere a habilidade de mostrar conteúdos diferentes, em circunstâncias diferentes, ao carregar a página gerando novo conteúdo como solicitado.

- Código do `lado do servidor` dinamicamente gera novo conteúdo no servidor, puxando `dados de um banco de dados`. enquanto que JavaScript do `lado do cliente` dinamicamente gera novo conteúdo dentro do `navegador do cliente`, como criar uma nova tabela HTML com dados recebidos do `servidor` e mostrar a tabela em uma página web exibida para o usuário. 

- Os significados são um pouco diferentes, porém relacionados, e o server/client-side do JS geralmente trabalham juntos.

# Um primeiro mergulho no JS:

## Pensando como um Programador:

- Pensar de forma específica.

- Sintaxe não é a preocupação principal. E sim como aplicá-la para resolver os problemas do mundo real.

- Fazer uma análise prévia dos requisitos do programa e aplicar de forma mais específica, limpa e eficaz para o bom funcionamento do código.

- `Requisitos: trabalho duro, experiência com sintaxe de programação utilizada e prática, além de um pouco de criatividade, é claro.`

- **Praticar.**

- Uma prática muito importante é pegar o problema de escopo aberto e transformar esse problema em vários probleminhas de escopo fechado. `É muito importante que sejamos específicos e claros em nossos requisitos para atingirmos o nosso objetivo.`

- Dividir os problemas em ordem cronológica é de suma importância, ou seja, o desenvolvedor precisa de uma lógica **linear** de raciocínio.

- Escrever pontos de requisitos e seus subpontos em `ol (lista ordenada)` é uma boa prática. E também, a escrita de forma **condicional** é importante.

- Para treinar essa lógica, acessar esse link: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/A_first_splash e caminhar até o tópico `pensando como um programador` e leia-o.

- Transformar o passo a passo em código.

## Funções:

- Blocos reutilizaveis de código que se escrevem apenas uma vez para cada função e executá-lo infinitas vezes sem a necessidade de escrever outro código de novo.

- Sintaxe: 

~~~JS exemplo
function nomeDaFunção(){}
~~~

- Para executar a função, é preciso uma chamada de função que consiste no nome da função seguido de parenteses e sinal `;`.

- Sintaxe: 

~~~JS exemplo
nomeDaFunção();
~~~
