//Splice:
/*
Index (indice): A posição no array onde a operação começará
Quantidade: O numero de elementos a serem removidos a partir daquela posição.
elementos que deseja adicionar naquele index (opcional)
*/

const numeros = [1, 5, 20, 10];

numeros.splice(1, 2, 30);

//console.log(numeros);

const nomes = ["Lucas", "Ana", "Isabella", "Luana"];

const resultados = nomes.splice(2, 2, "Isabella", "Luana");

console.log(resultados);

console.log(resultados);
console.log('------------');
console.log(nomes);
