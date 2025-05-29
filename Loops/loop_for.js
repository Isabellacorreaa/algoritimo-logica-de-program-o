//FOR > É usado quando você sabe quantas vezes deseja repetir um bloco de código

//for (let i = 0; i <= 5; i++) {
//     console.log("PASSOU AQUI" + i)
//}

const numero = 2;
let valor = 10;

for (let i = 0; i <= numero; i++) {
	console.log('NUMERO SENDO PASSADO' + i);
	valor = valor + 5;
}

console.log(valor);

