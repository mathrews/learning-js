function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = () => {
    return `${this.nome} ${this.sobrenome}`
}

let jhon = new Pessoa('João', 'da Silva') //instância

let marie = new Pessoa('Maria', 'dos Santos') // internamente isso cria um novo objeto e retorna esse objeto. E isso se classifica como uma instância

console.log(jhon);
console.log(jhon.nomeCompleto());

console.log(marie);
console.log(marie.nomeCompleto());