class Pessoa {
    constructor() {
        this.nome;        
        this.idade;          
        this.estadocivil;    
        this.hobbies;      
        this.endereco = {      
            rua: "",
            cidade: "",
            estado: ""
        };
    }

    mostrarInfoPessoa() {
        console.log(`Nome: ${this.nome}
        Idade: ${this.idade}
        Estado Civil: ${this.estadocivil}
        Hobbies: ${this.hobbies.join(", ")}
        Endereço: Rua ${this.endereco.rua}, Cidade: ${this.endereco.cidade}, Estado: ${this.endereco.estado}`);
    }
}

let pessoa1 = new Pessoa();
pessoa1.nome = "Carlos Silva";
pessoa1.idade = 30;
pessoa1.estadocivil = true;
pessoa1.hobbies = ["Ler", "Viajar", "Ouvir música"];
pessoa1.endereco.rua = "Rua das Flores";
pessoa1.endereco.cidade = "São Paulo";
pessoa1.endereco.estado = "SP";

pessoa1.mostrarInfoPessoa();


let pessoa2 = new Pessoa();
pessoa2.nome = "Luciana Marques";
pessoa2.idade = 42;
pessoa2.estadocivil = true
pessoa2.hobbies = ["Escrever", "Estudar", "Ouvir música"];
pessoa1.endereco.rua = "Rua das Camélias";
pessoa1.endereco.cidade = "São Paulo";
pessoa1.endereco.estado = "SP";

pessoa2.mostrarInfoPessoa();