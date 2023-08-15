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

for (let i = 0; i < operacoes.length; i++){
    console.log(operacoes[i](5, 6))
}

