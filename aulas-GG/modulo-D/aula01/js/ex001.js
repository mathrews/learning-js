
function velocidade(vel){
    console.log(`A velocidade do seu carro é ${vel} km/h.`);
    if (vel > 60) {
        console.log(`Você ultrapassou a velocidade permitida. MULTADO!`);
    } else {
        console.log(`Dirija sempre usando cinto de segurança. E continue assim`);
    }
}

velocidade(80);