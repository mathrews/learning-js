let campoTextoPaís = document.querySelector('#textpais');
let divRes = document.querySelector('#res');

function verificarPaís(valor) {
    console.log(`Your country is ${valor}`);
    if ('Brasil' != valor && valor == 'EUA') {
        divRes.innerHTML = `You not is brazilian, but you is from America.`
    }
    else if (valor == 'Brasil') {
        divRes.innerHTML = `You is from Brazil.`
    }
    else if ('Brasil' != valor && valor != 'EUA') {
        divRes.innerHTML = `You is foreinger.`
    }
}