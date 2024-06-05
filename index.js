const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function perguntar(question, callback) {
    readline.question(question, (answer) => {
      callback(answer);
    });
  }
  
  function calculaRanking() {
    perguntar('Qual seu número de vitórias? ', (vitorias) => {
      vitorias = parseInt(vitorias);
  
      perguntar('Qual seu número de derrotas? ', (derrotas) => {
        derrotas = parseInt(derrotas);
  
        const saldoVitorias = vitorias - derrotas;

if (saldoVitorias <= 10){
    console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível de: FERRO")
} else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível de: BRONZE")
} else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível de: PRATA")
} else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível de: OURO")
} else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível de: DIAMANTE")
} else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível de: LENDÁRIO")
} else {
    console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível de: IMORTAL")
}      

readline.close()
        });
    });
}
calculaRanking();