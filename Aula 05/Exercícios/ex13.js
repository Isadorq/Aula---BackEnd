class Estudante {
    constructor() {
        this.nome;                 
        this.matricula;        
        this.curso;                
        this.materias; 
    }

    mostrarInfo() {
        console.log(`O aluno(a) ${this.nome} da matrícula ${this.matricula} está matriculado(a) no curso${this.curso} com as matérias ${this.materias}.`)
    }
}

let estudante = new Estudante();
estudante.nome = "José Novaes";
estudante.matricula = 156287;
estudante.curso = "Análise e Desenvolvimento de Sistemas";
estudante.materias = ["Tinco", "IABD", "Eng. de Software"];

estudante.mostrarInfo();