# Funções:

## A importância da função:

- Linguagem funcional diz respeito a função. A função é determinante na forma como irei desenvolver em JS.
<br>

## Funções com parâmetros:

- As funções podem ou não receber algo como parâmetro ou retornar algo. Funções que não recebem parâmetros ou não possuem nome são chamadas de `função anônima`.
<br>

~~~JS exemplo função anônima
function simples(){
    console.log('Simples');
}

simples()
~~~ 
<br>

~~~JS exemplo função com parâmetro
function simples(a){
    console.log('Simples' + a);
}

simples('!!!')
~~~ 
<br>

- Podemos também, além de funções com parâmetros, podemos também adicionar retornos a nossas funções. O retorno é auto-explicativo, ou seja, ele `retorna` algo para onde a função foi chamada.

~~~JS exemplo função com parâmetro e retorno
function gritar(expr) {
    return `${expr.toUpperCase()}!!!` //deixa a letra maiuscula.
}

const bomDia = gritar('bom dia')

console.log(bomDia);
~~~
<br>

- Trabalhar com tais tipos de funções sempre será útil. Sempre irá depender da ocasião.
<br>

- No JavaScript, não é obrigatório passar a toda a quantidade de parâmetros que uma função pede. Por exemplo: não é obrigatório em uma função passar 3 parâmetros exigidos, pode-se passar apenas 2 se for o caso, ou até mesmo 1 só. Mas para isso acontecer sem dar erro, podemos adicionar `valores pre-definidos` àquelas funções.

~~~JS exemplo desse tipo de função
function somar(a = 0, b = 0) { //adicionando valores pré-definidos aos parâmetros
    return a + b
}

console.log(somar(3, 4)) //passando os dois valores

console.log(somar(3)) //passando apenas um valor

//podemos também pré-definir valores da seguinte maneira:

function somar(a, b) { 
    return (a ?? 0) + (b ?? 0) //adicionando valores pré-definidos aos parâmetros caso undefined
} // operador de coalecência nula



// E se passarmos mais parâmetros do que o desejado, o JS ignorará, exemplo:

function somar(a, b) {
    return (a ?? 0) + (b ?? 0)
}

console.log(somar(3, 4, 5, 6, 7)) // do 5 ao 7, os valores são ignorados.
~~~
<br>

## Funções como classes:

- Precisamos entender que a função em uma linguagem orientada a objeto, como o JAVASCRIPT, pode ser usada como uma classe, por exemplo:

~~~JS exemplo
// Nesse exemplo, criamos uma função dentro de outra função, como no REACT:

function Menu() {

    function esconderMenu() {

    }

    esconderMenu()
}
~~~
<br>

## Associando uma função a uma constante ou variável:

- Podemos criar e associar uma função a uma constante ou variável. Existe um conceito chamado `First-Class citizen`. Uma função é tratada como um `dado`. Por exemplo:

~~~JS exemplo
const multp = function (a, b) { //função anônima
    return a*b 
}
console.log(multp(3, 3));
~~~
<br>

- O JS trabalha uma função como um dado. E devido a isso, podemos tratar a função como um dado, como dito acima. Outro exemplo disso é um array de funções. Por exemplo:

~~~JS exemplo
const operacoes = [
    function (a, b) {
        return a + b
    },
    function (a, b) {
        return a - b
    },
    function (a, b) {
        return a * b
    },
    function (a, b) {
        return a / b
    }
]

for (let i = 0; i < operacoes.length; i++) {
    console.log(operacoes[i](5, 6)) //exemplo de como podemos chamar essas funções.
}
~~~
<br>

## Função como parâmetro: 

- No JS, uma função pode retornar uma vounção e receber uma função como parâmetro.
<br>

- Uma coisa é você invocar uma função utilizando o '()', outra coisa é você usar a mesma função como parâmetro sem esse mesmo parenteses. 

~~~JS exemplo
function executarNoConsole(fn, n1, n2) {
    console.log(fn(n1, n2)); //aqui eu uso o parãmetro fn como função e uso n1 e n2 como parâmetros de fn.
}

const somar = function (a, b) {
    return a + b;
} //aqui eu crio a função que será executada na função acima

executarNoConsole(somar, 2, 3); //aqui eu executo a função somar como parâmetro e os números 2 e 3 assumem os parâmetros n1 e n2 da função executarNoConsole. E nesse caso, irá retornar 2 + 3;
~~~
<br>

- E nisso, quando passamos um parâmetro como uma função, alí precisa necessariamente ser uma função. Pois caso contrário, resultará em erro. E para tentar previnir isso, podemos seguir o seguinte exemplo:

~~~JS exemplo
function executarNoConsole(fn, n1, n2) {
    if (typeof fn === "function"){ 
        console.log(fn(n1, n2));
    }
}

const somar = function (a, b) {
    return a + b;
}

executarNoConsole(somar, 2, 3);
~~~
<br>

- Isso faz parte do conceito Higher-Order-Function, basicamente esse conceito significa `funções que aceitam outras funções como argumentos`. Também podemos a partir de uma função, retornar uma função. Por exemplo:

~~~JS exemplo
//currying: fragmentar os parâmetros.
function precoComImposto2 (imp) {
    function calcular (preco) {
        return preco * (1 + imp)
    }
    return calcular
}

const precoComImpostoDoRJ = precoComImposto2(0,11)

console.log(precoComImpostoDoRJ(5.73/*esse parâmetro corresponde ao parâmetro da função calcular*/));
~~~
