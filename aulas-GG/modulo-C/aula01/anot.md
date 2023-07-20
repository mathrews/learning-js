# Entendendo o DOM:

- DOM é um acrônimo para Document Object Model, ou modelo de objetos para documento.

- `Conjunto de objetos dentro do seu navegador que vai dar acesso aos componentes internos do seu website.` 

- O DOM não funciona dentro do NODE por exemplo.

- Árvore DOM: arvore DOM é um conjunto hierarquico de objetos que começa pelo window; do window surge o location, document e history; e etc.

~~~JS exemplo
window.document.write('Olá, Mundo.')
~~~

- Location: Diz a localização do seu site: url, página atual, página anterior, etc.

- Document: Dá acesso ao doc atual.

- history: Guarda de onde você veio e para onde você vai. 

- Dentre outros.

## Selecionando os elementos do document no DOM:

- Podemos selecionar por: Marca, ID, Nome, Classe e por Seletor.

- Se você for escolher o elemento por tag, e quiser um específico, podemos colocar da seguinte maneira:

~~~JS exemplo
let paragrafo = document.getElementsByTagName('p')[0] // Como nos arrays
~~~

- Atualmente, usamos na maioria dos casos somente a seleção por seletor da seguinte maneira:

~~~JS exemplo
let paragrafo = document.querySelector('#msg');
~~~

