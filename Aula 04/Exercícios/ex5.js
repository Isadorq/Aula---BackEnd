class Maquinas{
    constructor(){
        this.nome;
        this.eixos;
        this.minuto;
        this.consumo;
        this.ligar;
        this.ajuste
    }

    informacoes(){
        console.log(`Nome: ${this.nome}, Eixos: ${this.eixos}, Minuto: ${this.minuto}`)
    }
}

class furadeira extends Maquinas{
    constructor () {
        super()    
    }
    
    motor_ligado() {
        this.ligar = true;
        console.log("Você ligou o motor")
    }

    motor_desligar (){
        this.ligar = false;
        console.log("Você desligou o motor")
    }

    ajustar () {
        this.ajuste
        console.log("Você ajustou a velocidade")
    }
}

furadeira1 = new furadeira ();
furadeira1.nome = "Furadeirar"
furadeira1.eixos = 10
furadeira1.minuto = 120
furadeira1.motor_ligado ()
furadeira1.ajustar ()