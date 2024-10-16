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

    atualizarGenero(novoGenero) {
        this.genero = novoGenero; 
        console.log(`O gênero do livro "${this.titulo}" foi alterado para "${this.genero}".`);
    }
}

let livro1 = new Livro();
livro1.titulo = "Coraline";
livro1.autor = "Neil Gaiman";
livro1.anoPublicacao = 2002;
livro1.genero = "Conto de fadas";

livro1.mostrarDetalhes();
livro1.atualizarGenero("Aventura");
livro1.mostrarDetalhes();