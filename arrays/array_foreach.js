// Includes verifica se existe o item no array e devolve o verdadeiro ou falso

const nomes = ['Matheus', 'Isabella', 'Luana', 'Urias'];
const verificaNomes = nomes.includes('Isabella');

//foreach

const alunos = ['Isabella', 'Luana', 'Ana'];


alunos.forEach((nomes) => {
	console.log(`Bem vindo(a)" ${nomes}`);
});


const valores = [10, 500, 300];

valores.forEach((valor) => {
     const conta = valor + 150;
     console.log("Valor ajustado:" + conta)
})