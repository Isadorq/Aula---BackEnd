let saldo = 1200
let deposito = 200
let saque = 325

let operacao = saldo + deposito;
console.log("Saldo após o depósito: " + operacao);
saldo = operacao; // atualiza o saldo

operacao = saldo - saque;
console.log("Saldo após o saque: " + operacao);
saldo = operacao; // atualiza o saldo

console.log("Saldo final na conta: " + saldo);