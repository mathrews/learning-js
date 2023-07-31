# Condições em JS, parte 2:

- 2 tipos de condições vistas anteriormente: simples e compostas.

- Também há o tipo de condição que sse chama: `condições aninhadas`. Ao invés de ser apenas sim ou não, ela inclui condições dentro dela. Por exemplo:

~~~JS exemplo
    if (condição) {
        
    } else {
        if (condição2) {

        } else {

        }
    }
~~~

- As condições acima estão `aninhadas(dentro)` uma das outras.

- Nem sempre que o código está certo, a lógica estará certa.

- No exemplo acima, utilizamos uma estrutura um pouco "goHorse", mas há uma melhor:

~~~JS exemplo
    if (condição) {
        
    } else if (condição2){
        
    } else {

    }
~~~

- O exemplo acima economiza mais blocos e torna o código mais limpo.

- Para pegar qualquer dado em relação a horário ou data atual, basta usar o construtor `new Date()` e utilizar seus métodos como no exemplo abaixo:

~~~JS exemplo
    let data = new Date();
    let horas = data.getHours();
    console.log(horas);
~~~

## Condição múltipla:

- Serve para valores fixos, tem a possibilidade de valores fixos e de sim e não. Segue uma representação semântica gráfica abaixo:

<img src="condições múltiplas.png">

- Esse tipo é usado apenas em situações específicas.

- Esse tipo possui a seguinte sintaxe:

~~~JS exemplo
    switch (expressão) {
        case valor1:
        
        break;
        case valor2:
        
        break; `//OBRIGATÓRIOS`
        default: ; //isso faz o valor voltar ao normal se por acaso nenhum dos casos acima forem verdadeiros
    }
~~~

- o FLUXO condicional desse tipo é feito de acordo com a seguinte imagem: <img src="Captura de tela 2023-07-31 201531.png">

- Para testar intervalos: `if/else`. Para testar valores `FIXOS/PONTUAIS`: switch/case.