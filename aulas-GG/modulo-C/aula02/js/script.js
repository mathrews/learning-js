function clicar(){
    area.innerText = 'Clicou';
    area.style.background = 'red';
}

area.addEventListener('click', clicar);

function entrar(){
    area.innerText = '';
    area.innerText += ' entrou';
    area.style.background = '';
}

function sair(){
    area.innerText = '';
    area.innerText += ' saiu';
    area.style.background = '';
}
