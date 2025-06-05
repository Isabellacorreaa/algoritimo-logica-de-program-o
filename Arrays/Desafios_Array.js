/*
   Desafio 1 -
   Crie um array com alguns cargos de empresas (por exemplo, fullstack, frontend, backend, mobile)

   Você precisa remover o cargo backend da lista de cargos porque não está mais disponivel na empresa
   */

   const cargos = ['Fullstack', 'Frontend', 'Backend', 'Mobile'];
   
   cargos.splice(2, 1)

   console.log(cargos);

  /* 
    Desafio 2 
    Crie um array com os nomes abaixo:
    "Alice", "Lucas", "Carol", "David"
    
    Você está proucurando por um nome chamado Henrique caso o nome esteja na lista mostre no console
    qual a posição em que esse nome está na sua lista.
    Caso não encontre esse nome mostre no console o nome proucurado e fale que não foi encontrado na lista
   */

const nomes = ["Alice", "Lucas", "Carol", "David"];
  
const estaNalista = nomes.indexOf("Henrique")

 if(estaNalista !== -1){
    console.log('O nome Henrique está na posição ${posicaoNome}')    
 } else {
        console.log('O Henrique não foi encontrado nessa lista')
 }

 /*
  Desafio 3

  Crie um Array com esses numeros: 5, 15, 23, 2

  Você deve devolver qual é a soma de todos esses numeros usando foreach
  */

  /* const numeros = [5, 15, 23];
   let somaTotal = 0;

  numeros.forEach((numero)=> {
       somaTotal += numeros;
  })

  console.log (`A soma total da lista é ${somaTotal}`)

  /* Desafio 4
   
  Crie um array com esses numeros: [6, 12, 5, 9, 14, 27]

  Você deve devolver um array com todos os numeros que são multiplos de 3,
  */



  
  const numeros = [6, 12, 5, 9, 14, 27];
  
  const numerosMultiplos = [];

  numeros.forEach((numero) => {
        if (numero % 3 === 0){
          numerosMultiplos.push(numero)    
        }
  })

  console.log(`Lista de numeros multiplos de (3): ${numerosMultiplos}`)

 

  /* Desafio 5 */

  const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];
  const palavrasMaiores = [];

  palavras.forEach((palavra) => {
        if (palavra.length > 5){
                palavrasMaiores.push(palavra);
        }
  })

  console.log("Palavra maiores que 5 letras são" + palavrasMaiores)