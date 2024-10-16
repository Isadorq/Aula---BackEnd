class Pessoa {
    constructor() {
        this.nome;            
        this.idade;          
        this.estadocivil;    
        this.hobbies;      
    }

    mostrarInfoPessoa(){
        console.log(`Nome: ${this.nome}
            Idade: ${this.idade}
            Estado Civil: ${this.estadocivil}
            Hobbies: ${this.hobbies}`);
    }
}   

let pessoa1 = new Pessoa();
pessoa1.nome = "Carlos Silva";
pessoa1.idade = 30;
pessoa1.estadocivil = true
pessoa1.hobbies = ["Ler", "Viajar", "Ouvir música"];

pessoa1.mostrarInfoPessoa();

let pessoa2 = new Pessoa();
pessoa2.nome = "Marcela Silva";
pessoa2.idade = 25;
pessoa2.estadocivil = false
pessoa2.hobbies = ["Fotografia", "Culinária", "Pintura"];

pessoa2.mostrarInfoPessoa();