class livro {
    constructor(){
        this.titulo
        this.autor
        this.anoPublicacao
        this.genero
    }
    
    detalhes(){
        console.log(`O livro ${this.titulo} foi escrito por ${this.autor} no ano de ${this.anoPublicacao}, e é do gênero de ${this.genero}.`)
    }
}

let livro1 = new livro()
livro1.titulo = "Uzumaki"
livro1.autor = "Junji Ito"
livro1.anoPublicacao = 1998
livro1.genero = "Ficção Supernatural"
livro1.detalhes()

let livro2 = new livro()
livro2.titulo = "Neon Genesis Evangelion"
livro2.autor = "Yoshiyuki Sadamoto"
livro2.anoPublicacao = 1995
livro2.genero = "Mecha"
livro2.detalhes()