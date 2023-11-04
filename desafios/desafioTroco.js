const calcTroco = (productValue, money) => {

    const cedulasMoedas = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01];

    let troco = (money - productValue).toFixed(2);

    if (troco < 0) {
        return "dinheiro insuficiente";
    } else if (troco === 0) {
        return "valor completo";
    }

    let resto = troco;
    let resultados = []

    for (let valor of cedulasMoedas) {

        const quantidade = Math.floor(resto / valor);

        if (quantidade === 0) continue;

        resultados.push({ quantidade, valor })

        resto = resto % valor;
    }

    return ({ troco, resultados });

}

const elaborarResultado = (func) => {
    let resultadoEmTexto = '';

    if (func === "dinheiro insuficiente") {
        return func
    }

    func.resultados.map((item) => {
        if (item.quantidade > 0 && item.valor >= 1) {
            resultadoEmTexto += ` ${item.quantidade.toLocaleString('pt-BR')} nota(s) de R$${item.valor.toLocaleString('pt-BR')},`;
        } else if (item.quantidade > 0 && item.valor <= 1) {
            resultadoEmTexto += ` ${item.quantidade.toLocaleString('pt-BR')} moeda(s) de R$${item.valor.toLocaleString('pt-BR')},`
        }
    })

    return `Troco para R$${func.troco}:${resultadoEmTexto}`.replace(/.$/, ".");
}

console.log(elaborarResultado(calcTroco(10, 40)));