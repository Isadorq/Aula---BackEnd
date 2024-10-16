let contaBancaria = {
    titular: "Carlos Silva",
    saldo: 1000, // Saldo inicial
    depositar: function(valor) {
        this.saldo += valor; // Adiciona o valor ao saldo
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    },
    sacar: function(valor) {
        if (valor > this.saldo) {
            console.log("Erro: Saldo insuficiente para saque.");
        } else {
            this.saldo -= valor; // Subtrai o valor do saldo
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        }
    },
    mostrarSaldo: function(cliente) {
        console.log(`Cliente: ${cliente.nome}, Saldo atual: R$${cliente.conta.saldo}`);
    }
};

let cliente = {
    nome: "Marcelo Hirai",
    conta: contaBancaria
};

cliente.conta.depositar(200);
cliente.conta.sacar(100);    
cliente.conta.sacar(1500);   

cliente.conta.mostrarSaldo(cliente);