# Condições parte 1:

- Sequências: Comandos digitados em sequências e executados em ordem de cima pra baixo. O js funciona nessa premissa.

- Mas haverão horas onde vou querer ou não executar uma função dependendo de algo. Para isso, vamos utilizar as condições. As condições são como uma `bifurcação na sequência`, ou seja, seria como se fosse uma bifircação em uma estrada reta. E depois disso, os caminhos irão se encontrar dnv.

- Isso é o `desvio condicional`.

~~~JS exemplo:
if (condicao) {
    true;
} else {
    false;
}
~~~

- O `true` será executado se a condição for verdadeira, e o `false` será executado se a função for falsa.

## Tipos de condição:

- Tipo 1: possui apenas um tipo de código. Chamada de condição simples. Ela executará apenas a parte verdadeira do código se a condição for true e não fará nada se a condição for false.

~~~JS exemplo:
if (condicao) {
    true;
}
~~~

- Tipo 2: Possui dois blocos. Executará algo se a condição for true e executará outra coisa se a condição for false.

~~~JS exemplo:
if (condicao) {
    true;
} else {
    false;
}
~~~

- Exemplo real:

~~~JS exemplo:
function velocidade(vel){
    console.log(`A velocidade do seu carro é ${vel} km/h.`);
    if (vel > 60) {
        console.log(`Você ultrapassou a velocidade permitida. MULTADO!`);
    } else {
        console.log(`Dirija sempre usando cinto de segurança. E continue assim`);
    }
}

velocidade(80);
~~~