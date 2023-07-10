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

