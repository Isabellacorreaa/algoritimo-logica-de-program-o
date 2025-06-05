// Filte -Find

const numeros = [1, 5, 10, 30, 230];

const numerosFiltrados = numeros.filter((numero) => {

  if (numero >= 10) {
    return numero
  }

})

console.log(numeros);

console.log("======")

console.log(numerosFiltrados)

// FIND

const alunos = ["Matheus", "Isabella", "Luana"]

const buscaNome = alunos.find((aluno) => {
  if (aluno.length > 5) {
      return aluno;
  }
})

console.log(buscaNome);

//findIndex

const buscaAluno = alunos.findIndex((aluno) => {
      return aluno === "Henrique"
})

console.log(buscaAluno);