class Pessoa {
    constructor() {
        this.nome;
        this.idade;
        this.estadocivil;
        this.hobbies = [];
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

let pessoas = [
    {
        nome: "Carlos Silva",
        idade: 30,
        cidade: "São Paulo"
    },
    {
        nome: "Maria Oliveira",
        idade: 25,
        cidade: "Rio de Janeiro"
    },
    {
        nome: "João Pereira",
        idade: 40,
        cidade: "Belo Horizonte"
    },
    {
        nome: "Ana Souza",
        idade: 35,
        cidade: "Porto Alegre"
    }
];

function mostrarInfoPessoas(listaDePessoas) {
    listaDePessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}

mostrarInfoPessoas(pessoas);