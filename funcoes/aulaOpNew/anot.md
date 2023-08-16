# OPERADOR NEW:

- O operador new no JS informará que a função é uma função construtora. A função construtora é geralmente utilizada em linguagens orientadas a objeto, e o JS é uma dessas linguagens.

- Esse tipo de função é responsável por criar e inicializar objetos. E servem como um mockup ou molde para criar uma instância de uma classe específica. Em outras palavras, o operador `new`.

- As 2 diferenças entre invocar uma função normalmente e invocar ela como uma construtora, é que  1°, ela cria um novo objeto, e quando você não define um valor de retorno, ela retorna esse objeto criado. E 2°, ela cria um parâmetro implícito `this`.

- O this se refere a um objeto global ao chamar como uma função comum, no caso do browser é o `window`, e no caso do node é o `global`. Porém, quando a função for chamada como construtora, o this irá `se referir ao novo objeto criado`.

~~~JS exemplo
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`
    }
}

let jhon = new Pessoa('João', 'da Silva') //instância

let marie = new Pessoa('Maria', 'dos Santos') // internamente isso cria um novo objeto e retorna esse objeto. E isso se classifica como uma instância

console.log(jhon);
console.log(jhon.nomeCompleto());

console.log(marie);
console.log(marie.nomeCompleto());
~~~

## __Proto__

- A propriedade implicita `proto` é o mecanismo de `herança` do JS funcionando, ou seja, quando o novo objeto da classe construtora é criado, esse mesmo objeto `herda o protótipo da classe construtora`, e o proto é uma `propriedade desse objeto`. E essa propriedade receberá uma referência ao protótipo da classe construtora, e prototipo dessa classe é `prototype`.

- E por quê isso é importante? Pois quando instanciamos um novo objeto da classe específica, cada uma delas tem propriedades métodos que ocupam espaços desnecessários na memória a cada vez que é o objeto é instanciado, como se uma nova função fosse criada e armazenada em memória. E se um mesmo método é usado em todas as instâncias, é totalmente ineficiente.

- E para isso, existe um mecanismo que faz esse método ser armazenado na memória apenas uma vez e faz com que todas as instâncias compartilhem esse mesmo método. E esse mecanismo é baseado no protótipo da classe construtora.

~~~JS exemplo:
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = () => {
    return `${this.nome} ${this.sobrenome}`
}

let jhon = new Pessoa('João', 'da Silva') //instância
console.log(jhon.nomeCompleto());
~~~

- Nisso, o método 'nomeCompleto' não existe mais nessa instância, e como não existe na instância, ele vai procurar na propriedade `proto` do objeto. E o proto **não** está copiando a cada instância o `Classe.prototype`, ele está apenas `referenciando`.

- E isso é mais eficiente pois o método está armazenado apenas uma vez na memória e a propriedade proto está apenas referênciando e não copiando o protótipo da classe construtora. E isso é eficiênte.



