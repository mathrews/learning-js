let nome = window.prompt('Qual é seu nome?');

corpo.innerHTML = `<h1>Meu nome é ${nome}</h1> <br>`;

document.write(`Olá ${nome.toUpperCase()}! Seu nome tem ${nome.length} letras.<br/>`);

document.write(`Seu nome em minúsculo é <strong>${nome.toLowerCase()}</strong>`);