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

## Interpretado x Compilado:

- JS é uma linguagem interpretada, ou seja, o código é de execução imediata e escrito de cima para baixo e não há necessidade de se transformar em algo diferente antes do navegador executar o mesmo.

- Linguagens compiladas (Como C/C#), tem seus códigos compilados(`transformados`) antes de serem executados pelo computador. No caso do C/C#, o código é compilado(`transformado`) em assembly antes que o computador rode o mesmo.

- O JS é uma linguagem leve e interpretada, ou seja, O navegador recebe o código JavaScript em sua forma de texto original e executa o script a partir dele. A compilação do código em JS é executada simultâneamente usando a técnica de compilação `just-in-time` para melhorar o desempenho.

## Código dinâmico X estático:

- No caso do JS, o code dinâmico se refere ao lado server-side e client-side juntos. Essa palavra(dinâmico) se refere a habilidade de mostrar conteúdos diferentes, em circunstâncias diferentes, ao carregar a página gerando novo conteúdo como solicitado.

- Código do `lado do servidor` dinamicamente gera novo conteúdo no servidor, puxando `dados de um banco de dados`. enquanto que JavaScript do `lado do cliente` dinamicamente gera novo conteúdo dentro do `navegador do cliente`, como criar uma nova tabela HTML com dados recebidos do `servidor` e mostrar a tabela em uma página web exibida para o usuário. 

- Os significados são um pouco diferentes, porém relacionados, e o server/client-side do JS geralmente trabalham juntos.