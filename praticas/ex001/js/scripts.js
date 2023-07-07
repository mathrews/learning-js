let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let salario = document.querySelector('#salario');


btn.addEventListener('click', () => {
    let valueNome = nome.value;
    let valueIdade = idade.value;
    let valueSalario = salario.value;

    alert(`Seu nome é ${valueNome.toUpperCase()}.`)
    alert(`Sua idade é de ${valueIdade} anos.`)
    alert(`Seu salário é de R$${valueSalario}`)
})