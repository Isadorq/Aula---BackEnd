class produtos {

    constructor(){
        this.nome
        this.qntd
        this.preco
        this.tipo
        this.consumo
        this.ligar
    }

}

class fritadeira extends produtos {
    constructor() {
        super()
    }

    ligar(){
        this.ligar = true
        console.log("Fritadeira ligada")
    }

    desligar(){
        this.ligar = false
        console.log("Fritadeira desligada")
    }

    dados(){
        console.log(`Nome: ${this.nome}, Preço: ${this.preco}`)
    }
    ajuste_temp(temperatura){
        console.log(`A temperatura foi ajustada para ${temperatura} `)
    }
}

class televisao extends produtos {
    constructor() {
        super()
    }

    ligar(){
        this.ligar = true
        console.log("Televisão ligada")
    }

    desligar(){
        this.ligar = false
        console.log("Televisão desligada")
    }
    dados(){
        console.log(`Nome: ${this.nome}, Preço: ${this.preco}`)
    }
}

class arcondicionado extends produtos {
    constructor(){
        super()
    }

    ligar(){
        this.ligar = true
        console.log("Ar-condicionado ligado")
    }

    desligar(){
        this.ligar = false
        console.log("Ar-condicionado desligado")
    }
    
    dados(){
        console.log(`Nome: ${this.nome}, Preço: ${this.preco}`)
    } 

    ajuste_temp(temperatura){
        console.log(`A temperatura foi ajustada para ${temperatura} `)
    }
}

let fritadeira1 = new fritadeira()
fritadeira1.nome = "Fritadeira Philco"
fritadeira1.preco = 280
fritadeira1.dados()
fritadeira1.ligar()
fritadeira1.ajuste_temp(200)

let televisao1 = new televisao()
televisao1.nome = "Televisão Samsung"
televisao1.preco = 1200
televisao1.dados()
televisao1.desligar()

let arcondicionado1 = new arcondicionado()
arcondicionado1.nome = "Ar-Condicionado LG"
arcondicionado1.preco = 400
arcondicionado1.dados()
arcondicionado1.ligar()
arcondicionado1.ajuste_temp(25)