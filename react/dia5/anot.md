# Lendo a Doc do REACT e anotando coisas importantes:

- O comando `export default` especifica o componente principal do arquivo.

- Podemos usar o atributo `style` quando seus estilos dependem de variáves JS;

- Na renderização condicional, podemos usar aqui alguns exemplos de como fazer isso:

~~~JS exemplo

//EX01: IF/ELSE

let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

//EX02: TERNARIO

<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

//EX03: OPERADOR LÓGICO && SE NÃO HOUVER ELSE

<div>
  {isLoggedIn && <AdminPanel />}
</div>
~~~

- Na `renderização de listas`, o JSX conta com o `for loop` e `func array map()` para renderizar listas de componentes, por exemplo:

~~~JS exemplo
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
~~~

- E para cada item dessa lista, deve haver um `ID` para identificar cada um e usar o atributo `KEY` em cada compontente que aparecer da lista. O react usa essas chaves para saber o estado delas se você inserir, excluir ou reordenar os itens posteriormente;

- A seguir, veremos uma renderização de lista com um filtro que define uma cor:

~~~JS exemplo
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
~~~

- A lógica `sempre` vem antes do return;

## Respondendo a eventos:

- Você pode responder a eventos, como o click, declarando funções `de manipulador de eventos` dentro de seus components;

~~~JS exemplo
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
~~~

- No atributo `a função não tem parenteses!`

- `Não chame a função do manipulador de eventos: você só precisa transmiti-la`. O React chamará seu manipulador de eventos quando o usuário clicar no botão.