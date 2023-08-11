# Próximos Passos: 
<br>

- Vimos fundamentos, variáveis e tipos de dados, operadores, condições, repetições, arrays e functions.
<br>

- Estudar daqui pra frente: `functions, objetos, modularização, RegEx, JSON, AJAX, NodeJS`;
<br>

- Objetos: para declará-los, use `{}`. Dentro do objeto, diferentemente dos arrays, pode se colocar além de tudo, funções. Um exemplo de como é um objeto e de como acessar alguma propriedade ou método nele, é o seguinte:
<br>

~~~JS EXEMPLO
let amigo = {
    nome: 'Mateus',
    idade: 15,
    peso: 60.1,
    engordar(n){
        this.peso = this.peso + n;
        return this.peso; 
    },
    cor: 'pardo'
}

console.log(amigo.nome);

console.log(amigo.engordar(5))
~~~