# Renderização condicional (if): 

- Podemos atrelar a exibição de algum elemento a um `if`;

- Esta ação é chamada de `renderização condicional`;

- Envolvemos as tags em chaves `{}`;

- Como as chaves `executam JS ou TS` criamos nossa condição;

- É possível usar o `state` para criar condições;

# Renderização de listas:

- Para renderizar uma lista, precisa de um `array`;

- Depois utilizamos a `função map`, para percorrer cada um dos itens;

- Podemos assim renderizar algo na tela;

- É possível `unir operadores condicionais` com a renderização de listas;

# State Lift:

- `State Lift` é uma técnica utilizada para compartilhar o State;

- Vários componentes podem depender de um `mesmo estado`;

- Então precisamos elevar o nível do mesmo a um `componente pai`;

- Então centralizamos o state no pai, e `definimos quem usa e quem define (setState)`;