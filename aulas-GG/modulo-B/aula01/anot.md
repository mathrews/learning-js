# Variáveis e Tipos Primitivos:

- Como guardar dados?

## Comentários:

- Importante!

- Quem comenta bem seus códigos, o mantém bem documentado.

- // -> comenta apenas uma linha

- /**/ -> comenta mais de uma linha

- Útil para depuração!

## Variável: 

- Exemplo de sintaxe usando a metáfora de estacionamento: let/const c1 = carro;

- let/const => tipo de variável

- "c1" => nome da variável

- "carro" => valor da variável

- "=" => `recebe`

- Para reatribuir a variável(usando o exemplo acima): c1 = carro2;

- Para reatribuir o valor para nulo: c1 = null;

### Explicação da metáfora:

- No exemplo acima, o estacionamento seria a memória do computador, e dentro da memória, você pode colocar dados(no exemplo acima, os dados são as variáveis). E cada vaga é um espaço delimitado na memória do computador para armazenar um dado.

`OBS: NO JS MODERNO, A VARIÁVEL "VAR" NÃO É MAIS USADA POIS O ES6 IMPLEMENTOU AS VARIÁVEIS "LET" E "CONST, ONDE O USO É MAIS RECOMENDADO PARA EVITAR ERROS"`

### Atribuiçao e delimitação de strings:

- A atribuição é armazenar o valor dentro de uma variável 

- Três formas de delimitar uma string: entre "", entre '' e entre ``.

### Identificadores:

- O nome de cada variável chamamos de 'identificador'. podem começar com: `letra, $ ou _`. Não podem começar com números, é possível utilizar letras ou números. É possível utilizar acentos e símbolos. Não podem conter espaços. Não podem ser palavras reservadas.

- Case sensitivo, exemplo: `"Existe uma variável chamada 'A' e o valor atribuído a ela é 10, e existe outra variável chamada 'a' e o valor atribuído a ela é 20. Essas variáveis são diferentes pois o nome de uma está em caixa alta e o nome da outra está em caixa baixa".`

- Escolher nomes coerentes para os identificadores.

- `Evitar ser um gohorse.`

## Utilização do node.js:

- Ao atribuir uma variável, no node, irá aparecer 'undefined' pois n pedimos para mostrar o valor, e sim pedimos para criar e atribuir uma variável na memória do computador.

- Para sair = .exit

- ctrl + l = limpa o terminal

## Utilizando o node no terminal do vscode:

- Basta abrir o terminal do vs com o atalho de teclas e digitar "node" no terminal e ele abrirá o node.

- ctrl + l = limpa o terminal.

## Tipos primitívos primordiais de variáveis:

- Numbers, strings e booleanos.

- Numbers = Inteiros: Números sem parte fracionaria; Reais || float: Números com parte fracionária.

- Strings: cadeia de caracteres. Pode ser determinado por "", '' e ``(template string).

- Boolean: true ou false.

### Outros exemplos:

- Dentro de number podemos também ter o valor: `NaN(not a number) e infinity.`

- Também existe os tipos `null e undefined.`

- Existe o `Object`, já que o JS é orientado a objeto. O `null` também pode ser considerado `object`. Dentro de objects existe os `Arrays` que são `vetores`.

- Existe também o tipo `function`, já que o mesmo funciona no paradigma funcional, e considera-la um tipo, é algo interessante.

- Para trabalhar com todos esses tipos, experimente o comando "typeof" no terminal.