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

## Para reatribuir variáveis 

<h3>Sintaxe</h3>

~~~JavaScript exemplo
var ourNumber = 20;
ourNumber = 10;
~~~

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

## Variáveis não inicializadas

- A partir do momento que uma variável é declarada, o valor dela se torna undefined (não definido). 

- Se houver uma operação matemática em uma variável "undefined", seu resultado "NaN", o que significa que "não é um número". Se você concatenar (concatenar significa colocar junto) uma string com um var "undefined", você receberá uma string com o valor "undefined".

## Como deve ser os nomes das variáveis

<h2>Sintaxe:</h2>

~~~JavaScript exemplo
var ourName;
~~~

- Em JS, todos os nomes de variáveis e funções precisão obedecer a capitalização, pois é de importância estar bem capitalizado.

- "ourvar", não é a mesma coisa que "ourVar". É possível haver diversas variáveis distintas com o mesmo nome, porém com a capitalização diferenciada. É extremamente recomendado pelo bem da clareza, que você não use esse recurso da linguagem.

### Boas práticas

- Usar a convênção de linguagem "camelCase"  para o nome das variáveis é extremamente importante para a clareza do código.

~~~JavaScript exemplo
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
~~~

## Diferenciar entre as palavras-chave var e let

- Um dos maiores problemas ao declarar variáveis com a palavra chave "var", é justamente a sobrescrita facilitada que pode acontecer nas declarações de variáveis.

~~~JavaScript exemplo
var camper = "James";
var camper = "David";
console.log(camper);
~~~

- Neste código retratado acima, a variável camper foi primeiramente declarada com a string "James" e então substituida pela string "David". O console irá exibir a string "David" pois está logo abaixo e consequêntemente mais prioritária. E quando isso acontece não aparece como erro na depuração ou busca e correção de bugs, tornando-a mais difíceis.

- Porém, uma palavra-chave foi inserida no ES6 chamada "let". Ao usar o "let", tal variável só poderá ser declarada uma vez. E se houver um código assim:

~~~JavaScript exemplo
let camper = "James";
let camper = "David";
console.log(camper);
~~~

<p>Resultará em erro. Tornando mais fácil para a correção de bugs ser feita.</p>


## Declarar variáveis somente de leitura com a palavra-chave const

### Sintaxe:

~~~JavaScript exemplo
const camper = "James";
console.log(camper);
~~~

- A palavra-chave `const` possui todos os recursos da palavra-chave `let` mais um bônus adicional que torna as variáveis `const` somente de leitura, ou seja, ela impede quase que totalmente a reatribuição de seu valor. 

- O uso dela é importante para variáveis cujo uso são de extrema importância e que não podem ser mudadas.

`OBS: É comum que os devs usem nomes de variáveis maiúsculas para valores imutáveis, ou seja, valores que não podem mudar.`

## Adicionar dois números com JS

<h2>SINTAXE:</h2>

~~~JavaScript exemplo
const myVar = 5 + 10;
~~~

- "Number" é um tipo de dado em JS que representa um dado numérico que pode envolver operações matemáticas nele.

- Tipo de operações matemáticas: + (adição), - (subtração), * (multiplicação), / (divisão)

## Incrementar um número

<h2>SINTAXE:</h2>

~~~JavaScript exemplo
let num = 100;
num++;
~~~

- O operador `++` faz com que incremente ou adicione 1 à variável.

- No caso acima, a variável com número 100 foi adicionada 1 à variável, ou seja, o número se tornou de 100 para 101. 

- Isso também equivale ao operador `--` na seguinte forma:

~~~JavaScript exemplo
let num = 100;
num--;
~~~

- Isso faz com que o número 100 vire 99.

## Números decimais

<h2>SINTAXE:</h2>

~~~JavaScript exemplo
var num = 1.1;
~~~

- Nós podemos também armazenar números decimais em variáveis. Números decimais são às vezes referidos como números de ponto flutuante ou `floats`.

`Observação: ao computar números, eles são calculados com precisão finita. Operações que usam pontos flutuantes podem levar a resultados diferentes do resultado desejado.`

### Multiplicação e divisão de dois decimais com JS

<h3>SINTAXE:</h3>

~~~JavaScript exemplo
var num = 1.1 * 1.1;

// ou

var num = 1.1 / 1.1;
~~~

- Tal recurso é usável, tornando possível a multiplicação e a divisão de números decimais com os operadores `*` e `/`.

## Descobrir o resto

<h2>SINTAXE:</h2>

~~~JavaScript exemplo
var num = 11 % 3;
~~~

