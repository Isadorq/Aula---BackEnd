const anoAtual = new Date().getFullYear();

class Livro {
    constructor() {
        this.titulo = '';
        this.autor = '';
        this.anoPublicacao = null;
        this.genero = '';
    }

    anos() {
        return anoAtual - this.anoPublicacao;
    }

    mostrarDetalhes() {
        console.log(`O livro "${this.titulo}" foi escrito por ${this.autor} no ano de ${this.anoPublicacao}, e é do gênero "${this.genero}".`);
        console.log(`Ele foi publicado há ${this.anos()} anos atrás.`);
    }
}

let livro1 = new Livro();
livro1.titulo = "O Labirinto do Fauno";
livro1.autor = "Guilhermo Del Toro";
livro1.anoPublicacao = 2019;
livro1.genero = "Fantasia";

delete livro1.avaliar; 

livro1.mostrarDetalhes();