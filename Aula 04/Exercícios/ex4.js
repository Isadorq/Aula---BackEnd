class cliente {
    constructor (){
        this.nome;
        this.profissao;
        this.saldo;
        this.pix;
        this.emprestimo;
        this.saque
    }

    dadosCliente(){
        console.log(`${this.nome} é ${this.profissao}`)
    }

    transicao_pix(){
        this.pix = true;
        console.log("Pix realizado!")
    }

    transicao_emprestimo() {
        this.emprestimo = true;
        console.log("Você fez um empréstimo!")
    }

    transicao_deposito(){
        this.deposito = true;
        console.log("Você fez um depoósito!")
    }

    extrato () {
        this.saldo
        console.log(`Você possui ${this.saldo} reais`)
    }


}

cliente1 = new cliente ();
cliente1.nome = "José"
cliente1.profissao = "Mecânico"
cliente1.saldo = 1200
cliente1.dadosCliente()
cliente1.extrato()
cliente1.transicao_deposito()

cliente2 = new cliente ();
cliente2.nome = "Juliana"
cliente2.profissao = "Açougueira"
cliente2.saldo = 2340
cliente2.dadosCliente()
cliente2.extrato()
cliente2.transicao_emprestimo()

cliente3 = new cliente ();
cliente3.nome = "Marcelo"
cliente3.profissao = "Professor"
cliente3.saldo = 1230
cliente3.dadosCliente()
cliente3.extrato()
cliente3.transicao_pix()