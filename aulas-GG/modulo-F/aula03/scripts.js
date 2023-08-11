let amigo = {
    nome: 'Mateus',
    idade: 15,
    peso: 60.1,
    engordar(n = 0){
        this.peso += n;
        return this.peso; 
    },
    cor: 'pardo'
}

amigo.engordar(5)
console.log(amigo.nome, amigo.peso);