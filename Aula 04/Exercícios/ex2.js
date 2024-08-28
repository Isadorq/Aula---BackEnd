// método exibe trabalho (string nome da empresa, int tempo de serviço)
//print (nome da empresa, tempo de trabalho)

class Pessoa {
    constructor() {
        this.nome;
        this.idade;
        this.profissão;
        this.salário;
        this.empresa
        this.tempo
    }
    exibetrabalho(){
        console.log(`Sou o ${this.nome} e trabalho na ${this.empresa} a ${this.tempo} anos`)
    }
}

const pessoa1 = new Pessoa();
pessoa1.nome = 'José';
pessoa1.empresa = 'Empresa X';
pessoa1.tempo = 10;
pessoa1.exibetrabalho();