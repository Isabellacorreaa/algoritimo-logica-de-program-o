/* A calculadora de Juros Simples utiliza a fómula de juros J=P*i*n
onde:
J = Juros;
P = Valor presente, principal (capital);
i = Taxa de juros; 0.03 = 3%
n = Numero de periodos (meses)
*/

const valorCapital = 1000;
const taxaJuros = 0.03
const totalPeriodo = 12;

const jurosFinal = valorCapital * taxaJuros * totalPeriodo;

console.log(`Juros no periodo de ${totalPeriodo} meses é de ${jurosFinal} reais`);