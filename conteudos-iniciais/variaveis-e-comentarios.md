# Comentários

<p>Há duas formas de comentar no seu código js, que são elas:</p>

- // texto

- /* texto */

# CamelCase

- "
Parece que você quis dizer "CamelCase". CamelCase é uma convenção de nomenclatura utilizada em programação e desenvolvimento de software para escrever identificadores compostos por múltiplas palavras sem espaços ou caracteres especiais." -ChatGPT.

<p>Nesse estilo de escrita, cada palavra dentro do modificador começa com uma letra maiúscula, menos a primeira palavra. Isso faz com que elas fiqueim colados e formem uma forma de "corcova" de camelo, fazendo jus ao nome "calmelCase".</p>

- Exemplo: myName, theNumber, oMeninokkk

<p>Essa convenção de escrita é usada em muitas linguagens de programação, e faz com que seu código seja mais legível a quem não entende ainda como o mesmo funciona.</p>

# Variáveis

<h2>Sintaxe:</h2>

~~~JavaScript exemplo
var ourName;
~~~

### Explicação

<p>Dados são tudo o que é significativo para o computador. E o JavaScript fornece 8 tipo de dados:</p>

- indefinido

- nulo

- booleano

- string

- simbolo

- bigint

- numero

- objeto

<p>Por exemplo</p>

- Os computadores distinguem números como o 12, e strings como "12", ou "123", ou "123 pato cavalo", etc... Porém, os computadores entendem que podem fazer operações matemáticas com números, mas não com strings.

<h3>Como as Variáveis funcionam?</h3>

- As variáveis permitem que o computador armazene e manipule os dados de forma dinâmica. Eles fazem isso usando uma identificação para os dados ao invés de usar os próprios dados sozinhos. Qualquer um dos 8 tipos de dados podem ser armazenado em uma variável.

- As variáveis são como o "x" e o "y" da matemática, isso significa que são nomes simples para representar os dados que queremos nos referir. Porém, há uma única diferença: os valores das variáveis não são fixos como o da matemática. Eles podem armazenar diferentes valores em diferentes momentos.

*OBS: no js, é obrigatório terminar instruções com ";". Os nomes das variáveis podem ser compostos de letras, números e $ ou _. Porém, não pode haver uma variável iniciada com números ou que contenha espaços.*

## Armazenando valores com o operador de atribuição "="

<h3>Sintaxe:</h3>

~~~JavaScript exemplo
var ourNumber;
ourNumber = 10;
~~~

### Explicação

- No JavaScript, armazenamos a variável com o seu valor em uma variável com o operador de atribuição "=".

*OBS: Se por um acaso houver alguma conta após o operador =, por exemplo: "myVar = 7 + 5;", eles serão resolvidos antes de atribuir o valor à variável a esquerda do operador de atribuição "=".*

## Atribuindo os mesmos valores de uma variável a outra variável diferente

<h3>Sintaxe</h3>

~~~JavaScript exemplo
var ourNumber;
ourNumber = 10;
var myNumber;
myNumber = ourNumber;
~~~

- Após um valor ter sido associado a uma variável, você pode atribuir o mesmo valor a outra variável com o operador de atribuição "="

<h1>Outra maneira de atribuir o valor:</h1>

- É comum iniciar uma variável com um valor inicial na mesma linha que a variável é declarada.

~~~JavaScript exemplo
var myVar = 5;
~~~

## Declarando strings nas variaveis:

<h3>Sintaxe:</h3>

~~~JavaScript exemplo
var ourNumber = "our number";
~~~

### Explicação

- Uma string literal, ou simplesmente string, é uma série de 0 ou mais caracteres entre áspas simples ou áspas duplas.



