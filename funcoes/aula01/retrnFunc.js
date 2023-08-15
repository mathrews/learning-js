function precoComImposto (imp, preco) {
    return preco * (1 + imp);
}

console.log(precoComImposto(0.11, 34.00));



function precoComImposto2 (imp) {
    function calcular (preco) {
        return preco * (1 + imp)
    }
    return calcular
}

const precoComImpostoDoRJ = precoComImposto2(0,11)

console.log(precoComImpostoDoRJ(5.73/*esse parâmetro corresponde ao parâmetro da função calcular*/));