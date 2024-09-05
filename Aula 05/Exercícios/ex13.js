class pessoa {
    constructor(){
        this.nome
        this.dataNascimento
        this.carteiraIdentidade
        this.email
        this.telefone
        this.cidade
        this.estado    
        this.seguroSocial
        this.cpf
    }

    informacoes(){
        console.log(`Nome: ${this.nome}, Nascimento: ${this.nascimento}, RG: ${this.carteiraIdentidade}, Email: ${this.email},
            Telefone: ${this.telefone}, Cidade: ${this.cidade}, Estado: ${this.estado},
            Seguro Social: ${this.seguroSocial}, CPF: ${this.cpf} `)
    }

}

const pessoa1 = new pessoa()
pessoa1.nome = "Bruce Banner"
pessoa1.dataNascimentos = 25.01.1980
pessoa1.carteiraIdentidade = 997776
pessoa1.email = "profbanner@email.com"
pessoa1.telefone = 552877776666
pessoa1.cidade = "Cachoeiro de Itapemirim"
pessoa1.estado = "ES"
pessoa1.seguroSocial = 21123
pessoa1.cpf = 267344835
pessoa1.informacoes()