- O operador `%` identifica o resto da divisão de dois números. No exemplo acima, o resto da divisão "11 / 3" será 2. Números que possuem resto `0` são `pares`, porém números que contem resto `1` são `ímpares`.

## Atribuir de modo composto com adição e subtração aumentada

<h2>SINTAXE:</h2>

~~~JavaScript exemplo 1
var num = 11;
num += 3; //14
~~~

ao invés de:

~~~JavaScript exemplo 2
var num = 11;
num = num + 3; //14
~~~

- Ao invés de atribuir uma modificação à uma variável como no exemplo 2, podemos fazer exatamente o mesmo como no exemplo 1, ou seja, podemos apenas usar o operador `+=` para atribuir um número ao valor inícial da variável. Isso torna o código mais legível e fácil. 

- Etambém podemos fazer o mesmo com os operadores `*` e `/` para efetuar operações nas atribuições de variáveis.

## Aspas literais em strings

<h2>SINTAXE:</h2>

~~~JavaScript exemplo 
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
~~~

- Quando você precisa de aspas literais dentro de uma string sem que a aspa seja considerada como final da string, você pode colocar uma barra invertida "\" na frente das aspas para que não seja considerada como fim de uma string.

## Cercar strings com aspas simples

<h2>SINTAXE:</h2>

~~~JavaScript exemplo 
const singleQuoteStr = 'This is also a string';
~~~

- Aspas simples e duplas funcionam do mesmo jeito no JS.

- O motivo pelo qual você pode usar isso é quando você quer usar ambos tipos de aspas em uma string, como por exemplo, quando é salvo uma tag "a" em uma string:

~~~JavaScript exemplo 
const ancoraStr = '<a href="#!">Ver todos</a>';
~~~

- Isso em muitos casos pode previnir o uso de caracteres de escapamento como o "\", porém, há casos em que o uso dela será necessário como esse:

~~~JavaScript exemplo 
const const badStr = 'Finn responds, "Let\'s go!"';
~~~

## Escapar sequências em strings

| Código | Saída|
|---|---|
| \n | nova linha |
| \t | tab |
| \" | aspas duplas |
| \' | aspas simples |
| \\ | barra invertida |
| \r | retorno de carro |
| \b | retroceder |
| \f | quebra de página |

- Esses caracteres são usados em uma string que possui uma sequência e servem também para não criar espaçamentos nessas strings, como no exemplo a seguir:

<h2>SINTAXE:</h2>

~~~JavaScript exemplo 
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
~~~

- E isso resultará nisso:

`FirstLine
    \SecondLine
ThirdLine`

## Concatenar strings com o operador mais

<h2>SINTAXE:</h2>

~~~JavaScript exemplo 
const ourStr = "I come first. " + "I come second.";
~~~

- Para concatenar duas strings, você usará operador "+" para juntar as duas strings. O espaçamento não é feito pelo operador, e sim por você mesmo.

- O operador += também pode ser usado, como no exemplo a seguir:

~~~JavaScript exemplo 
let ourStr = "I come first. ";
ourStr += "I come second.";
~~~

### Concatenar strings em diferentes variáveis

<h2>SINTAXE:</h2>

~~~JavaScript exemplo 
const myStr = "Mateus";
const ourStr = "My name is " + Mateus + " de Souza"; 
~~~

### Concatenar strings em diferentes variáveis usando o operador +=

<h2>SINTAXE:</h2>

~~~JavaScript exemplo 
const myStr = "Mateus";
let ourStr = "My name is "; 
ourStr += myStr;
~~~

## Encontrar o tamanho de uma string

<h2>SINTAXE:</h2>

~~~JavaScript exemplo 
const myStr = "Mateus";
console.log(myStr.length);
~~~

- O valor do exemplo acima no console é 6, pois o conjunto de caracteres (que também incluem espaços) resultam nesse número.

## Usar notação de colchetes para encontrar caracteres em uma string

<h2>SINTAXE:</h2>

~~~JavaScript exemplo 
const firstName = "Charles";
const firstLetter = firstName[0];
~~~

- Essa notação, no caso o "[0]", mostra o caractere representado nessa ordem, ou seja, o caractere mostrado no console será o "C".

## Entender a imutabilidade das strings

- Quando uma string é criada, ela é imutável, ou seja, ela não pode ser mudada. Por exemplo:

~~~JavaScript exemplo 
let firstName = "Charles";
firstName[0] = "X";
~~~

- O exemplo acima mostrará um erro no console. Porém, o valor pode ser reatribuído. Por exemplo:

~~~JavaScript exemplo 
let firstName = "Charles";
firstName = "Xharles";
~~~