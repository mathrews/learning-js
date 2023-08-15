function executarNoConsole(fn, n1, n2) {
    if (typeof fn === "function"){ 
        console.log(fn(n1, n2));
    }
}

const somar = function (a, b) {
    return a + b;
}

executarNoConsole(somar, 2, 3)