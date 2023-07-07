// window.alert('Olá, mundo');

// window.confirm('Será que é real?');



const paragrafo = document.querySelector('p');

paragrafo.style.border = '2px solid blueviolet'
paragrafo.style.paddingInlineStart = '16px'

paragrafo.onclick = () => {
    let nomes = window.prompt('Qual é seu nome?');
    paragrafo.textContent = "\'livrei-me da maldição.\' by " + nomes;
}


const pagina = document.querySelector('body');

const botao = document.querySelector('#btn');

let data = new Date();

botao.onclick = (() => {
    location.reload();
    window.alert(data.getSeconds());
})

