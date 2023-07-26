let textoVelocidade = document.querySelector('#txtvel');
let resposta = document.querySelector('#res')
function calcular(valor){
    resposta.innerHTML = `Sua velocidade atual é de <strong>${valor}</strong> Km/h <br>`;
    if (valor > 60) {
        resposta.innerHTML += `A velocidade do seu carro está muito alta. Desacelere, se não, estará sendo multado.`
    } 
    else if (valor <= 60 && valor >= 40) {
        resposta.innerHTML += `A velocidade do seu carro está ideal.`
    } 
    else if (valor < 40) {
        resposta.innerHTML += `Acelera e pisa.`
    }
    resposta.innerHTML = `Dirija sempre com cinto de segurança`;
}