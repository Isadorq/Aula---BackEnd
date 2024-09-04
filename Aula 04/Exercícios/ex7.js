class livros {

    constructor(){
        this.nome
        this.qntd
        this.preco
        this.autor
        this.edicao
        this.emprestar
        this.devolver
        
    }

    informacoes(){
        console.log(`Nome: ${this.nome}, Quantidade: ${this.qntd}, Preço: ${this.preco}, Autor: ${this.autor}`)
    }
        
    emprestimo(){
        console.log(`O livro ${this.nome} foi emprestado!`)
    }

    devolucao(){
        console.log(`O livro ${this.nome} foi devolvido!`)
    }
}

const livro1 = new livros()
livro1.nome = "A menina que roubava livros"
livro1.qntd = 10
livro1.preco = 52
livro1.autor = "Markus Zusak"
livro1.informacoes()
livro1.emprestimo()

const livro2 = new livros
livro2.nome = "Pedagogia do oprimido"
livro2.qntd = 15
livro2.preco = 37.90
livro2.autor = "Paulo Freire"
livro2.informacoes()
livro2.devolucao()