# Manipulação de Dados:

- DATA TYPES: `Number(infinity, NaN); string; boolean; null; undefined; object(array); function{object}.`

- Tipos tratados nessa aula: Number && String,

## Manipulando valores:

- Pra onde irá os valores que colocamos em inputs ou prompts?

- Nós podemos armazenar o resultado de um comando dentro de uma variável.

~~~JS exemplo:
let nome = window.prompt('Qual é seu nome?');
~~~

- No exemplo acima, nós `armazenamos o valor` do prompt dentro da variável `nome`.

- concatenar == juntar uma string com numero, ou juntar duas strings.

## Usando o operador (+);

- O operador `+` pode servir para adição ou concatenação.

- `number + number` == adição.

- `string + number/string` == concatenação.

`OBS: O COMANDO **PROMPT** RETORNARÁ UMA STRING NA SUA FORMA NATURAL.`

## Formas de converter uma string para um número:

~~~JS exemplos:
Number.parseInt(n); //transforma em número inteiro

Number.parseFloat(n); //transforma em número com vírgula || real.
~~~

- Fazendo com o comando prompt:

~~~Js exemplos:
Number.parseInt(window.prompt('Digite um numero: '));

Number.parseFloat(window.prompt('Digite um numero: '));
~~~

- Há também o modo simplificado:

~~~JS exemplo:
Number(n);
~~~

## Convertendo Número para string:

- Há duas maneiras:

~~~JS exemplo
String(n) || n.toString()
~~~

## Formatando Strings

Ao invés de fazer:

~~~JS exemplo
let s = 'JavaScript';
'Eu estou aprendendo s' //não faz interpolação
~~~

Usamos a concatenação:

~~~JS exemplo
let s = 'JavaScript';
'Eu estou aprendendo ' + s //concatenação
~~~

- Porém, nas novas verções do ECMA, foram implementados as `template-strings`, e elas funcionam da seguinte forma:

~~~JS exemplo
let s = 'JavaScript';

`Eu estou aprendendo ${s}` //template string
~~~

- `Na template-string` usamos a crase `( `` )`. Isso é a delimitação da templateString.

- ${} == placeholder.

### Outras coisas que podemos fazer com strings:

~~~JS exemplo
let s = 'JavaScript';

s.length //Atributo que mostra a quantidade de caracteres da string.

s.toUpperCase() //Metodo que transforma os caracteres da string em caixa alta.

s.toLowerCase() //Metodo que transforma os caracteres da string em caixa baixa.
~~~

### Mostrando na tela o valor armazenado em alguma variável:

- Esta é uma das maneiras de mostrar:

~~~JS exemplo
let nome = window.prompt('Qual é seu nome?');

corpo.innerHTML = `<h1>Meu nome é ${nome}</h1>`;
~~~

- Há também essa maneira:

~~~JS exemplo
let nome = window.prompt('Qual é seu nome?');

document.write(`Seu nome é ${nome}.`);
~~~

- Em ambas maneiras, podemos usar tags HTML5 dentro da string

#### Mostrando também a quantidade de letras, ou caracteres, de uma string na tela:

~~~JS exemplo
let nome = window.prompt('Qual é seu nome?');

document.write(`Olá ${nome}. Seu nome tem ${nome.length} letras.`);
~~~

## Formatando Números:

- Podemos definir quantidade de casas decimais após o '.' como o método `toFixed()` como no exemplo a seguir:

~~~JS exemplos
let n1 = 1500.2

n1.toFixed(2); //Isso transformará o número para 1500.20
~~~

- Podemos também acrescentar o método `replace()`, onde o mesmo troca algum caractere por outro, como no exemplo a seguir:

~~~JS exemplos
let n1 = 1500.2

n1.toFixed(2).replace('.', ','); //Isso transformará o número para 1500,20
~~~

### Formatando o número para mostrar valores monetários:

- Podemos também formatar o valor para valor monetário, no caso de um salário por exemplo, usando o seguinte comando:

~~~JS exemplos
let n1 = 1500.2

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); /*Nesse exemplo, o valor irá ser formatado como 'R$ 1.500,20', mas também podemos formatar para outros tipos de moeda, como o dolar por exemplo.*/
~~~

`OBS: NO EXEMPLO ACIMA, USAMOS UM OBJETO SIMILAR AO JSON.`

# Fim da aula T-T

