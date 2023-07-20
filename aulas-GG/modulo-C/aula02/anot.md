# Eventos DOM:

- Evento é tudo aquilo que pode acontecer com qualquer elemento.

- O evento é disparado ao interagir com algo no elemento.

- Exemplos de elemento: mouseEnter('ao entrar com o cursor no elemento'); mouseMove('ao mover o mouse no elemento'); mouseDowm('ao clicar com o mouse no elemento'); mouseUp('ao soltar o mouse no elemento'); click('click inteiro'); mouseOut('mouse indo para fora do elemento').

- Mas para disparar e tratar o evento...

## Funções:

- Conjunto de código que serão executadas apenas quando o evento ocorrer.

- Podemos adicionar os disparos da funções diretamente no html, como nesse exemplo:

~~~JS exemplo
<div onclick="clicar()">
        Interaja...
</div>

<script>
    function clicar(){
        area.innerText = 'Clicou';
        area.style.background = 'red';
    }
</script>
~~~

- Ou podemos também adicionar direto no JS para evitar poluir o HTML, como nesse exemplo:

~~~JS exemplo
area.addEventListener('click', clicar);
~~~