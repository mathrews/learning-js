// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
// }

// Pessoa.prototype.nomeCompleto = () => {
//     return `${this.nome} ${this.sobrenome}`
// }

// let jhon = new Pessoa('João', 'da Silva') //instância

// let marie = new Pessoa('Maria', 'dos Santos') // internamente isso cria um novo objeto e retorna esse objeto. E isso se classifica como uma instância

// console.log(jhon);
// console.log(jhon.nomeCompleto());

// console.log(marie);
// console.log(marie.nomeCompleto());


function Carro () {
    this.modelo = modelo.value;
    this.ano = ano.value;
    this.marca = marca.value;
    this.state = false;
}

Carro.prototype.verificarEstado = () => {
    if (carro.state == false) {
        carro.state = true
        return `O carro ligou`
    } else if (carro.state == true) {
        carro.state = false
        return `O carro desligou`
    }
    return `${carro.state}`
}

let carro = new Carro();

Carro.prototype.ligarCarro = () => {
    return carro.verificarEstado();
}


function mostrarNoConsole () {
    carro.ano = ano.value
    carro.marca = marca.value
    carro.modelo = modelo.value
    return carro;
}

ligarCarroBtn.onclick = () => {
    console.log(carro.ligarCarro()); 
}

btn.onclick = () => {
    console.log(mostrarNoConsole())
}
