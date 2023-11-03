const calcTroco = (productValue, money) => {

    const cedulas = [200, 100, 50, 20, 5, 1, 0.50, 0.10, 0.05, 0.01];

    const troco = money - productValue;

    if (troco < 0) {
        return "dinheiro insuficiente";
    } else if (troco === 0) {
        return "valor completo";
    }

    let cedulasDoTroco = [];

    cedulas.map((item) => {
        cedulasDoTroco.push((troco / item).toFixed(2));
    })

    return cedulasDoTroco
}

console.log(calcTroco(12.1, 61));