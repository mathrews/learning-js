# Operadores do JS:

- Focado nos operadores aritméticos, atribuiçao, relacionais, lógicos, ternários.

## Operadores aritméticos:

- `(+); (-); (*); (/); (%); (**)`

- Preciso saber calculos básicos do dia a dia

- `lógica mátematica`

- Existe divisão `real e inteira`

- / => `operador de divisão real`

- % => `operador de resto da divisão inteira` 

- ** => `operador de potência`

- OBS: `CUIDADO COM A PRECEDÊNCIA DE OPERADORES`; com isso utilizamos os `()` para resolvermos a conta que julgarmos prioritária.

## Ordem de precedência:

| sinais | ordem |
| --- | --- |
| () | 1° |
| ** | 2° |
| * / % | 3° | <strong>- ordem da esquerda para a direita</strong>
| + - | 4° |

## Operador de atribuição

- `=`

~~~JS exemplo
var a = 5 + 3;
~~~

### auto-atribuições:

~~~JS exemplo
let n = 3;
n = n + 4; // 7
~~~

- Podemos também simplificar

~~~JS exemplo
let n = 3;
n += 4;
n -= 5;
n *= 4;
n /= 2;
n **= 2;
n %= 5;
~~~

## Operadores de incremento:

~~~JS exemplo
let n = 10
n++ // 11
~~~

- Existe pré-incremento e pós-incremento;

~~~JS exemplo
let n = 10
++n // 11
~~~

# Fim da primeira parte T-T

# Operadores JS parte 2:

## Operadores Relacionais:

- `(>); (<); (>=); (<=); (==); (!=).`

- Para toda expressão que possui um operador relacional ligado a ela, o resultado será booleano `(true || false)`.

- Em uma expreção com operadores aritméticos e relacionais, as expreções aritméticas são resolvidas primeiro. 

- Podemos também fazer com variáveis string.

### Operadores de identidade:

~~~JS exemplo:
5 == 5 // true
5 == '5' // true também pois o sinal de igualdade não testa o tipo. São tipos diferentes mas possuem a mesma grandeza.
5 === '5' // false pois o operador de identico testa **também** o tipo.
~~~

- `===` Operador de identidade, ou operador de igualdade restrita.

- Identico => mesmo valor e **tipo**.

- `!= => diferente; !== => desigual restrito`

~~~JS exemplo
5 != '5' // falso pois possuem o 'mesmo' valor
5 !== '5' // true pois possuem o mesmo valor, porém testa também o tipo que é diferente
~~~

## Operadores Lógicos:

- `(!) negação; (&&) conjunção -e-; (||) disjunção -ou-.`

- *Exemplos lúdicos - (!): eu quero uma caneta azul e ela não pode ser vermelha; (&&): Eu quero uma caneta azul **e** vermelha; (||) Eu quero uma caneta azul, ou vermelha, ou as duas.*

- ! => opereador unário, ou seja, possui apenas um operando. Isso significa que o valor após isso será o valor que não pode ser processado.

- && => Operador binário. Nessa operação, só me satisfaz se as duas forem verdadeiras.

- || => Operador binário que possui dois valores lógicos, dependendo do valor deles e da posição, também temos um resultado lógico. Aqui, basta que um dos valores seja verdadeiro, para que o resultado seja verdadeiro.

- `OBS: Quando possuímos operadores aritméticos, relacionais e lógicos na mesma expressão, primeiro vem os aritméticos, depois relacionais e depois os lógicos.`

~~~JS exemplo:
true && true // true
true && false // false
false && false // false

true || true // true
true || false // true
false || false // false
~~~

- Ordem de execução: (!) depois (&&) depois (||). 

- OBS - OPERAÇÕES COMO: 

~~~JS exemplo
1500 || salario <= 3000 && (sex == 'M') ? 'voce e um trabalhador' : 'voce e uma trabalhadora'
~~~

Resultarão no valor True pois o operador lógico || se satisfaz se apenas um dos lados forem true. Para essa expressão resultar no valor false, teria que colocar o operador && ao invés de ||.

## Ordem de precedência:

| sinais | ordem |
| --- | --- |
| () | 1° |
| ** | 2° |
| * / % | 3° | <strong>- ordem da esquerda para a direita</strong>
| + - | 4° |
| > < >=... | 5° | <strong>- ordem da esquerda para a direita</strong>
| (!) | 6° |
| (&&) | 7° |
| (||) | 8° |

## Operador ternário:

- Possui dois símbolos que aparecem em uma só expressão: `? e :`.

- Ternário pois possui 3 partes: `teste ? true : false.`

- O teste é um resultado verdadeiro ou falso, o true é o que acontecerá se o resultado do teste for verdadeiro, o false é o que acontecerá se o resultado do teste for falso.