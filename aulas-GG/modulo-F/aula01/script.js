let num = [5, 8, 9];

num[3] = 6;

num.push(7); //adiciona elementos e valores no array

console.log(`Nosso vetor é o ${num}. e o tamanho dele é ${num.length}. E em ordem crescente é ${num.sort()}`);

for (let i = 0; i < num.length; i++){
    console.log(num.sort()[i]);
}

for (let i in num){
    console.log(num[i]);
}

let pos = num.indexOf(8); //busca um valor dentro do vetor e retorna o índice que o valor está. Se não tiver tal valor, é retornado -1.

console.log(pos);

