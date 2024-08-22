class Carro {
    constructor() {
        this.marca,
        this.modelo,
        this.ano,
        this.motor_ligado
    }

    ligar_motor(){
        this.motor_ligado = true;
    }

    desligar_motor(){
        this.motor_ligado = false;
    }

    status_motor(){
        console.log(`Estado do motor é: ${this.motor_ligado}`)
    }
}

let carro1 = new Carro();
carro1.marca = "Maverick";
carro1.modelo = "Ford";
carro1.ano = 1969;
carro1.motor_ligado = false;
carro1.status_motor()

let carro2 = new Carro();
carro2.marca = "Volkswagen"
carro2.modelo = "T-Cross"
carro2.ano = 2020
carro2.motor_ligado = true;
carro2.status_motor()