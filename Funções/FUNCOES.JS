// Funções

function mostraNome() {
    console.log("Olá seja bem vindo ao sistema!")

    console.log("Aprendendo algoritimos!")
}


function gerarNumeroAleatorio() {
  return Math.random();

}

let numeroGerado = gerarNumeroAleatorio();

console.log("Numero gerado foi " + numeroGerado)

function dataAtual() {
   const data = new Date();
   return data.getFullYear();
}

const data = dataAtual();
console.log(data);