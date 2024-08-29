// super() - puxa os dados da classe mãe
class automovel {
    constructor (){
        this.cor
        this.modelo
        this.combustível
        this.rodas
        this.motor_ligado
        this.motor_desligado
    }

    ligarmotor() {
        this.motor_ligado = true;
        console.log("O motor está ligado")
    }

    desligarmotor() {
        this.motor_desligado = true;
        console.log("O motor está desligado")
    }

    status_automovel () {
        console.log(`Automóvel = Cor: ${this.cor}, Modelo: ${this.modelo}`)
    }
}


class carro extends automovel {
    constructor() {
        super()
        this.baixarvidro
        this.levantarvidro
    }

    vidro_levantado () {
        this.levantarvidro = true;
        console.log("Os vidros estão levantados")
    }

    vidro_abaixado (){
        this.vidro_abaixado = true;
        console.log("Os vidros estão abaixados")
    }
}

class moto extends automovel {
    constructor() {
        super()
    }
}

class caminhao extends automovel {
    constructor() {
        super()
        this.baixarvidro
        this.levantarvidro
        this.baixarvidro
        this.levantarvidro
    }

    vidro_levantado () {
        this.levantarvidro = true;
        console.log("Os vidros estão levantados")
    }

    vidro_abaixado (){
        this.vidro_abaixado = true;
        console.log("Os vidros estão abaixados")
    }
}

let carro1 = new carro();
carro1.cor = "Cinza";
carro1.modelo = "Prisma";
carro1.status_automovel()
carro1.ligarmotor ()
carro1.vidro_abaixado()

let moto1 = new moto();
moto1.cor = "Vermelha";
moto1.modelo = "Scooter";
moto1.status_automovel()
moto1.desligarmotor()

let caminhao1 = new caminhao();
caminhao1.cor = "Preto";
caminhao1.modelo = "Scania"
caminhao1.status_automovel()
caminhao1.desligarmotor()
caminhao1.vidro_levantado()