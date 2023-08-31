# Inserindo CSS no React

- O `CSS` pode ser `adicionado de forma global` na aplicação por meio do arq index.css;

- Pode estilizar a `nível de componentes`;

- E chamar este CSS no componente;

- O CSS global irá fazer com que os componentes compartilhem estilos em comum;

- Não é possível criar classes com traços, no lugar pode se colocar em camel case ou com underline;

# Fragments:

- Os React Fragments permite a criação de um componente sem elemento pai;

- O propósito é `descomplicar os nós do DOM`;

- A sintaxe é `<> e </>`, e não há um nome para a tag;

- Criamos no próprio JSX;

# Avançando em props: 

- Podemos `definir tipos para as props`, realizamos uma espécie de validação;

- Definimos em um objeto chamado propTypes no próprio componente;

- E ainda há a possibilidade de `definir um valor padrão`;

- Neste caso utilizamos o objeto `defaultProps`;

# Eventos

- Os `eventos de React` são os mesmos eventos do DOM, ou seja, temos eventos como o `onClick`;

- `O evento é atrelado a uma tag que irá executá-lo;`

- Geralmente um `método` é atribuído ao evento, este método deve ser criado no componente;