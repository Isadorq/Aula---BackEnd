const consumoPWatts = 1750;
const horasPDia = 8; 
const diasPMes = 25; 
const custoPKw = 0.75;

const consumoKw = consumoPWatts / 1000;

const consumoMensal = consumoKw * horasPDia * diasPMes;
 
const custoTotal = consumoMensal * custoPKw;

console.log(`O custo por mês é: R$ ${custoTotal}`);