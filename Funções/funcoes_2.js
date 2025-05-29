// Funções com parametros

function mostraNome(name) {
	console.log(`Seja bem vindo ${name} ao sistema`);
}

const nota1 = 8;
const nota2 = 10;
const nota3 = 7;
const nome = "Isabella";

function calculoMedia(nota1, nota2, nota3, nome) {
	let media = (nota1 + nota2 + nota3) / 3;
	return `O aluno ${nome} teve a média de ${media}`;
}

const resultado = calculoMedia(nota1, nota2, nota3, nome);

console.log(resultado);


const mediaFulano = calculoMedia(10, 5, 6, "Isabella");

console.log(mediaFulano);

// ============================


function calculadoraJuros(valorCapital, taxaJuros, totalPeriodo){
   const jurosFinal = valorCapital * taxaJuros * totalPeriodo;

    console.log(`Juros no periodo de ${totalPeriodo} meses é de R$ ${jurosFinal} reais`)
}

calculadoraJuros(2000, 0.03, 12)