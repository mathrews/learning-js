function simples(){
    console.log('Simples');
}

simples()


function gritar(expr) {
    return `${expr.toUpperCase()}!!!` //deixa a letra maiuscula.
}

const bomDia = gritar('bom dia')

console.log(bomDia);


function somar(a = 0, b = 0) { //adicionando valores pré-definidos aos parâmetros
    return a + b
}

somar(3, 4) //passando os dois valores

somar(3) //passando apenas um valor

function somar(a, b) { 
    return (a ?? 0) + (b ?? 0) //adicionando valores pré-definidos aos parâmetros caso undefined
}

console.log(somar(3));